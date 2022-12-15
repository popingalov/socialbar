import { IngredientsList } from 'components/ingredientsList/IngredientsList';
import { MobileMenu } from 'components/mobileMenu/MobileMenu';
import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';

export const Ingredients = () => {
  return (
    <>
      <PagesNavigation type="ingredients" />
      <IngredientsList />

      {/* temp */}
      <MobileMenu />
    </>
  );
};
