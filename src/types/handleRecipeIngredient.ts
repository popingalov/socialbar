import { IRecipeIngredient } from './recipeIngredient';

export type recipeIngredientHandlerType = ({
  name,
  value,
  checked,
  id,
}: IRecipeIngredient) => void;
