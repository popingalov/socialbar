import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
// import {
//   useTakeIngredientsQuery,
//   useTakeCocktailsQuery,
// } from '../../redux/apis/operation';
import { GlobalStyle } from './App.styled';
import { Routes } from 'react-router';

const Cocktails: React.FC = React.lazy(() =>
  import('pages/Cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/CocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
const Home: React.FC = React.lazy(() =>
  import('pages/Home/Home').then(module => ({
    default: module.Home,
  })),
);
const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/IngredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
const Ingredients: React.FC = React.lazy(() =>
  import('pages/Ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);
const Settings: React.FC = React.lazy(() =>
  import('pages/Settings/Settings').then(module => ({
    default: module.Settings,
  })),
);

const MainLayout: React.FC = React.lazy(() => import('layouts/MainLayout'));
const ShortLayout: React.FC = React.lazy(() => import('layouts/ShortLayout'));

function App() {
  // const { data: ing } = useTakeIngredientsQuery('');
  // const { data: coc, isLoading, isFetching } = useTakeCocktailsQuery('');

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
