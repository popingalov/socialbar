import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Loader } from 'Components/Loader/Loader';

const AllCocktails: React.FC = React.lazy(() =>
  import('Components/AllCocktails/AllCocktails').then(module => ({
    default: module.AllCocktails,
  })),
);
const Cocktails: React.FC = React.lazy(() =>
  import('pages/Cocktails/Cocktails').then(module => ({
    default: module.Cocktails,
  })),
);
const CocktailsDetails: React.FC = React.lazy(() =>
  import('pages/CocktailsDetails/CocktailsDetails').then(module => ({
    default: module.CocktailsDetails,
  })),
);
const FavoriteCocktails: React.FC = React.lazy(() =>
  import('Components/FavoriteCocktails/FavoriteCocktails').then(module => ({
    default: module.FavoriteCocktails,
  })),
);
const Home: React.FC = React.lazy(() =>
  import('pages/Home/Home').then(module => ({
    default: module.Home,
  })),
);
const IngredientDetails: React.FC = React.lazy(() =>
  import('pages/IngredientDetails/IngredientDetails').then(module => ({
    default: module.IngredientDetails,
  })),
);
const Ingredients: React.FC = React.lazy(() =>
  import('pages/Ingredients/Ingredients').then(module => ({
    default: module.Ingredients,
  })),
);
const Layout: React.FC = React.lazy(() =>
  import('Components/Layout/Layout').then(module => ({
    default: module.Layout,
  })),
);
const ManageBarShelf: React.FC = React.lazy(() =>
  import('Components/ManageBarShelf/ManageBarShelf').then(module => ({
    default: module.ManageBarShelf,
  })),
);
const MyBarShelf: React.FC = React.lazy(() =>
  import('Components/MyBarShelf/MyBarShelf').then(module => ({
    default: module.MyBarShelf,
  })),
);
const MyCocktails: React.FC = React.lazy(() =>
  import('Components/MyCocktails/MyCocktails').then(module => ({
    default: module.MyCocktails,
  })),
);
const Settings: React.FC = React.lazy(() =>
  import('pages/Settings/Settings').then(module => ({
    default: module.Settings,
  })),
);
const ShoppingList: React.FC = React.lazy(() =>
  import('Components/ShoppingList/ShoppingList').then(module => ({
    default: module.ShoppingList,
  })),
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="ingredients" element={<Ingredients />}>
              <Route index element={<MyBarShelf />} />
              <Route path="myBarShelf" element={<MyBarShelf />} />
              <Route path="manageBarShelf" element={<ManageBarShelf />} />
              <Route path="shoppingList" element={<ShoppingList />} />
            </Route>
            <Route
              path="ingredients/:ingredientId"
              element={<IngredientDetails />}
            />

            <Route path="cocktails" element={<Cocktails />}>
              <Route index element={<MyCocktails />} />
              <Route path="myCocktails" element={<MyCocktails />} />
              <Route path="allCocktails" element={<AllCocktails />} />
              <Route path="favoriteCocktails" element={<FavoriteCocktails />} />
            </Route>
            <Route
              path="cocktails/:cocktailId"
              element={<CocktailsDetails />}
            />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
