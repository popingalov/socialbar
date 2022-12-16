import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/loader/Loader';

import MainLayout from 'layouts/MainLayout';
import ShortLayout from 'layouts/ShortLayout';

// import { Home } from 'pages/Home/Home';
import { Cocktails } from 'pages/Cocktails/Cocktails';
import { Ingredients } from 'pages/Ingredients/Ingredients';
import { CocktailsDetails } from 'pages/CocktailsDetails/CocktailsDetails';
import { IngredientDetails } from 'pages/IngredientDetails/IngredientDetails';
import { Settings } from 'pages/Settings/Settings';

import { GlobalStyle } from './App.styled';

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} /> */}

          <Route index element={<Cocktails />} />
          <Route path="ingredients" element={<Ingredients />} />
        </Route>

        <Route path="/" element={<ShortLayout />}>
          <Route path="cocktails/:cocktailId" element={<CocktailsDetails />} />
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

export default App;
