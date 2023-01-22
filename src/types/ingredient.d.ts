import { ICocktail } from './cocktail';

export interface IIngredient {
  id: string;
  title: string;
  description: string;
  picture: string;
  category: string;
  cocktails: ICocktail[] | string[];
  isDefault: boolean;
  iHave: boolean;
  shopping: boolean;
}
