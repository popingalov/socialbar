import { ICocktail } from 'types/cocktail';
import { IIngredient } from '../../../types/ingredient';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';

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
  const [allIngredients, my, cocktails]: [
    IIngredient[],
    IIngredient[],
    AllCocktailsResponse,
  ] = await Promise.all([
    takeCacheJson(baseUrl),
    takeCacheJson('/api/ingredients/my'),
    takeCacheJson('/api/cocktails'),
  ]);
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
