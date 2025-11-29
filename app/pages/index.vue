<template>
  <div class="min-h-screen bg-white">
    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <div
        class="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <div>
          <h1
            class="mb-4 text-[32px] font-bold text-gray-900 sm:text-4xl md:mb-6 lg:text-[40px]"
          >
            Buy, Trade & Earn Bitcoin and 100+ Cryptocurrencies
          </h1>
          <p class="mb-6 text-gray-600 md:mb-8 md:text-20 lg:min-w-max">
            Securely platform to trade Bitcoin, Ethereum and altcoins with low
            fees
          </p>
          <div
            class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              class="rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 md:w-[321px]"
            />
            <button
              class="h-[48px] w-[222px] rounded-lg bg-yellow-400 text-center text-16 font-medium text-gray-900 hover:bg-yellow-500"
            >
              Join & Earn $25 Bonus
            </button>
            <button
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-[#F4F4F4] bg-[#F4F4F4] p-3 sm:mx-0"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                class="h-7 w-7 object-cover md:object-contain"
              />
            </button>
          </div>
        </div>
        <div class="flex lg:justify-end">
          <price-table-hero />
        </div>
      </div>
    </section>
    <section class="parallax-bg relative py-8 md:py-12">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          class="md:text-32 mb-8 text-center text-24 font-bold text-[#131415] md:mb-12"
        >
          Why BTCB?
        </h2>

        <div class="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          <div v-for="(stat, idx) in stats" :key="idx" class="text-center">
            <div class="mb-2 text-xl font-bold text-gray-900 md:text-3xl">
              {{ stat.value }}
            </div>
            <div class="text-sm text-[#575C5E] md:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2
        class="md:text-32 mb-8 hidden text-center text-2xl font-bold md:mb-12 md:block"
      >
        Live Cryptocurrency Prices Market Data
      </h2>
      <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        <price-table class="col-span-2" />

        <price-top-3 />
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div
          class="mb-10 flex flex-col items-center justify-center text-center md:mb-14"
        >
          <h2 class="md:text-32 mb-3 text-24 font-bold text-[#131415]">
             Download Our Secure Crypto Trading App
          </h2>
          <p class="hidden text-16 text-[#575C5E] md:flex">
            Download BTCB Application then Trade Anywhere
          </p>
          <p class="flex text-16 text-[#575C5E] md:hidden">
            Trade Bitcoin & Altcoin
          </p>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-evenly"
        >
          <div class="flex items-center gap-6">
            <div>
              <img
                src="/img/mobile-app.png"
                alt="App Screenshot"
                width="188px"
                height="370px"
                class="rounded-lg"
              />
            </div>

            <div>
              <img
                src="/img/mobile-app.png"
                alt="App Screenshot"
                width="188px"
                height="370px"
                class="rounded-lg"
              />
            </div>
          </div>
          <div class="text-center">
            <div class="mb-8">
              <p class="mb-2 text-16 text-[##1A1D1E] md:w-[188px] md:text-16">
                Scan to Download App
                <span
                  class="mb-4 text-sm text-[##1A1D1E] md:text-16 md:font-bold"
                >
                  iOS and Android
                </span>
              </p>

              <div class="shadow-card rounded-x mx-auto inline-block p-4">
                <img
                  src="/img/Frame.png"
                  alt="QR Code"
                  class="h-24 w-24 md:h-[158px] md:w-[159px]"
                />
              </div>
            </div>

            <!-- Buttons -->
            <div
              class="flex flex-row space-x-3 md:flex-col md:space-x-0 md:space-y-3"
            >
              <button
                class="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-lg bg-[#F3F3F4] md:w-[212px]"
              >
                <img
                  src="/img/app.png"
                  alt="app"
                  class="h-[16px] w-[13px] object-contain md:h-[24px] md:w-[24px]"
                />
                <span class="text-sm font-semibold text-[#131415] md:text-16">
                  App Store
                </span>
              </button>

              <button
                class="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-lg bg-[#F3F3F4] px-5 py-3 md:w-[212px]"
              >
                <img
                  src="/img/google-play.png"
                  alt="app"
                  class="h-[16px] w-[13px] object-contain md:h-[24px] md:w-[24px]"
                />
                <span class="text-sm font-semibold text-[#131415] md:text-16">
                  Google Play
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { usePriceStore } from "~/stores/price";

  const priceStore = usePriceStore();

  const stats = ref([
    { value: "2,334,894", label: "registered users" },
    { value: "+700 Coins", label: "Newest coins" },
    { value: "+1,876", label: "24h Trading pairs" },
    { value: "$10.47 Billion", label: "24h Trading volume" },
  ]);
  onMounted(() => {
    priceStore.getPrices();
  });
</script>

<style scoped>
  .parallax-bg {
    background: url("/img/logomark.png");
    background-size: 220px;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
</style>
