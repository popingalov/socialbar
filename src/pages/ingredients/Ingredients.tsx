import { IngredientsList } from 'components/ingredientsList/IngredientsList';
import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';

export const Ingredients = () => {
  return (
    <>
      <PagesNavigation type="ingredients" />
      <IngredientsList />
    </>
  );
};
