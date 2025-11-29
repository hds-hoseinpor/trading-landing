export const calculateMovingAverage = (data, length, key = "close") => {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    if (i < length) {
      result.push({ time: data[i].time, value: NaN });
      continue;
    }
    const slice = data.slice(i - length, i);
    const sum = slice.reduce((s, d) => s + d[key], 0);
    result.push({ time: data[i].time, value: sum / length });
  }

  return result;
};
