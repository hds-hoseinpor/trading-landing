<template>
  <div class="grid w-full grid-cols-1 gap-1 p-1 md:grid-cols-3 lg:grid-cols-5">
    <div class="col-span-1 md:col-span-2 lg:col-span-4">
      <div class="grid grid-cols-1 gap-1 lg:grid-cols-4">
        <div class="col-span-1 flex flex-1 flex-col lg:col-span-3">
          <market-ticker-bar :symbol="currentSymbol" />
          <TradingChart :symbol="currentSymbol" />
        </div>

        <div class="grid h-full grid-cols-2 gap-1 pt-0 lg:grid-cols-1">
          <div class="max-h-[440px] w-full">
            <OrderBook :symbol="currentSymbol" class="h-full w-full" />
          </div>

          <RecentTrades :symbol="currentSymbol" />
        </div>
      </div>
    </div>
    <div v-if="display?.mdAndUp" class="col-span-1 hidden md:flex">
      <OrderForm />
    </div>
    <div class="col-span-1 mt-1 w-full md:col-span-4">
      <BottomTabsPanel />
    </div>
  </div>
</template>

<script setup>
  import { useDisplay } from "~/composables/display";

  const route = useRoute();

  const display = useDisplay();
  const currentSymbol = ref(route.params.symbol ?? "BTCUSDT");

  const binanceSocket = useBinanceSocket();
  provide("binanceSocket", binanceSocket);

  useHead(() => ({
    title: `${route.params.symbol} Futures Trading - Binance`,
    meta: [
      {
        name: "description",
        content: `Trade ${route.params.symbol} futures on Binance with advanced trading tools and real-time market data.`,
      },
    ],
  }));

  const handleSymbolChange = (symbol) => {
    currentSymbol.value = symbol;
  };

  watch(() => route.params.symbol, handleSymbolChange);

  onMounted(() => {
    binanceSocket.connect();
  });

  onBeforeUnmount(() => {
    binanceSocket.disconnect();
  });
</script>
