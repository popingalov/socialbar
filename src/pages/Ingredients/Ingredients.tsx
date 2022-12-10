// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { IngredientsList } from 'Components/ingredientsList/IngredientsList';
import { PagesNavigation } from 'Components/pagesNavigation/PagesNavigation';
// import { Loader } from 'Components/loader/Loader';

export const Ingredients = () => {
  return (
    <>
      <PagesNavigation type="ingredients" />
      <IngredientsList />
    </>
  );
};
