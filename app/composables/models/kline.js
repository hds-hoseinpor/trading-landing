import { ref } from "vue";
import { services } from "~/services";

export function useKline() {
  const candles = ref([]);
  const volumes = ref([]);
  const earliestLoadedTime = ref(null);

  const loadingKline = ref(false);

  const binanceSocket = inject("binanceSocket", null);

  async function loadInitial(interval = "1d") {
    const { call } = useRequest(services.kline.get);
    const response = await call({ interval });

    if (response.failed) return response;

    const klines = response.data;

    candles.value = prepareCandles(klines);
    volumes.value = prepareVolumes(klines);

    earliestLoadedTime.value = candles.value[0].time * 1000;
  }

  async function loadMoreHistory(interval = "1d") {
    if (loadingKline.value) return;

    const { call } = useRequest(services.kline.get, loadingKline);
    const response = await call({
      interval,
      endTime: earliestLoadedTime.value,
    });

    const newCandles = response.data;

    if (response.failed || !newCandles.length) return response;

    newCandles.pop();

    candles.value = [...prepareCandles(newCandles), ...candles.value];
    volumes.value = [...prepareVolumes(newCandles), ...volumes.value];

    earliestLoadedTime.value = candles.value[0].time * 1000;
  }

  function subscribeKline(symbol, interval, callback) {
    if (!binanceSocket) return;

    binanceSocket.subscribeKline(symbol, interval);
    binanceSocket.addEventListener("kline", ({ k }) => {
      const c = getCandle(k);

      candles.value[candles.value.length - 1] = c;

      const v = getVolume(k);

      volumes.value[volumes.value.length - 1] = v;

      if (typeof callback == "function") callback(c, v);
    });
  }

  return {
    candles,
    volumes,
    earliestLoadedTime,
    loadingKline,

    subscribeKline,
    loadInitial,
    loadMoreHistory,
  };
}
