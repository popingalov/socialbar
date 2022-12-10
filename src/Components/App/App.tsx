import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'Components/loader/Loader';
import {
  useTakeIngredientsQuery,
  useTakeCocktailsQuery,
} from '../../redux/apis/operation';
import { GlobalStyle } from './App.styled';

const AllCocktails: React.FC = React.lazy(() =>
  import('Components/allCocktails/AllCocktails').then(module => ({
    default: module.AllCocktails,
  })),
);
const Cocktails: React.FC = React.lazy(() =>
  import('pages/cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/cocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
const FavoriteCocktails: React.FC = React.lazy(() =>
  import('Components/favoriteCocktails/FavoriteCocktails').then(module => ({
    default: module.FavoriteCocktails,
  })),
);
const Home: React.FC = React.lazy(() =>
  import('pages/home/Home').then(module => ({
    default: module.Home,
  })),
);
const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/ingredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
const Ingredients: React.FC = React.lazy(() =>
  import('pages/ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);
const MainLayout: React.FC = React.lazy(() =>
  import('Components/mainLayout/MainLayout').then(module => ({
    default: module.MainLayout,
  })),
);
const ManageBarShelf: React.FC = React.lazy(() =>
  import('Components/manageBarShelf/ManageBarShelf').then(module => ({
    default: module.ManageBarShelf,
  })),
);
const MyBarShelf: React.FC = React.lazy(() =>
  import('Components/myBarShelf/MyBarShelf').then(module => ({
    default: module.MyBarShelf,
  })),
);
const MyCocktails: React.FC = React.lazy(() =>
  import('Components/myCocktails/MyCocktails').then(module => ({
    default: module.MyCocktails,
  })),
);
const Settings: React.FC = React.lazy(() =>
  import('pages/settings/Settings').then(module => ({
    default: module.Settings,
  })),
);
const ShoppingList: React.FC = React.lazy(() =>
  import('Components/shoppingList/ShoppingList').then(module => ({
    default: module.ShoppingList,
  })),
);
const ShortLayout: React.FC = React.lazy(() =>
  import('Components/shortLayout/ShortLayout').then(module => ({
    default: module.ShortLayout,
  })),
);

function App() {
  const { data: ing } = useTakeIngredientsQuery('');
  const { data: coc, isLoading, isFetching } = useTakeCocktailsQuery('');

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="cocktails" element={<Cocktails />}>
              <Route index element={<Navigate to="my" replace />} />
              <Route path="my" element={<MyCocktails />} />
              <Route path="all" element={<AllCocktails />} />
              <Route path="favorite" element={<FavoriteCocktails />} />
            </Route>

            <Route path="ingredients" element={<Ingredients />}>
              <Route index element={<Navigate to="my" replace />} />
              <Route path="my" element={<MyBarShelf />} />
              <Route path="shelf" element={<ManageBarShelf />} />
              <Route path="shopping" element={<ShoppingList />} />
            </Route>
          </Route>

          <Route path="/" element={<ShortLayout />}>
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
    </>
  );
}

export default App;
