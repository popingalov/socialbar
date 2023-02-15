export interface IRecipeIngredient {
  [key: string]: string | boolean | null;
  id: string;
  name: string;
  measureType: string;
  measure: string;
  garnish: boolean;
  optional: boolean;
}
