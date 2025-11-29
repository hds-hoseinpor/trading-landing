import { colors } from "~/constants/colors";

export const getCandle = (kline) => ({
  time: kline.t / 1000,
  open: +kline.o,
  high: +kline.h,
  low: +kline.l,
  close: +kline.c,
});

export const getVolume = (kline) => ({
  time: kline.t / 1000,
  value: +kline.v,
  color:
    parseFloat(kline.c) >= parseFloat(kline.o)
      ? colors["binance-green"]
      : colors["binance-red"],
});

export const getTrade = (data) => ({
  id: data.t,
  price: data.p,
  qty: data.q,
  quoteQty: (parseFloat(data.p) * parseFloat(data.q)).toString(),
  time: data.T,
  isBuyerMaker: data.m,
});

export const getTicker = (data) => ({
  type: data.e,
  time: data.E,
  symbol: data.s,
  priceChange: data.p,
  priceChangePercent: data.P,
  lastPrice: data.c,
  lastQty: data.Q,
  open: data.o,
  high: data.h,
  low: data.l,
  count: data.n,
});

export const prepareCandles = (data) => data.map((kline) => getCandle(kline));

export const prepareVolumes = (data) => data.map((kline) => getVolume(kline));

export const getPriceChangeClass = (change) => {
  return change >= 0 ? "text-green-400" : "text-red-400";
};

export const getPriceChangeSign = (change) => {
  return change >= 0 ? "+" : "";
};

export const formatPrice = (price = 0) => {
  return Intl.NumberFormat().format(price);
};

export const formatAmount = (amount) => {
  if (amount >= 1) {
    return amount.toFixed(4);
  }
  return amount.toFixed(6);
};

export const formatVolume = (volume) => {
  if (volume >= 1000000) {
    return (volume / 1000000).toFixed(2) + "M";
  }
  if (volume >= 1000) {
    return (volume / 1000).toFixed(2) + "K";
  }
  return volume.toFixed(2);
};

export const formatPercent = (percent) => {
  return percent?.toFixed?.(2) + "%";
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const formatBalance = (balance) => {
  return balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
