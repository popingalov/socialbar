import SecondaryButton from 'components/UI-kit/form/secondaryButton/SecondaryButton';
import { recipeIngredientHandlerType } from 'types/handleRecipeIngredient';
import { IRecipeIngredient } from 'types/recipeIngredient';
import IngredientRecipe from './ingredientRecipe';

interface IProps {
  ingredients: IRecipeIngredient[];
  handleRecipeIngredient: recipeIngredientHandlerType;
  addIngredient: () => void;
}

const Ingredients: React.FC<IProps> = ({
  ingredients,
  handleRecipeIngredient,
  addIngredient,
}) => {
  return (
    <>
      {ingredients.map((_, index) => {
        return (
          <IngredientRecipe
            key={index}
            index={index}
            onChange={handleRecipeIngredient}
          />
        );
      })}
      <SecondaryButton onClick={addIngredient}>
        Add More ingredient
      </SecondaryButton>
    </>
  );
};

export default Ingredients;
