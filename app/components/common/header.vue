<template>
  <header class="h-[64px]">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center space-x-4 lg:space-x-8">
          <nuxt-img
            src="/img/logo.svg"
            :height="$display?.lgAndUp ? '48px' : '38px'"
            :width="$display?.lgAndUp ? '90px' : '68px'"
          />

          <nav class="relative hidden space-x-2 lg:flex lg:space-x-6">
            <div v-for="(item, i) in menuItems" :key="i" class="group relative">
              <button
                class="flex items-center text-12 font-semibold text-black hover:text-gray-900 lg:text-14"
              >
                {{ item.label }}
                <icon
                  v-if="item.icon"
                  :name="item.icon"
                  size="14px"
                  class="ml-1"
                />
              </button>

              <div
                v-if="item.children"
                class="absolute left-0 top-[120%] hidden min-w-56 max-w-[255px] rounded-lg bg-white p-2 shadow-[0px_2px_6px_2px_#00000026,0px_1px_2px_0px_#0000004D] shadow-lg group-hover:block"
              >
                <div
                  v-for="(sub, j) in item.children"
                  :key="j"
                  class="flex w-full cursor-pointer items-center justify-between rounded-lg p-3 transition hover:bg-gray-100"
                >
                  <div class="flex items-center space-x-3">
                    <img :src="sub.icon" class="h-5 w-5" />
                    <div>
                      <span class="text-[14px] font-medium">
                        {{ sub.title }}
                      </span>
                      <p
                        v-if="sub?.label"
                        class="text-[12px] font-normal text-[#90999E]"
                      >
                        {{ sub.label }}
                      </p>
                    </div>
                  </div>

                  <icon
                    v-if="sub.arrow"
                    name="mdi:arrow-right"
                    size="14px"
                    class="text-[#D7A81C]"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hidden items-center space-x-4 lg:flex">
          <button
            class="h-[32px] w-[68px] rounded-md bg-[#E8E9E9] text-14 font-semibold text-black hover:bg-gray-300"
          >
            Log In
          </button>
          <button
            class="h-[32px] w-[77px] rounded-md bg-yellow-400 text-14 font-medium text-gray-900 hover:bg-yellow-500"
          >
            Sign up
          </button>

          <button
            v-for="(icon, i) in rightIcons"
            :key="i"
            class="rounded p-2 hover:bg-gray-100"
          >
            <img :src="icon" height="20" width="20" />
          </button>
        </div>
        <div class="flex items-center space-x-3 lg:hidden">
          <button
            class="h-[28px] rounded-md bg-[#E8E9E9] px-3 text-[14px] font-semibold"
          >
            Log In
          </button>
          <button
            class="h-[28px] rounded-md bg-yellow-400 px-3 text-[14px] font-semibold"
          >
            Sign Up
          </button>

          <button @click="isOpen = !isOpen" class="">
            <icon name="mdi:menu" size="24" />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="relative z-10 mt-3 space-y-3 rounded-lg border border-gray-200 !bg-white p-3 md:hidden"
    >
      <div
        v-for="(item, i) in menuItems"
        :key="'m-' + i"
        class="flex items-center justify-between rounded p-3 hover:bg-gray-100"
      >
        <span class="text-[14px] font-medium">{{ item.label }}</span>
        <icon v-if="item.children" name="mdi:chevron-down" size="16" />
      </div>
    </div>
  </header>
</template>

<script setup>
  const isOpen = ref(false);

  const menuItems = [
    {
      label: "Start Crypto Trading",
      icon: "mdi:chevron-down",
      children: [
        {
          title: "Futures",
          label: "Contracts settled in cryptocurrency",
          icon: "/img/web_futures.png",
        },
        {
          title: "Spot",
          label: "Buy and sell by advanced tools",
          icon: "/img/web_trade 2.png",
        },
        {
          title: "Convert",
          label: "The easiest way to trade at all sizes ",
          icon: "/img/web_convert.png",
        },
      ],
    },

    {
      label: "Cryptocurrency Overview",
      icon: "mdi:chevron-down",
      children: [
        {
          title: "Bitcoin price",
          icon: "/img/web_futures.png",
        },
        {
          title: "Altcoin price",
          icon: "/img/web_trade 2.png",
          arrow: true,
        },
        {
          title: "Meme price",
          icon: "/img/web_convert.png",
        },
        {
          title: "Top gainers/losers",
          icon: "/img/web_convert.png",
        },
        {
          title: "New listings",
          icon: "/img/web_convert.png",
        },
      ],
    },

    {
      label: "Buy Crypto",
      icon: "mdi:chevron-down",
      children: [
        {
          title: "Buy bitcoin",
          icon: "/img/web_futures.png",
        },
        {
          title: "Buy etheruem",
          icon: "/img/web_trade 2.png",
        },
        {
          title: "Buy memecoins",
          icon: "/img/web_convert.png",
        },
        {
          title: "buy ai tokens",
          icon: "/img/web_convert.png",
        },
        {
          title: "Sell crypto",
          icon: "/img/web_convert.png",
        },
      ],
    },

    {
      label: "Earn",
    },

    {
      label: "Info",
      icon: "mdi:chevron-down",
      children: [
        {
          title: "About us",
          icon: "/img/web_futures.png",
        },
        {
          title: "fees",
          icon: "/img/web_trade 2.png",
        },
        {
          title: "Security",
          icon: "/img/web_convert.png",
        },
      ],
    },
  ];

  const rightIcons = [
    "/img/download.png",
    "/img/language.png",
    "/img/ligt-mode.png",
  ];
</script>
