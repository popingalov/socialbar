import { IIngredient } from './ingredient';

export interface IRecipeIngredient {
  [key: string]: string | boolean | null;
  id: string;
  ingredient: IIngredient | null;
  measureType: string;
  measure: string;
  garnish: boolean;
  optional: boolean;
}
