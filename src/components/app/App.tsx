import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/loader/Loader';

import MainLayout from 'layouts/mainLayout';
import ShortLayout from 'layouts/shortLayout';

// import { Home } from 'pages/Home/Home';
import { Cocktails } from 'pages/cocktails/Cocktails';
import { Ingredients } from 'pages/ingredients/Ingredients';
import { CocktailsDetails } from 'pages/cocktailsDetails/CocktailsDetails';
import { IngredientDetails } from 'pages/ingredientDetails/IngredientDetails';
import { Settings } from 'pages/settings/Settings';

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
