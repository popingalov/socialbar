import IngredientsList from 'components/ingredientsList';
import PagesNavigation from 'components/pagesNavigation';

const Ingredients = () => {
  return (
    <>
      <PagesNavigation type="ingredients" />
      <IngredientsList />
    </>
  );
};

export default Ingredients;
