import { IGlass } from 'types/manual';
import { IIngredientIn } from 'types/cocktail';
import { ICocktail } from './cocktail';
import { IIngredient } from './ingredient';

export interface IFavoriteResponse {
  id: string;
  owner: string;
  cocktails: ICocktail[];
}

export interface IShoppingResponse {
  id: string;
  owner: string;
  ingredients: IIngredient[];
}

export interface IBarResponse {
  id: string;
  list: IIngredient[];
}

export interface ICocktailResponse {
  id: string;
  title: string;
  description: string;
  category: string[];
  glass: IGlass;
  picture: string;
  recipe: string;
  ingredients: IIngredientIn[];
  favorite: boolean;
  iCan: boolean;
  isDefault: false;
  owner: string;
  ratings: string[];
}
