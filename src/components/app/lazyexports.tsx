import React from 'react';

export const Cocktails: React.FC = React.lazy(() =>
  import('pages/cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
export const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/cocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
export const Home: React.FC = React.lazy(() =>
  import('pages/home/Home').then(module => ({
    default: module.Home,
  })),
);
export const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/ingredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
export const Ingredients: React.FC = React.lazy(() =>
  import('pages/ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);
export const MainLayout: React.FC = React.lazy(() =>
  import('components/mainLayout/MainLayout').then(module => ({
    default: module.MainLayout,
  })),
);
export const Settings: React.FC = React.lazy(() =>
  import('pages/settings/Settings').then(module => ({
    default: module.Settings,
  })),
);
export const ShortLayout: React.FC = React.lazy(() =>
  import('components/shortLayout/ShortLayout').then(module => ({
    default: module.ShortLayout,
  })),
);
