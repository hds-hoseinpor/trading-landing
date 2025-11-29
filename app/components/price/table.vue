<template>
  <div class="card md:bg-gray-50">
    <base-tabs v-model="selectedTab" :tabs="tabs">
      <div class="flex-1" />
      <button class="text-12 text-gray-500"> View More > </button>
    </base-tabs>
    <div class="mt-4 space-y-3 md:space-y-4">
      <div
        v-for="(crypto, idx) in filteredPrices"
        :key="idx"
        class="grid grid-cols-3 items-center py-2 hover:bg-gray-50 lg:grid-cols-5"
      >
        <crypto-item
          minimalTitle
          :image="crypto.image"
          :symbol="crypto.symbol"
          :name="crypto.name"
          :isHot="crypto.trade_coin"
        />
        <div class="text-right text-14 font-medium md:text-base">
          ${{ formatPrice(crypto.current_price) }}

          <div
            class="block text-right font-medium lg:hidden"
            :class="
              crypto.price_change_percentage_24h >= 0
                ? 'text-xs text-green-500 md:text-14'
                : 'text-xs text-red-500 md:text-14'
            "
          >
            {{ formatPrice(crypto.price_change_percentage_24h) }}%
          </div>
        </div>
        <div
          class="hidden text-right text-14 font-medium md:text-base lg:block"
        >
          {{ formatNumber(crypto.total_volume) }}
        </div>
        <div
          class="hidden text-right font-medium lg:block"
          :class="
            crypto.price_change_percentage_24h >= 0
              ? 'text-xs text-green-500 md:text-14'
              : 'text-xs text-red-500 md:text-14'
          "
        >
          {{ formatPrice(crypto.price_change_percentage_24h) }}%
        </div>
        <div class="text-trading-yellow text-right text-14 font-medium">
          Trade
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const selectedTab = ref("top");
  const tabs = [
    { title: "Top volume", value: "top" },
    { title: "Hot Tokes", value: "hot" },
  ];

  const priceStore = usePriceStore();

  const filteredPrices = computed(() => {
    return priceStore.prices.slice(0, 8);
  });
</script>
