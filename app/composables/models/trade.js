import { MAX_TRADES_DISPLAY } from "~/constants/app";
import { services } from "~/services";

export const useTrades = () => {
  const binanceSocket = inject("binanceSocket", null);

  const trades = ref([]);

  const loadingTrade = ref(false);

  const subscribeTrades = (symbol) => {
    if (!binanceSocket) return;

    binanceSocket.subscribeTrades(symbol);
    binanceSocket.addEventListener("trade", (data) => {
      trades.value.unshift(getTrade(data));
      if (trades.value.length > MAX_TRADES_DISPLAY) trades.value.pop();
    });
  };

  const getTrades = async (symbol, limit = 100) => {
    const { call } = useRequest(services.trade.get, loadingTrade);
    const response = await call(symbol, limit);

    if (response.failed) return response;

    trades.value = response.data;

    return response;
  };

  return {
    trades,
    loadingTrade,
    subscribeTrades,
    getTrades,
  };
};
