<template>
  <div class="hidden lg:block">
    <div
      v-for="tab in tabs"
      :key="tab.value"
      class="card first:mb-[20px] lg:bg-gray-50"
    >
      <div class="font-20 mb-4 border-b border-gray-200 pb-2 font-medium">
        {{ tab.title }}
      </div>
      <price-top-3-item :prices="tab.prices" />
    </div>
  </div>
  <span class="block lg:hidden">
    <base-tabs v-model="selectedTab" :tabs="tabs" />

    <price-top-3-item
      :prices="tabs.find((t) => t.value === selectedTab).prices"
    />
  </span>
</template>

<script setup>
  const priceStore = usePriceStore();

  const calculateChangePrice = (crypto) => {
    return crypto.price_change_percentage_24h;
  };

  const selectedTab = ref("losers");
  const tabs = computed(() => [
    {
      title: "Top 3 Losers",
      value: "losers",
      prices: priceStore.prices
        .toSorted((a, b) => calculateChangePrice(a) - calculateChangePrice(b))
        .slice(0, 3),
    },
    {
      title: "Top 3 Gainers",
      value: "gainers",
      prices: priceStore.prices
        .toSorted((a, b) => calculateChangePrice(b) - calculateChangePrice(a))
        .slice(0, 3),
    },
  ]);
</script>
