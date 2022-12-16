interface ICocktail {
  favorite: boolean;
  isMine: boolean;
  _id: string;
  name: string;
  description: string;
  image: string;
  available: boolean;
  cocType: string[];
  size: Size;
  cocMetod: string;
  ingredients: Ingredient[];
  glass: string;
}

interface Size {
  rom: string;
  cola: string;
}
