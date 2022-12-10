import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Cocktails } from 'pages/Cocktails/Cocktails';
import { Ingredients } from 'pages/Ingredients/Ingredients';
import { Settings } from 'pages/Settings/Settings';
import { CocktailsDetails } from 'pages/CocktailsDetails/CocktailsDetails';
import { IngredientDetails } from 'pages/IngredientDetails/IngredientDetails';

import { AllCocktails } from 'Components/AllCocktails/AllCocktails';
import { MyCocktails } from 'Components/MyCocktails/MyCocktails';
import { MyBarShelf } from 'Components/MyBarShelf/MyBarShelf';
import { FavoriteCocktails } from 'Components/FavoriteCocktails/FavoriteCocktails';

import { ManageBarShelf } from 'Components/ManageBarShelf/ManageBarShelf';
import { ShoppingList } from 'Components/ShoppingList/ShoppingList';

import { Loader } from 'Components/Loader/Loader';

import MainLayout from 'layouts/MainLayout';
import ShortLayout from 'layouts/ShortLayout';

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="cocktails" element={<MainLayout />}>
          <Route path="my" element={<MyCocktails />} />
          <Route path="all" element={<AllCocktails />} />
          <Route path="favorite" element={<FavoriteCocktails />} />
        </Route>

        <Route path="ingredients">
          <Route path="my" element={<MyBarShelf />} />
          <Route path="shelf" element={<ManageBarShelf />} />
          <Route path="shopping-list" element={<ShoppingList />} />
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
