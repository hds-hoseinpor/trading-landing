export const API_CONFIG = {
  BASE_URL: "https://api.binance.com/api/v3",
  TESTNET_URL: "https://testnet.binancefuture.com",
  WS_URL: "wss://fstream.binance.com",
  WS_TESTNET_URL: "wss://fstream.binancefuture.com",
};

export const ENDPOINTS = {
  // Market Data
  EXCHANGE_INFO: "/fapi/v1/exchangeInfo",
  ORDER_BOOK: "/fapi/v1/depth",
  RECENT_TRADES: "/fapi/v1/trades",
  KLINE_DATA: "/fapi/v1/klines",
  TICKER_24HR: "/fapi/v1/ticker/24hr",
  TICKER_PRICE: "/fapi/v1/ticker/price",

  // Account
  ACCOUNT_INFO: "/fapi/v2/account",
  POSITION_INFO: "/fapi/v2/positionRisk",
  BALANCE: "/fapi/v2/balance",

  // Trading
  NEW_ORDER: "/fapi/v1/order",
  CANCEL_ORDER: "/fapi/v1/order",
  OPEN_ORDERS: "/fapi/v1/openOrders",
  ALL_ORDERS: "/fapi/v1/allOrders",

  // WebSocket
  WS_STREAM: "/ws",
  WS_COMBINED: "/stream",
};

export const MAX_TRADES_DISPLAY = 50;
