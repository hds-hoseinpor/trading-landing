<template>
  <div class="flex items-center space-x-2">
    <nuxt-img
      :src="image"
      alt="icon"
      :width="verticalTitle ? 32 : 24"
      :height="verticalTitle ? 32 : 24"
      class="rounded-full"
    />

    <span :class="{ 'flex flex-col': verticalTitle }">
      <span class="text-14 font-medium md:text-base">
        {{ symbol.toUpperCase() }} <span v-if="minimalTitle"> / USDT</span>
      </span>

      <span v-if="!minimalTitle" class="text-14 text-gray-400">
        {{ name }}
      </span>
    </span>
    <nuxt-img v-if="isHot" src="/icons/mdi_hot.svg" width="16" height="16" />
  </div>
</template>

<script setup>
  defineProps({
    image: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isHot: {
      type: Boolean,
      default: false,
    },
    verticalTitle: {
      type: Boolean,
      default: false,
    },
    minimalTitle: {
      type: Boolean,
      default: false,
    },
  });
</script>
