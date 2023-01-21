import { IIngredient } from 'types/ingredient';
import { IGlass } from 'types/manual';

export interface ICocktail {
  id: string;
  glass: IGlass;
  owner: string; // | null?????
  title: string;
  description: string;
  picture: string;
  category: string[];
  recipe: string;
  ingredients: IIngredientIn[];
  isDefault: boolean;
  iCan: boolean;
  favorite: boolean;
  lacks: string[];
}

export interface IIngredientIn {
  _id: string;
  id: string;
  data: IIngredient;
  measure: string;
  measureType: string;
  isDressing: boolean;
  isOptional: boolean;
  alternatives: IIngredient[];
}
