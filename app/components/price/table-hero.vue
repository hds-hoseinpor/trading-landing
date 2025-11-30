<template>
  <div class="card w-full md:border lg:max-w-[445px]">
    <base-tabs v-model="selectedTab" :tabs="tabs">
      <div class="flex-1" />
      <button class="text-12 text-[#90999E]"> View More > </button>
    </base-tabs>
    <div class="mt-4 space-y-3 md:space-y-4">
      <div
        v-for="(crypto, idx) in filteredPrices"
        :key="idx"
        class="grid grid-cols-3 items-center py-2 hover:bg-gray-50"
      >
        <crypto-item
          :image="crypto.image"
          :symbol="crypto.symbol"
          :name="crypto.name"
          :isHot="crypto.trade_coin"
        />
        <div class="text-right text-14 font-medium md:text-base">
          ${{ formatPrice(crypto.current_price) }}
        </div>
        <div
          class="text-right font-medium"
          :class="
            crypto.price_change_percentage_24h >= 0
              ? 'text-xs text-green-500 md:text-14'
              : 'text-xs text-red-500 md:text-14'
          "
        >
          {{ formatPrice(crypto.price_change_percentage_24h) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const selectedTab = ref("spot");
  const tabs = [
    { title: "Futures", value: "futures" },
    { title: "Options", value: "options" },
  ];

  const priceStore = usePriceStore();

  const filteredPrices = computed(() => {
    return priceStore.prices.slice(0, 5);
  });
</script>
