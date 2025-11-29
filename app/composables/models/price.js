import { services } from "~/services";

export const usePrices = () => {
  const prices = ref([]);

  const loadingPrice = ref(false);

  const getPrices = async (page = 1, params = {}) => {
    const { call } = useRequest(services.price.get, loadingPrice);
    const response = await call(page, params);

    if (response.failed) return response;

    prices.value = response.data?.result || [];

    return response;
  };

  return {
    prices,
    loadingPrice,
    getPrices,
  };
};
