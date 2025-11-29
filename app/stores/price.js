import { defineStore } from "pinia";
import { usePrices } from "~/composables/models/price";

export const usePriceStore = defineStore("price", () => {
  const { loadingPrice, getPrices, prices } = usePrices();

  return {
    loadingPrice,
    getPrices,
    prices,
  };
});
