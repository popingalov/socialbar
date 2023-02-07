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
} from './lazyexports';
import { GlobalStyle } from './App.styled';
import Loader from 'components/loader';
import MobileMenu from 'components/mobileMenu';
import { selectMobileMenuStatus } from 'redux/modal/modalSelectors';
import { setToken } from 'redux/auth/authSlice';
import { tokenState } from 'redux/auth/authSelectors';
import { useGetMeQuery } from 'redux/api/userApi';
import Search from 'pages/search';

const App = () => {
  const location = useLocation();
  const menuIsOpen = useAppSelector(selectMobileMenuStatus);
  const [searchParams] = useSearchParams();
  const token = useAppSelector(tokenState);
  const dispatch = useAppDispatch();
  useGetMeQuery(undefined, {
    skip: token === null,
  });
  let stringy = '';
  if ('connection' in navigator) {
    const connection: any = navigator.connection;
    // connection.addEventListener('change', handleConnectionChange);

    function handleConnectionChange() {
      const online = navigator.onLine;
      console.log(online, connection);
      stringy = `${connection.rtt},${connection.saveData},${connection.downlink}`;
    }
    handleConnectionChange();
  }
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
      <h1>{stringy}</h1>
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location}>
            <Route key={location.key} path="/" element={<Layout />}>
              <Route
                key={location.key}
                index
                element={<Navigate to="ingredients" replace />}
              />
              <Route
                key={location.key}
                path="cocktails"
                element={<Cocktails />}
              >
                <Route path="search" element={<Search />} />
              </Route>
              <Route
                key={location.key}
                path="ingredients"
                element={<Ingredients />}
              >
                <Route path="search" element={<Search />} />
              </Route>
              <Route
                key={location.key}
                path="cocktails/:cocktailId"
                element={<CocktailsDetails />}
              >
                <Route path="search" element={<Search />} />
              </Route>
              <Route
                key={location.key}
                path="cocktails/new"
                element={<NewCocktail />}
              />
              <Route
                key={location.key}
                path="ingredients/:ingredientId"
                element={<IngredientDetails />}
              >
                <Route path="search" element={<Search />} />
              </Route>
              <Route
                key={location.key}
                path="ingredients/new"
                element={<NewIngredient />}
              />
              <Route
                key={location.key}
                path="settings"
                element={<Settings />}
              />
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
