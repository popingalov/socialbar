import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';

import { GlobalStyle } from './App.styled';
import { Routes } from 'react-router';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';

const Cocktails: React.FC = React.lazy(() =>
  import('pages/cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/cocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
const Home: React.FC = React.lazy(() =>
  import('pages/home/Home').then(module => ({
    default: module.Home,
  })),
);
const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/ingredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
const Ingredients: React.FC = React.lazy(() =>
  import('pages/ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);
const MainLayout: React.FC = React.lazy(() =>
  import('components/mainLayout/MainLayout').then(module => ({
    default: module.MainLayout,
  })),
);
const Settings: React.FC = React.lazy(() =>
  import('pages/settings/Settings').then(module => ({
    default: module.Settings,
  })),
);
const ShortLayout: React.FC = React.lazy(() =>
  import('components/shortLayout/ShortLayout').then(module => ({
    default: module.ShortLayout,
  })),
);

function App() {
  const { data } = useTakeIngredientsQuery(3);
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="cocktails" element={<Cocktails />} />
            <Route path="ingredients" element={<Ingredients />} />
          </Route>

          <Route path="/" element={<ShortLayout />}>
            <Route
              path="cocktails/:cocktailId"
              element={<CocktailsDetails />}
            />
            <Route
              path="ingredients/:ingredientId"
              element={<IngredientDetails />}
            />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
