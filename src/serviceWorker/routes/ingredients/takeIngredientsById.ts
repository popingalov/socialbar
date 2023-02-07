import { ICocktail } from 'types/cocktail';
import { IIngredient } from '../../../types/ingredient';
import respGenerator from 'serviceWorker/helpers/responseGenerator';

interface IParams {
  id: string;
  baseUrl: string;
  url: string;
}
interface AllCocktailsResponse {
  all: ICocktail[];
  haveAll: ICocktail[];
  needMore: ICocktail[];
  other: ICocktail[];
  mine: { haveAll: ICocktail[]; other: ICocktail[] } | null;
}
export default async function takeIngredient({ id, baseUrl, url }: IParams) {
  const allIngredientsPromise = await caches.match(baseUrl);
  const allIngredients: IIngredient[] = await allIngredientsPromise?.json();

  const myPromise = await caches.match('/api/ingredients/my');
  const my: IIngredient[] = (await myPromise?.json()) || [];

  const cocktailsPromise = await caches.match('/api/cocktails');
  const cocktails: AllCocktailsResponse = await cocktailsPromise?.json();

  const ingredient = [...allIngredients, ...my].find(el => el.id === id);
  if (!ingredient) {
    throw new Error('bad id');
  }
  const includeCocktails = cocktails.all.reduce((acc, el) => {
    const test = el.ingredients.filter(ell => ell._id === id);
    if (test) {
      // const result = { title: el.title, id: el.id };
      acc.push(el);
    }
    return acc;
  }, [] as any);

  ingredient.cocktails = includeCocktails;
  const result = respGenerator(ingredient);

  return result;
}
