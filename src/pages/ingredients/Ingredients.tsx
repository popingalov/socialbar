// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { IngredientsList } from 'components/ingredientsList/IngredientsList';
import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';
// import { Loader } from 'components/loader/Loader';

export const Ingredients = () => {
  return (
    <>
      <PagesNavigation type="ingredients" />
      <IngredientsList />
    </>
  );
};
