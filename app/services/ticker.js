import { API_CONFIG } from "~/constants/app";
import { Axios } from "~/constants/axios";

export const getType = async (symbol, type) => {
  try {
    const response = await Axios.get(`${API_CONFIG.BASE_URL}/ticker/${type}`, {
      params: {
        symbol,
      },
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch orders: ${error.toString()}`);
  }
};
