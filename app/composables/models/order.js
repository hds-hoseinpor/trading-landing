import { services } from "~/services";
import { useRequest } from "~/composables/request";

export const useOrder = () => {
  const order = ref({});

  const loadingOrder = ref(false);

  const binanceSocket = inject("binanceSocket", null);

  const calculateOrderBookPercentage = (volume, maxVolume) => {
    return Math.min((volume / maxVolume) * 100, 100);
  };

  const calculateOrderBookTotal = (orders, currentIndex) => {
    return orders
      .slice(0, currentIndex + 1)
      .reduce((sum, [, qty]) => sum + parseFloat(qty), 0);
  };

  const processOrderBookData = (orderBook) => {
    if (!orderBook?.asks || !orderBook?.bids) {
      return {
        sellOrders: [],
        buyOrders: [],
        spread: 0,
      };
    }

    const asks = orderBook.asks.slice(0, 6).reverse();
    const bids = orderBook.bids.slice(0, 6);

    const maxAskVolume = Math.max(...asks.map(([, qty]) => parseFloat(qty)));
    const maxBidVolume = Math.max(...bids.map(([, qty]) => parseFloat(qty)));

    const sellOrders = asks.map(([price, qty], index) => {
      const total = calculateOrderBookTotal(asks.slice(0, index + 1), index);
      const percentage = calculateOrderBookPercentage(
        parseFloat(qty),
        maxAskVolume,
      );

      return {
        price: parseFloat(price),
        amount: parseFloat(qty),
        total: total * parseFloat(price),
        percentage,
      };
    });

    const buyOrders = bids.map(([price, qty], index) => {
      const total = calculateOrderBookTotal(bids.slice(0, index + 1), index);
      const percentage = calculateOrderBookPercentage(
        parseFloat(qty),
        maxBidVolume,
      );

      return {
        price: parseFloat(price),
        amount: parseFloat(qty),
        total: total * parseFloat(price),
        percentage,
      };
    });

    const bestAsk = parseFloat(orderBook.asks[0][0]);
    const bestBid = parseFloat(orderBook.bids[0][0]);
    const spread = ((bestAsk - bestBid) / bestBid) * 100;

    return {
      sellOrders,
      buyOrders,
      spread,
    };
  };

  const getOrders = async (symbol, limit = 100) => {
    const { call } = useRequest(services.order.get, loadingOrder);
    const response = await call(symbol, limit);

    if (response.failed) return response;

    console.log("order", response.data);
    order.value = processOrderBookData(response.data);

    return response;
  };

  const subscribeOrders = (symbol) => {
    if (!binanceSocket) return;

    binanceSocket.subscribeOrderBook(symbol);
    binanceSocket.addEventListener("orderbook", (data) => {
      order.value = processOrderBookData({
        asks: data.a.slice(0, 6),
        bids: data.b.slice(0, 6),
      });
    });
  };

  return {
    order,
    loadingOrder,

    processOrderBookData,
    getOrders,

    subscribeOrders,
  };
};
