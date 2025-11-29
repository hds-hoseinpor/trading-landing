import { API_CONFIG } from "~/constants/app";
import { Axios } from "~/constants/axios";

export const get = async (page, { sort = 'rank_a', size = 100, lang = 'fa' }) => {
  try {
    const params = { page, sort, size, lang };

    const response = await Axios.get(`${API_CONFIG.BASE_URL}/live-price`, {
      params,
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch prices: ${error.toString()}`);
  }
};
