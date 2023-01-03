import { ICocktail } from './cocktail';

export interface IFavoriteResponse {
  id: string;
  owner: string;
  cocktails: ICocktail[];
}
