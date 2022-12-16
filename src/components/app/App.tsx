import { Suspense } from 'react';
import { Route } from 'react-router-dom';
//
import { Loader } from 'components/loader/Loader';
import { Routes } from 'react-router';
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
//
// import {
//   useTakeCocktailsQuery,
//   useAddNewCoctailQuery,
// } from 'redux/apis/cocteils';
// import { useAddIngredientQuery } from 'redux/apis/ingredients';
// import { useCreateNewUserQuery } from 'redux/apis/user';
//
import { GlobalStyle } from './App.styled';

function App() {
  // const { data } = useTakeCocktailsQuery(1);
  // const { data } = useAddIngredientQuery({
  //   date: {
  //     name: 'Rom',
  //     category: 'Water',
  //     description: 'Very nice water',
  //   },
  // });
  // const { data: mail } = useCreateNewUserQuery({
  //   email: 'newuser@gmail.com',
  //   name: 'poping',
  // });
  // console.log(data);
  // const { data } = useAddNewCoctailQuery({
  //   date: {
  //     name: 'Rom Cola',
  //     id: 'Rom Cola',
  //     cocType: ['Strong', 'Shot'],
  //     ingredients: ['639b4b40272d0ca02bb28bc6', '639b4b6b272d0ca02bb28bc9'],
  //     size: {
  //       rom: '300',
  //       cola: '50',
  //     },
  //     cocMetod: 'Take 300 ml cola then add 50 ml cola',
  //     description: 'Very nice water',
  //   },
  // });
  // console.log(data);

  return (
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
