import axios from "axios";

let pendingRequests = [];

const addPendingRequest = (config) => {
  const source = axios.CancelToken.source();
  config.cancelToken = source.token;
  pendingRequests.push({ config, cancel: source.cancel });
  return config;
};

const removePendingRequest = (config) => {
  pendingRequests = pendingRequests.filter((req) => req.config !== config);
};

export const cancelPendingRequests = () => {
  pendingRequests.forEach((req) => req.cancel("Request canceled"));
  pendingRequests = [];
};

export const Axios = axios.create({
  timeout: 60000,
});

const onRequest = (config) => {
  //   const tokenObj = cookies?.get?.(Constants.STORE_KEY + "-token");

  //   const token = tokenObj?.access_token || null;

  //   if (token && !config?.headers?.Authorization) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   } else if (config?.headers?.Authorization && !token) {
  //     config.headers.Authorization = "";
  //   }

  return addPendingRequest(config);
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  removePendingRequest(response.config);
  return response;
};

const onResponseError = (error) => {
  removePendingRequest(error.config);

  return Promise.reject(error);
};

Axios.interceptors.request.use(onRequest, onRequestError);
Axios.interceptors.response.use(onResponse, onResponseError);
