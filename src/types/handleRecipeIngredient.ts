export interface IRecipeIngredientResponse {
  name: string;
  value: string | null;
  checked: boolean | null;
  id: string;
}

export type recipeIngredientHandlerType = ({
  name,
  value,
  checked,
  id,
}: IRecipeIngredientResponse) => void;
