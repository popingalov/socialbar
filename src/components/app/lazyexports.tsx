import React from 'react';

export const Cocktails: React.FC = React.lazy(() => import('pages/cocktails'));
export const CocktailsDetails: React.FC = React.lazy(
  () => import('pages/cocktailsDetails'),
);
export const NewCocktail: React.FC = React.lazy(
  () => import('pages/newCocktail'),
);
export const NewIngredient: React.FC = React.lazy(
  () => import('pages/newIngredient'),
);
export const Home: React.FC = React.lazy(() => import('pages/home'));
export const IngredientDetails: React.FC = React.lazy(
  () => import('pages/ingredientDetails'),
);
export const Ingredients: React.FC = React.lazy(
  () => import('pages/ingredients'),
);
export const Layout: React.FC = React.lazy(() => import('layout'));
export const Settings: React.FC = React.lazy(() => import('pages/settings'));
