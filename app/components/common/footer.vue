<template>
  <footer>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div
        class="mb-8 grid grid-cols-2 gap-6 md:mb-12 md:grid-cols-3 md:gap-8 lg:grid-cols-5"
      >
        <div v-for="(section, idx) in footerSections" :key="idx">
          <h4 class="mb-1 text-sm font-bold md:mb-4 md:text-base">
            {{ section.title }}
          </h4>
          <ul class="space-y-2 text-12 text-gray-600 md:text-sm">
            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <a href="#" class="hover:text-gray-900">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-b border-gray-200 pb-3 pt-6 md:pt-8">
        <div
          class="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <div class="flex flex-col items-center md:flex-row">
            <nuxt-img src="/img/logo.svg" :height="'81px'" :width="'145px'" />
            <div
              class="max-w-2xl text-12 text-gray-600 md:ml-[60px] md:text-sm"
            >
              Trading and investing in digital assets and Ethereum on BTCB - a
              reliable, simple, flexible exchange with over 20 years' track
              record. Easy onboarding, fast, 24/7 expert support, and dedicated
              customer service.
            </div>
          </div>
          <div class="">
            <span class="text-10 text-gray-600 md:text-sm">
              Scan To Download
            </span>

            <nuxt-img
              src="/img/qr.png"
              height="100px"
              width="100px"
              class="ml-auto"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center md:justify-between">
        <div class="flex gap-1">
          <nuxt-img
            v-for="social in socials"
            :src="social.icon"
            class="mt-4 h-6 w-6 object-cover md:object-contain"
          />
        </div>
        <div
          class="mt-3 flex flex-wrap gap-2 text-12 text-gray-400 md:gap-4 md:text-sm"
        >
          <a href="#" class="text-14 font-medium">Cookie Policy</a>
          <a href="#" class="text-14 font-medium">Privacy Policy</a>
          <a href="#" class="text-14 font-medium">User Agreement</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const footerSections = ref([
    {
      title: "About Us",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Products",
      links: ["Exchange", "Spot Trading", "Futures Trading", "Margin Trading"],
    },
    {
      title: "Services",
      links: [
        "Buy Crypto",
        "Staking & wallet",
        "Terminal support",
        "Refer & Earn",
      ],
    },
    {
      title: "Crypto Prices",
      links: [
        "Bitcoin BTC price",
        "Ethereum ETH price",
        "Solana SOL price",
        "Dogecoin DOGE price",
      ],
    },
    {
      title: "Learn",
      links: ["What is Bitcoin?", "What is Crypto?", "Crypto Terms"],
    },
  ]);

  const socials = ref([
    {
      name: "twitter",
      icon: "/icons/twitter.svg",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
    },
    {
      name: "telegram",
      icon: "/icons/telegram.svg",
    },
    {
      name: "youtube",
      icon: "/icons/youtube.svg",
    },
  ]);
</script>
