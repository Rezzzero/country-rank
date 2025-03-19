export const formatingCol = (string: string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const formatNumber = (number: number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
