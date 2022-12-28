export const searchWord = (text: string, word: string) => {
  let y = 0;
  const info = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === word[0]) {
      for (let j = i; j < i + word.length; j++) {
        if (text[j] === word[j - i]) {
          y++;
        }
        if (y === word.length) {
          info.push({ word, position: i, length: word.length });
        }
      }
      y = 0;
    }
  }
  return info;
};
