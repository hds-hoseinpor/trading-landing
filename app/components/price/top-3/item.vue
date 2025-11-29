<template>
  <div class="mt-4 space-y-3 md:space-y-4">
    <div
      v-for="(crypto, idx) in prices"
      :key="idx"
      class="grid grid-cols-2 items-center pb-1 hover:bg-gray-50"
    >
      <crypto-item
        :image="crypto.image"
        :symbol="crypto.symbol"
        :name="crypto.name"
        :isHot="crypto.trade_coin"
        verticalTitle
      />
      <div class="text-right text-14 font-medium md:text-base">
        ${{ formatPrice(crypto.current_price) }}
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
  defineProps({
    prices: {
      type: Array,
      required: true,
    },
  });
</script>
