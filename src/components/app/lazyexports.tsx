import React from 'react';

export const MainLayout: React.FC = React.lazy(
  () => import('layouts/MainLayout'),
);
export const ShortLayout: React.FC = React.lazy(
  () => import('layouts/ShortLayout'),
);

export const Cocktails: React.FC = React.lazy(() =>
  import('pages/Cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
export const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/CocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
export const Home: React.FC = React.lazy(() =>
  import('pages/Home/Home').then(module => ({
    default: module.Home,
  })),
);
export const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/IngredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
export const Ingredients: React.FC = React.lazy(() =>
  import('pages/Ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);

export const Settings: React.FC = React.lazy(() =>
  import('pages/Settings/Settings').then(module => ({
    default: module.Settings,
  })),
);
