import { API_CONFIG } from "~/constants/app";
import { Axios } from "~/constants/axios";

export const get = async (symbol, limit) => {
  try {
    const params = { symbol, limit: limit.toString() };

    const response = await Axios.get(`${API_CONFIG.BASE_URL}/trades`, {
      params,
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch orders: ${error.toString()}`);
  }
};
