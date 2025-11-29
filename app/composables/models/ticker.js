import { services } from "~/services";

export const useTicker = () => {
  const binanceSocket = inject("binanceSocket", null);

  const ticker = ref({});

  const realTimePrice = ref("0");
  const realTimeChange = ref("0");
  const realTimeChangePercent = ref("0");

  const loadingTicker = ref(false);

  const currentPrice = computed(
    () =>
      parseFloat(realTimePrice.value) ||
      parseFloat(ticker.value?.lastPrice || "0"),
  );

  const priceChange = computed(
    () =>
      parseFloat(realTimePrice.value) -
      parseFloat(ticker.value?.lastPrice || "0"),
  );

  const priceChangePercent = computed(
    () =>
      parseFloat(realTimeChangePercent.value) ||
      parseFloat(ticker.value?.priceChangePercent || "0"),
  );

  const priceChangeClass = computed(() =>
    getPriceChangeClass(priceChange.value),
  );

  const subscribeTicker = (symbol) => {
    if (!binanceSocket) return;

    binanceSocket.subscribeTicker(symbol);
    binanceSocket.addEventListener("ticker", (data) => {
      if (data.s != symbol) return;

      ticker.value = {
        ...ticker.value,
        ...getTicker(data),
        lastPrice: realTimePrice.value,
      };

      realTimePrice.value = data.c;
      realTimeChange.value = data.p;
      realTimeChangePercent.value = data.P;
    });
  };

  const getTypeTicker = async (symbol, type = "24hr") => {
    const { call } = useRequest(services.ticker.getType, loadingTicker);
    const response = await call(symbol, type);

    if (response.failed) return response;

    console.log("ticker", response.data);
    // order.value = processOrderBookData(response.data);
    ticker.value = response.data;

    return response;
  };

  return {
    realTimePrice,
    realTimeChange,
    realTimeChangePercent,
    loadingTicker,
    currentPrice,
    priceChange,
    priceChangePercent,
    priceChangeClass,
    ticker,

    subscribeTicker,
    getTypeTicker,
  };
};
