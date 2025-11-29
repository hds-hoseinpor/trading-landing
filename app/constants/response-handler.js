export const generateResponse = (response) => {
  return {
    ...response,
    failed: false,
    data: response?.data ?? response,
    status: response?.status || 200,
  };
};

export const generateError = (error, hasToast = true) => {
  //   if (hasToast && !process.server) showError(error);

  return {
    ...error,
    failed: true,
    data: error?.response?.data,
    error,
    status: error?.response?.status || 400,
  };
};
