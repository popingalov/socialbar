export interface IRecipeIngredientResponse {
  name: string;
  value: string | null;
  checked: boolean | null;
  index: number;
}

export type recipeIngredientHandlerType = ({
  name,
  value,
  checked,
  index,
}: IRecipeIngredientResponse) => void;
