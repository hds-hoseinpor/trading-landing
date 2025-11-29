<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <div class="text-center">
      <div
        class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <span class="text-black font-bold text-2xl">B</span>
      </div>
      <h1 class="text-3xl font-bold text-white mb-4">
        Binance Futures Trading
      </h1>
      <p class="text-gray-400 mb-8">
        Advanced cryptocurrency futures trading platform
      </p>
      <NuxtLink to="/futures/BTCUSDT" class="btn-primary text-lg px-8 py-3">
        Start Trading BTCUSDT
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
await navigateTo("/futures/BTCUSDT");
</script>
