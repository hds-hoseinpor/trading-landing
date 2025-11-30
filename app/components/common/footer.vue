<template>
  <footer>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div
        v-if="$display.mdAndUp"
        class="mb-4 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-6"
      >
        <div v-for="(section, idx) in footerSections" :key="idx">
          <h4 class="mb-1 text-sm font-bold md:mb-4 md:text-base">
            {{ section.title }}
          </h4>
          <ul class="space-y-2 text-14 text-black md:font-medium">
            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <a href="#" class="hover:text-gray-900">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <base-collapsible
          v-for="(section, idx) in footerSections"
          :key="idx"
          :title="section.title"
          class="!bg-transparent"
          openIcon="mdi:chevron-down"
          closeIcon="mdi:chevron-up"
          openIconClass="text-gray-600"
          closeIconClass="text-gray-600"
        >
          <ul class="space-y-2 text-14 text-black md:font-medium">
            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <a href="#" class="hover:text-gray-900">{{ link }}</a>
            </li>
          </ul>
        </base-collapsible>
      </div>

      <div class="border-b border-gray-200 pb-3">
        <div
          class="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <div class="flex flex-col items-center md:flex-row">
            <nuxt-img src="/img/logo.svg" :height="'81px'" :width="'145px'" />
            <div class="max-w-2xl text-12 text-black md:ml-[60px] md:text-sm">
              Buy and trade top cryptocurrencies like Bitcoin and Ethereum on
              OKEX – a globally trusted crypto exchange with over 2M users.
              Enjoy low trading fees, 24/7 expert support, and exclusive trading
              bonuses for new and active users.
            </div>
          </div>
          <div class="flex">
            <div class="mb-4 mt-auto">
              <div class="flex items-center">
                <span class="ml-1 mr-2 text-14 font-medium">Theme</span>
                <nuxt-img src="/img/theme.svg" height="20" />
              </div>
              <div class="mt-4 flex items-center justify-end">
                <nuxt-img src="/img/language.png" height="20" width="20" />
                <span class="ml-1 text-14 font-medium">English</span>
              </div>
            </div>

            <div class="ml-2">
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
      links: ["About", "Blog", "Terms", "Privacy", "Downloads"],
    },
    {
      title: "Products",
      links: [
        "Buy Crypto",
        "Spot Trading",
        "Futures Trading",
        "Crypto Lending",
        "Referral",
        "Converter",
        "OTC Trading",
        "GemSPACE",
      ],
    },
    {
      title: "Services",
      links: [
        "Help center",
        "Submit a ticket",
        "Technical support",
        "Fees & VIP",
        "Official Verification Center",
        "Solana (SOL) price",
      ],
    },
    {
      title: "Crypto Prices",
      links: [
        "Bitcoin (BTC) price",
        "Ethereum (ETH) price",
        "Cardano (ADA) price",
        "Ripple (XRP) price",
        "Dogecoin (DOGE) price",
        "Solana (SOL) price",
      ],
    },
    {
      title: "Buy Crypto",
      links: [
        "Buy Bitcoin",
        "Buy Ethereum",
        "Buy Cardano",
        "Buy XRP",
        "Buy Dogecoin",
        "Buy Solana",
      ],
    },
    {
      title: "Learn",
      links: ["What is the crypto exchange?", "How to buy crypto?"],
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
