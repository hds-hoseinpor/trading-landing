import { API_CONFIG } from "~/constants/app";
import { Axios } from "~/constants/axios";

export const get = async ({ symbol = "BTCUSDT", interval = "1d", endTime }) => {
  try {
    const params = new URLSearchParams({
      symbol: symbol.toUpperCase(),
      interval,
      limit: "500",
    });

    if (endTime) params.append("endTime", endTime);

    const response = await Axios(`${API_CONFIG.BASE_URL}/klines`, {
      params,
    });

    return {
      ...response,
      data: response.data?.map((k) => ({
        t: k[0], // time
        o: k[1], // open
        h: k[2], // high
        l: k[3], // low
        c: k[4], // close
        v: k[5], // volume
      })),
    };
  } catch (error) {
    throw new Error(`Failed to fetch orders: ${error.toString()}`);
  }
};
