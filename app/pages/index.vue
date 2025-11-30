<template>
  <div class="min-h-screen bg-white">
    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <div
        class="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <div>
          <h1
            class="mb-4 text-[32px] font-bold text-[#131415] sm:text-4xl md:mb-6 lg:text-[40px]"
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
              class="h-[48px] w-[222px] rounded-lg bg-yellow-400 text-center text-16 font-medium text-[#131415] hover:bg-yellow-500"
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
      <div class="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          class="mb-8 text-center text-24 font-bold text-[#131415] md:mb-12 md:text-32"
        >
          Why BTCB?
        </h2>

        <div class="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          <div v-for="(stat, idx) in stats" :key="idx" class="text-center">
            <div class="mb-2 text-xl font-bold text-[#131415] md:text-3xl">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-600 md:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2
        class="mb-8 hidden text-center text-2xl font-bold md:mb-12 md:block md:text-32"
      >
        Live Cryptocurrency Prices Market Data
      </h2>
      <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        <price-table class="col-span-2" />
        <price-top-3 />
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2
        class="mb-8 hidden text-center text-2xl font-bold md:mb-12 md:block md:text-32"
      >
        Advanced Crypto Trading Tools for Faster, Smarter Transactions
      </h2>
      <base-swiper
        :sizes="sizes"
        :items="blogs"
        :spaceBetween="20"
        :hasPagination="$display?.smAndDown"
      >
        <template #default="{ item }">
          <div class="flex rounded-16 bg-[#F9FAFB] p-4">
            <div class="flex flex-1 flex-col items-start gap-4">
              <div class="flex w-full justify-center">
                <img
                  :src="item.img"
                  width="147px"
                  height="152px"
                  class="mx-auto object-cover"
                />
              </div>

              <h3 class="text-16 font-bold text-gray-800 md:text-20">
                {{ item.title }}
              </h3>

              <p class="text-sm leading-6 text-gray-500">
                {{ item.desc }}
              </p>

              <div class="mt-4 flex w-full items-center justify-between">
                <span class="text-13 text-[#353535]">
                  {{ item.footerLabel }}</span
                >
                <button class="text-14 font-semibold text-[#D7A81C]">
                  {{ item.action }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </base-swiper>
    </section>

    <section class="py-10 md:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="mb-10 flex flex-col items-center justify-center text-center md:mb-14"
        >
          <h2 class="mb-3 text-24 font-bold text-[#131415] md:text-32">
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

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2 class="mb-8 text-center text-24 font-bold md:mb-12 md:text-32">
        Why Millions Trust BTCB?
      </h2>
      <base-swiper
        :sizes="sizesAdvice"
        :items="advice"
        :spaceBetween="20"
        :hasPagination="$display?.smAndDown"
      >
        <template #default="{ item }">
          <div class="flex rounded-16 p-4">
            <div class="flex flex-1 flex-col items-center text-center">
              <img
                :src="item.icon"
                width="40px"
                height="40px"
                class="mx-auto mb-4 object-cover"
              />
              <h3 class="mb-1 text-20 font-semibold text-[#131415] md:text-20">
                {{ item.title }}
              </h3>

              <p class="text-16 leading-6 text-[#798084]">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </template>
      </base-swiper>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2 class="mb-8 text-center text-24 font-bold md:mb-12 md:text-32">
        What do users tell about us?
      </h2>
      <base-swiper
        :sizes="{
          xs: '1',
          sm: '2',
          md: '2',
          lg: '3',
          xl: '3',
        }"
        :items="comments"
        :spaceBetween="20"
        :hasPagination="$display?.smAndDown"
      >
        <template #default="{ item }">
          <div class="flex rounded-16 bg-[#F9FAFB] p-4">
            <div class="flex flex-1 flex-col items-start">
              <div class="mb-2 flex w-full items-center justify-start gap-1">
                <img
                  :src="item.Avatar"
                  width="20px"
                  height="20px"
                  class="rounded-full object-cover"
                />
                <h3 class="text-14 font-medium text-[#131415]">
                  {{ item.name }}
                </h3>
              </div>

              <p class="text-16 leading-6 text-[#798084]">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </template>
      </base-swiper>
    </section>

    <section class="mx-auto bg-gray-50 px-4 py-4 text-center sm:px-6 lg:px-8">
      <h2 class="mb-6 text-24 font-bold md:mb-8 md:text-32">
        Start Earning Today
      </h2>
      <button
        class="rounded-lg bg-yellow-400 px-6 py-2 font-medium text-[#131415] hover:bg-yellow-500 md:px-8 md:py-3 md:text-16"
      >
        Sign Up
      </button>
    </section>

    <section class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mb-4 text-2xl font-bold md:mb-6 md:text-3xl">
        What is Bitcoin?
      </h2>
      <div class="space-y-3 text-24 text-gray-600 md:space-y-4 md:text-32">
        <div>
          <p class="mb-1 text-14 text-[#131415] md:text-16">
            What is Bitcoin (BTC)?
          </p>
          <p class="text-14 text-[#131415] md:text-16">
            Bitcoin is one of the most popular cryptocurrencies in the market.
            First introduced in 2008 by Satoshi Nakamoto, Bitcoin continues to
            be the top cryptocurrency by market capitalization. Bitcoin paved
            the way for many existing altcoins in the market and marked a
            pivotal moment for digital payment solutions. As the world's first
            cryptocurrency, Bitcoin has come a long way in terms of its value.
            However, one does not have to buy an entire bitcoin as bitcoins can
            be divided into small units called satoshis, named after the
            creator. A satoshi is equivalent to 0.00000001 bitcoin.
          </p>
        </div>
      </div>
      <div class="text-center">
        <button class="mx-auto text-14 font-medium text-trading-yellow">
          Show More
        </button>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <h2 class="mb-6 text-2xl font-bold md:mb-8 md:text-3xl">
        Frequently Questions About Bitcoin
      </h2>
      <div class="space-y-3 md:space-y-4">
        <base-collapsible
          v-for="(faq, idx) in faqQuestions"
          :key="idx"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
  import { usePriceStore } from "~/stores/price";

  const priceStore = usePriceStore();
  const blogs = [
    {
      id: 1,
      img: "/img/blog.png",
      title: "Trade Over 400+ Cryptocurrencies Instantly",
      action: "Trade",

      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    },
    {
      id: 2,
      img: "/img/blog.png",
      title: "Futures Trading with Up to 100x Leverage",
      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
      footerLabel: "30x max leverage",
      action: "Trade",
    },
    {
      id: 3,
      img: "/img/blog.png",
      title: "Earn Passive Income with Crypto Staking & Lending",
      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
      action: "Earn money",
    },
  ];

  const comments = ref([
    {
      name: "Tony Marshal",
      Avatar: "/img/user.png",
      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    },
    {
      name: "Tony Marshal",
      Avatar: "/img/user.png",
      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    },
    {
      name: "Tony Marshal",
      Avatar: "/img/user.png",
      desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    },
  ]);
  const sizesAdvice = {
    xs: "1",
    sm: "2",
    md: "3",
    lg: "3",
    xl: "4",
  };

  const advice = [
    {
      id: 1,
      icon: "/img/medal.png",
      title: "6 years with you",
      desc: "Customer Support in 40 languages",
    },
    {
      id: 2,
      icon: "/img/coin.png",
      title: "Secure and Stable",
      desc: "Customer Support in 40 languages",
    },
    {
      id: 3,
      icon: "/img/devicon.png",
      title: "Trade Fast",
      desc: "Customer Support in 40 languages",
    },
    {
      id: 4,
      icon: "/img/suport.png",
      title: "24/7",
      desc: "Customer Support in 40 languages",
    },
  ];

  const stats = ref([
    { value: "2,334,894", label: "registered users" },
    { value: "+700 Coins", label: "Newest coins" },
    { value: "+1,876", label: "24h Trading pairs" },
    { value: "$10.47 Billion", label: "24h Trading volume" },
  ]);
  const sizes = {
    xs: "1",
    sm: "2",
    md: "2",
    lg: "3",
    xl: "3",
  };
  const faqQuestions = ref([
    {
      question: "What is Bitcoin and how does it work?",
      answer:
        "Bitcoin is a decentralized digital currency that operates on a peer-to-peer network. It allows users to send and receive payments without the need for intermediaries like banks. Transactions are verified by network nodes through cryptography and recorded on a public ledger called a blockchain.",
    },
    {
      question: "Is Bitcoin legal and safe to use?",
      answer:
        "The legality of Bitcoin varies by country, with some nations embracing it while others impose restrictions or bans. As for safety, Bitcoin transactions are secure due to cryptographic principles, but users must take precautions such as using reputable wallets and exchanges, enabling two-factor authentication, and safeguarding their private keys to protect against theft and fraud.",
    },
    {
      question: "How to buy Bitcoin and other cryptocurrencies?",
      answer:
        "To buy Bitcoin and other cryptocurrencies, you can use cryptocurrency exchanges like Binance, Coinbase, or Kraken. First, create an account on the exchange, complete the necessary verification processes, and then deposit funds using your preferred payment method. Once your account is funded, you can place an order to buy Bitcoin or other cryptocurrencies at the current market price or set a limit order for a specific price.",
    },
    {
      question: "What are the risks of investing in Bitcoin?",
      answer:
        "Investing in Bitcoin carries several risks, including price volatility, regulatory uncertainty, security vulnerabilities",
    },
    {
      question: "How to store Bitcoin securely?",
      answer:
        "To store Bitcoin securely, consider using hardware wallets like Ledger or Trezor, which keep your private keys offline and away from potential online threats. Alternatively, you can use reputable software wallets with strong security features. Always enable two-factor authentication, back up your wallet, and avoid sharing your private keys with anyone.",
    },
  ]);

  onMounted(() => {
    priceStore.getPrices();
  });
</script>

<style scoped>
  .parallax-bg::before {
    @apply absolute left-1/2 top-1/2 z-[1] h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2 bg-fixed bg-center bg-no-repeat;
    content: "";

    background-image: url("/img/logomark.png");
    background-size: 220px;
  }
</style>
