import { AllCocktailsResponse } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';

export default function reduceCocktails(
  cocktails: AllCocktailsResponse,
  ingredient: IIngredient,
  method: string,
): AllCocktailsResponse {
  return cocktails.all.reduce(
    (acc, cocktail, idx) => {
      if (method === 'DELETE') {
        const testOnIncludes = cocktail.ingredients.find(
          el => el.data.id === ingredient.id,
        );

        if (testOnIncludes) {
          cocktail.lacks.push(ingredient.title);
          cocktail.iCan = false;
        }
      } else {
        const filterLacks = cocktail.lacks.filter(
          el => el !== ingredient.title,
        );
        if (filterLacks.length !== cocktail.lacks.length) {
          cocktail.lacks = filterLacks;
          if (filterLacks.length === 0) cocktail.iCan = true;
        }
      }

      const length = cocktail.lacks.length;
      const isDefault = cocktail.isDefault;
      if (length === 0) {
        acc.all.push(cocktail);
        if (isDefault) {
          acc.haveAll.push(cocktail);
          return acc;
        }
        acc.mine?.haveAll.push(cocktail);
        return acc;
      }
      if (length < 3) {
        acc.all.push(cocktail);
        if (isDefault) {
          acc.needMore.push(cocktail);
          return acc;
        }
        acc.mine?.needMore.push(cocktail);
        return acc;
      }

      acc.all.push(cocktail);

      if (isDefault) {
        acc.other.push(cocktail);
        return acc;
      }
      acc.mine?.other.push(cocktail);
      return acc;
    },
    {
      haveAll: [],
      needMore: [],
      other: [],
      mine: {
        haveAll: [],
        needMore: [],
        other: [],
      },
      all: [],
    } as AllCocktailsResponse,
  );
}
