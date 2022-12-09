import React, { useId, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AllCocktails } from '../AllCocktails/AllCocktails';
import { Cocktails } from '../../pages/Cocktails/Cocktails';
import { CocktailsDetails } from '../../pages/CocktailsDetails/CocktailsDetails';
import { FavoriteCocktails } from '../FavoriteCocktails/FavoriteCocktails';
import { Home } from '../../pages/Home/Home';
import { IngredientDetails } from '../../pages/IngredientDetails/IngredientDetails';
import { Ingredients } from '../../pages/Ingredients/Ingredients';
import { Layout } from '../Layout/Layout';
import { Loader } from '../Loader/Loader';
import { ManageBarShelf } from '../ManageBarShelf/ManageBarShelf';
import { MyBarShelf } from '../MyBarShelf/MyBarShelf';
import { MyCocktails } from '../MyCocktails/MyCocktails';
import { Settings } from '../../pages/Settings/Settings';
import { ShoppingList } from '../ShoppingList/ShoppingList';

const Global = createGlobalStyle`
* {
      margin:0;
      padding:0;
      box-sizing:border-box;
      color: ${p => p.theme.colors.accent};
      }`;

function App() {
  return (
    <>
      <Global />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="ingredients" element={<Ingredients />}>
              <Route path="myBarShelf" element={<MyBarShelf />} />
              <Route path="manageBarShelf" element={<ManageBarShelf />} />
              <Route path="shoppingList" element={<ShoppingList />} />
            </Route>

            <Route path="cocktails" element={<Cocktails />}>
              <Route path="myCocktails" element={<MyCocktails />} />
              <Route path="allCocktails" element={<AllCocktails />} />
              <Route path="favoriteCocktails" element={<FavoriteCocktails />} />
            </Route>

            <Route
              path="cocktails/:cocktailId"
              element={<CocktailsDetails />}
            />
            <Route
              path="ingredients/:ingredientId"
              element={<IngredientDetails />}
            />
          </Route>
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
