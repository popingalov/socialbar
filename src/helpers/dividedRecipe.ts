export const dividedRecipe = (
  text: string,
  info: { word: string; position: number; length: number }[],
) => {
  let start = 0;
  const parts = [];

  for (let i = 0; i < info.length; i++) {
    const { length, position } = info[i];
    const textBefore = text.slice(start, position);
    parts.push(textBefore);
    const ingredient = text.slice(position, position + length);
    parts.push(ingredient);
    start = position + length;
    if (i === info.length - 1) {
      const lastPart = text.slice(position + length, text.length);
      parts.push(lastPart);
    }
  }
  return parts;
};
