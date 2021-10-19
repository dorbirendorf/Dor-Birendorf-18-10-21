export const formatDate = (date) => {
  const data = date.split('-');
  const res = `${data[2].split('T')[0]}.${data[1]}`;
  return res;
};
export const convertToFarenheit = (degrees) => {
  return ((degrees * 9) / 5 + 30).toFixed(1);
};
export const formatMinMax = (min, max, isCelcius) => {
  return isCelcius
    ? `${min}°C - ${max}°C`
    : `${convertToFarenheit(min)}°F - ${convertToFarenheit(max)}°F`;
};

export const formatTemp = (tempInCelcios, isCelcius) => {
  return isCelcius
    ? `${tempInCelcios} °C`
    : `${convertToFarenheit(tempInCelcios)} °F`;
};
