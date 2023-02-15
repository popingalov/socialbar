import SecondaryButton from 'components/UI-kit/buttons/secondaryButton/SecondaryButton';
import { recipeIngredientHandlerType } from 'types/handleRecipeIngredient';
import { ingredientRecipeSelectStatus } from 'types/ingredientRecipeSelectStatus';
import { IRecipeIngredient } from 'types/recipeIngredient';
import IngredientRecipe from './ingredientRecipe';

interface IProps {
  ingredients: IRecipeIngredient[];
  handleRecipeIngredient: recipeIngredientHandlerType;
  addIngredient: () => void;
  deleteIngredient: (id: string) => void;
}

const Ingredients: React.FC<IProps> = ({
  ingredients,
  handleRecipeIngredient,
  addIngredient,
  deleteIngredient,
}) => {
  return (
    <>
      {ingredients.map(({ id }) => {
        return (
          <IngredientRecipe
            key={id}
            id={id}
            onChange={handleRecipeIngredient}
            deleteIngredient={deleteIngredient}
          />
        );
      })}
      <SecondaryButton onClick={addIngredient}>Add ingredient</SecondaryButton>
    </>
  );
};

export default Ingredients;
