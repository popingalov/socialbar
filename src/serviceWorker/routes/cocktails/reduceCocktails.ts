import { AllCocktailsResponse } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';

export default function reduceCocktails(
  cocktails: AllCocktailsResponse,
  ingredient: IIngredient,
): AllCocktailsResponse {
  return cocktails.all.reduce(
    (acc, cocktail, idx) => {
      acc.all.push(cocktail);
      //блок є все
      if (cocktail.lacks.length === 0) {
        cocktail.iCan = true;
        if (cocktail.isDefault) {
          acc.haveAll.push(cocktail);
          return acc;
        }
        acc.mine?.haveAll.push(cocktail);
        return acc;
      }
      //блок нестача
      if (cocktail.lacks.length === 1) {
        const test = cocktail.lacks.includes(ingredient.title);
        if (test) {
          cocktail.iCan = true;
          cocktail.lacks.shift();
          if (cocktail.isDefault) {
            acc.haveAll.push(cocktail);
            return acc;
          }
          acc.mine?.haveAll.push(cocktail);
          return acc;
        }
        return acc;
      }
      if (cocktail.lacks.length <= 3) {
        const newLucks = cocktail.lacks.filter(el => el !== ingredient.title);
        if (newLucks.length !== 2) {
          cocktail.lacks = newLucks;
          if (cocktail.isDefault) {
            acc.needMore.push(cocktail);
            return acc;
          }
          acc.mine?.needMore.push(cocktail);
          return acc;
        }
        return acc;
      }
      const newLucks = cocktail.lacks.filter(el => el !== ingredient.title);
      if (newLucks.length !== cocktail.lacks.length) {
        cocktail.lacks = newLucks;
        if (cocktail.isDefault) {
          acc.other.push(cocktail);
          return acc;
        }
        acc.mine?.other.push(cocktail);
        return acc;
      }
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
