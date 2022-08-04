export const numberWithCommas = (number: string | number) =>
  typeof number === 'number'
    ? number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    : number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
