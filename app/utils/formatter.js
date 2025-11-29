export const formatPrice = (value) => {
  if (!value) return value;
  return new Intl.NumberFormat().format(+value.toPrecision(2));
};

export const formatNumber = (value) => {
  if (!value) return value;
  return new Intl.NumberFormat("en", { notation: "compact" }).format(
    parseInt(value),
  );
};
