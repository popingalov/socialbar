import { paths } from 'constants/paths';

export const getLocation = (path: string) => {
  const isMainRoute = path === paths.ingredients || path === paths.cocktails;
  const isIngredients = path === paths.ingredients;
  const isCocktails = path === paths.cocktails;

  const isExtraRoute =
    path === paths.settings ||
    path === paths.newCocktail ||
    path === paths.newIngredient;

  const isMainRouteSearching =
    path === paths.searchIngredient || path === paths.searchCocktails;

  const pathData = path.split('/');
  const isSearch = pathData[pathData.length - 1] === 'search';
  const isSearchInDetails =
    pathData[pathData.length - 1] === 'search' && pathData.length === 4;

  const isMainRouteFilter = isMainRoute && !isMainRouteSearching;
  const isCardRouteSearching = isSearchInDetails && !isMainRoute;

  const isIngredientsAndSearch =
    path === paths.ingredients || path === paths.searchIngredient;

  return {
    isMainRoute,
    isExtraRoute,
    isMainRouteSearching,
    isMainRouteFilter,
    isCardRouteSearching,
    isSearchInDetails,
    isSearch,
    isIngredients,
    isCocktails,
    isIngredientsAndSearch,
  };
};
