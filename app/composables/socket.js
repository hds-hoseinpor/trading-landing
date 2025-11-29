import { ref } from "vue";
import { ENDPOINTS, API_CONFIG } from "~/constants/app";

export function useBinanceSocket(useTestnet = true) {
  const socketStatus = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,
  };

  const ws = ref(null);
  const isConnected = ref(false);
  const readyState = ref(socketStatus.CLOSED);

  const subscriptions = {};

  const listeners = {};

  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;
  const reconnectInterval = 1000;

  function connect() {
    return new Promise((resolve, reject) => {
      const baseURL = useTestnet
        ? API_CONFIG.WS_TESTNET_URL
        : API_CONFIG.WS_URL;

      ws.value = new WebSocket(`${baseURL}${ENDPOINTS.WS_COMBINED}`);

      ws.value.onopen = () => {
        reconnectAttempts = 0;
        isConnected.value = true;
        readyState.value = socketStatus.OPEN;
        resubscribe();
        resolve();
      };

      ws.value.onclose = () => {
        isConnected.value = false;
        readyState.value = socketStatus.CLOSED;
        handleReconnect();
      };

      ws.value.onerror = (err) => {
        reject(err);
      };

      ws.value.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          handleMessage(msg);
        } catch (err) {
          console.error("Invalid WebSocket message:", err);
        }
      };
    });
  }

  function disconnect() {
    ws.value?.close();
    ws.value = null;
  }

  function subscribe(stream) {
    subscriptions[stream] = true;

    if (ws.value && ws.value.readyState === socketStatus.OPEN) {
      ws.value.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: [stream],
          id: Date.now(),
        }),
      );
    }
  }

  function unsubscribe(stream) {
    delete subscriptions[stream];

    if (ws.value && ws.value.readyState === socketStatus.OPEN) {
      ws.value.send(
        JSON.stringify({
          method: "UNSUBSCRIBE",
          params: [stream],
          id: Date.now(),
        }),
      );
    }
  }

  function resubscribe() {
    const streams = Object.keys(subscriptions);

    if (streams.length > 0) {
      ws.value?.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: streams,
          id: Date.now(),
        }),
      );
    }
  }

  function addEventListener(eventType, callback) {
    if (!listeners[eventType]) listeners[eventType] = {};

    const key = "fn_" + Date.now() + "_" + Math.random();
    listeners[eventType][key] = callback;

    return () => removeEventListener(eventType, callback);
  }

  function removeEventListener(eventType, callback) {
    if (!listeners[eventType]) return;

    for (const key in listeners[eventType]) {
      if (listeners[eventType][key] === callback) {
        delete listeners[eventType][key];
      }
    }
  }

  function emit(eventType, data) {
    if (!listeners[eventType]) return;

    Object.values(listeners[eventType]).forEach((fn) => {
      try {
        fn(data);
      } catch (err) {
        console.error("Listener error:", err);
      }
    });
  }

  function handleMessage(msg) {
    const stream = msg.stream;
    const data = msg.data;

    if (!stream) return;

    let type = "message";

    if (stream.includes("@ticker")) type = "ticker";
    else if (stream.includes("@depth")) type = "orderbook";
    else if (stream.includes("@trade")) type = "trade";
    else if (stream.includes("@kline")) type = "kline";

    emit(type, data);
  }

  function handleReconnect() {
    if (reconnectAttempts >= maxReconnectAttempts) {
      console.error("Max reconnect attempts reached");
      return;
    }

    reconnectAttempts++;
    const delay = reconnectInterval * Math.pow(2, reconnectAttempts - 1);

    setTimeout(() => {
      connect().catch(() => handleReconnect());
    }, delay);
  }

  function subscribeTicker(symbol) {
    subscribe(symbol.toLowerCase() + "@ticker");
  }

  function subscribeOrderBook(symbol, level = 20) {
    subscribe(symbol.toLowerCase() + "@depth" + level + "@500ms");
  }

  function subscribeTrades(symbol) {
    subscribe(symbol.toLowerCase() + "@trade");
  }

  function subscribeKline(symbol, interval) {
    subscribe(symbol.toLowerCase() + "@kline_" + interval);
  }

  function subscribeCombined(streams) {
    subscribe(streams.join("/"));
  }

  return {
    connect,
    disconnect,

    isConnected,
    readyState,

    subscribeTicker,
    subscribeOrderBook,
    subscribeTrades,
    subscribeKline,
    subscribeCombined,
    unsubscribe,

    addEventListener,
    removeEventListener,
  };
}
