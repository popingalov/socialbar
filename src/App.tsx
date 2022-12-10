import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Cocktails } from 'pages/Cocktails/Cocktails';
import { Ingredients } from 'pages/Ingredients/Ingredients';
import { CocktailsDetails } from 'pages/CocktailsDetails/CocktailsDetails';
import { IngredientDetails } from 'pages/IngredientDetails/IngredientDetails';
import { ShoppingList } from 'pages/ShoppingList/ShoppingList';
import { Settings } from 'pages/Settings/Settings';

import { Loader } from 'Components/Loader/Loader';

import MainLayout from 'layouts/MainLayout';
import ShortLayout from 'layouts/ShortLayout';

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="cocktails">
          <Route path="my" element={<Cocktails />} />
          <Route path="all" element={<Cocktails />} />
          <Route path="favorite" element={<Cocktails />} />
        </Route>

        <Route path="ingredients">
          <Route path="my" element={<Ingredients />} />
          <Route path="shelf" element={<Ingredients />} />
          <Route path="shopping" element={<ShoppingList />} />
        </Route>
      </Route>

      <Route path="/" element={<ShortLayout />}>
        <Route path="/cocktails/:cocktailId" element={<CocktailsDetails />} />
        <Route
          path="/ingredients/:ingredientId"
          element={<IngredientDetails />}
        />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
