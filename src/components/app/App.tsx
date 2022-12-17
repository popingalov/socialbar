import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Cocktails,
  CocktailsDetails,
  Home,
  IngredientDetails,
  Ingredients,
  MainLayout,
  Settings,
  ShortLayout,
} from './lazyexports';
import Loader from 'components/loader';
import { GlobalStyle } from './App.styled';

const App = () => (
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
