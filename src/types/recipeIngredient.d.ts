export interface IRecipeIngredient {
  [key: string]: string | boolean | null;
  id: string;
  ingredientId: string;
  measureType: string;
  measure: string;
  garnish: boolean;
  optional: boolean;
}
