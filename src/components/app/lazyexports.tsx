import React from 'react';

export const Layout: React.FC = React.lazy(() => import('layout'));

export const Cocktails: React.FC = React.lazy(() => import('pages/cocktails'));
export const CocktailsDetails: React.FC = React.lazy(
  () => import('pages/cocktailsDetails'),
);
export const Home: React.FC = React.lazy(() => import('pages/home'));
export const IngredientDetails: React.FC = React.lazy(
  () => import('pages/ingredientDetails'),
);
export const Ingredients: React.FC = React.lazy(
  () => import('pages/ingredients'),
);
export const Settings: React.FC = React.lazy(() => import('pages/settings'));
