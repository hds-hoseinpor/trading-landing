// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  imports: {
    dirs: ["./apps/services/api/*"],
  },

  fonts: {
    families: [
      ...Object.entries({
        400: "Regular",
        500: "Medium",
      }).reduce(
        (arr, [weight, name]) => [
          ...arr,
          {
            name: "BinanceNova",
            src: `/fonts/BinanceNova-${name}.woff2`,
            weight,
            style: "normal",
            global: true,
          },
        ],
        [],
      ),
    ],
    provider: "none",
    display: "swap",
    preload: true,
  },
});
