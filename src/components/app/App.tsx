import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  Cocktails,
  CocktailsDetails,
  Home,
  IngredientDetails,
  Ingredients,
  Layout,
  Settings,
} from './lazyexports';
import Loader from 'components/loader';
import { GlobalStyle } from './App.styled';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="cocktails" element={<Cocktails />} />
              <Route path="ingredients" element={<Ingredients />} />
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
      </AnimatePresence>
    </>
  );
};

export default App;
