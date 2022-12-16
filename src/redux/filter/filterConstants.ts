interface ICocktailFilter {
  readonly myCocktails: string;
  readonly allCocktails: string;
  readonly favoriteCocktails: string;
}

export const cocktailFilterStatus: ICocktailFilter = {
  myCocktails: 'myCocktails',
  allCocktails: 'allCocktails',
  favoriteCocktails: 'favoriteCocktails',
};

interface IIngredientsFilter {
  readonly myBarShelf: string;
  readonly manageBarShelf: string;
  readonly shoppingList: string;
}
export const ingredientFilterStatus: IIngredientsFilter = {
  myBarShelf: 'myBarShelf',
  manageBarShelf: 'manageBarShelf',
  shoppingList: 'shoppingList',
};
