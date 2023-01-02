export const getKeyByValue = (object: any, value: string) => {
  return Object.keys(object).find(key => object[key] === value);
};
