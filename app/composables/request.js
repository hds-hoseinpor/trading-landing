import { generateError, generateResponse } from "~/constants/response-handler";

export const useRequest = (serviceMethod, loadingRef, hasToast = true) => {
  const loading = loadingRef || ref(false);

  const call = async (...args) => {
    try {
      loading.value = true;

      const response = await serviceMethod(...args);

      return generateResponse(response);
    } catch (error) {
      return generateError(error, hasToast);
    } finally {
      loading.value = false;
    }
  };

  return { call, loading };
};
