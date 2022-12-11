interface ICocktailFilter {
  readonly myCocktails: string;
  readonly AllCocktails: string;
  readonly FavoriteCocktails: string;
}

export const cocktailFilterStatus: ICocktailFilter = {
  myCocktails: 'myCocktails',
  AllCocktails: 'AllCocktails',
  FavoriteCocktails: 'FavoriteCocktails',
};

interface IIngredientsFilter {
  readonly MyBarShelf: string;
  readonly ManageBarShelf: string;
  readonly ShoppingList: string;
}
export const ingredientFilterStatus: IIngredientsFilter = {
  MyBarShelf: 'MyBarShelf',
  ManageBarShelf: 'ManageBarShelf',
  ShoppingList: 'ShoppingList',
};
