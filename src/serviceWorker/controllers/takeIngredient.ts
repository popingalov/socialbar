import { ICocktail } from 'types/cocktail';
import { IIngredient } from '../../types/ingredient';
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

  const cocktailsPromise = await caches.match('/api/cocktails');
  const cocktails: AllCocktailsResponse = await cocktailsPromise?.json();

  const ingredient = allIngredients.find(el => el.id === id);
  if (!ingredient) {
    throw new Error('Bad id');
  }
  const includeCocktails = cocktails.all.reduce((acc, el) => {
    const test = el.ingredients.filter(ell => ell._id === id);
    if (test) {
      const result = { title: el.title, id: el.id };
      acc.push(result);
    }
    return acc;
  }, [] as any);

  ingredient.cocktails = includeCocktails;
  const result = new Response(JSON.stringify(ingredient));
  return result;
}
