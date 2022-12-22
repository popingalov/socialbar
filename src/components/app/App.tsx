import { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
  Cocktails,
  CocktailsDetails,
  Home,
  IngredientDetails,
  Ingredients,
  Layout,
  NewCocktail,
  NewIngredient,
  Settings,
} from './lazyexports';
import { GlobalStyle } from './App.styled';
import Loader from 'components/loader';
import MobileMenu from 'components/mobileMenu';
import PopUp from 'components/popUp';
import {
  selectMobileMenuStatus,
  selectPopUpStatus,
} from 'redux/modal/modalSelectors';

const App = () => {
  const location = useLocation();
  const menuIsOpen = useSelector(selectMobileMenuStatus);
  const popUpIsOpen = useSelector(selectPopUpStatus);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<Home />} /> */}
              <Route index element={<Navigate to="ingredients" />} />
              <Route path="cocktails" element={<Cocktails />} />
              <Route path="ingredients" element={<Ingredients />} />
              <Route
                path="cocktails/:cocktailId"
                element={<CocktailsDetails />}
              />
              <Route path="cocktails/new" element={<NewCocktail />} />
              <Route
                path="ingredients/:ingredientId"
                element={<IngredientDetails />}
              />
              <Route path="ingredients/new" element={<NewIngredient />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
      <AnimatePresence>
        {menuIsOpen && <MobileMenu key="mobileMenu" />}
      </AnimatePresence>
      {/* <AnimatePresence>
        {popUpIsOpen && (
          <PopUp>
            <>здесь будет опшинс</>
          </PopUp>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default App;
