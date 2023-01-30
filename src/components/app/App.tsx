import { Suspense, useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import {
  Cocktails,
  CocktailsDetails,
  IngredientDetails,
  Ingredients,
  Layout,
  NewCocktail,
  NewIngredient,
  Settings,
  Search,
} from './lazyexports';
import { GlobalStyle } from './App.styled';
import Loader from 'components/loader';
import MobileMenu from 'components/mobileMenu';
import { selectMobileMenuStatus } from 'redux/modal/modalSelectors';
import { setToken } from 'redux/auth/authSlice';
import { tokenState } from 'redux/auth/authSelectors';
import { useGetMeQuery } from 'redux/api/userApi';

const App = () => {
  const location = useLocation();
  const menuIsOpen = useAppSelector(selectMobileMenuStatus);
  const [searchParams] = useSearchParams();
  const token = useAppSelector(tokenState);
  const dispatch = useAppDispatch();
  useGetMeQuery(undefined, {
    skip: token === null,
  });

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
    }

    const persistToken = localStorage.getItem('token');
    if (persistToken) {
      dispatch(setToken(persistToken));
    }
  }, [dispatch, searchParams]);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="ingredients" replace />} />
              <Route path="cocktails" element={<Cocktails />}>
                <Route path="search" element={<Search />} />
              </Route>
              <Route path="ingredients" element={<Ingredients />}>
                <Route path="search" element={<Search />} />
              </Route>
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
    </>
  );
};

export default App;
