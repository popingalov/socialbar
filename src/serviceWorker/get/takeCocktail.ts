import { ICocktail } from 'types/cocktail';
import inthegut from '../helpers/inthegut';
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
export default async function takeCocktail({ id, baseUrl, url }: IParams) {
  const cocktailsPromise = await caches.match(baseUrl);
  const cocktails: AllCocktailsResponse = await cocktailsPromise?.json();
  const cocktail: ICocktail | undefined = cocktails.all.find(
    el => el.id === id,
  );
  if (!cocktail) {
    throw new Error('Bad id');
  }
  const ingListPromise: any = await caches.match('/api/my-ingredient-list');
  const ingList: any = await ingListPromise?.json();

  const favoritePromise = await caches.match('/api/favorite');
  const favorite: any = await favoritePromise?.json();

  const result = new Response(
    JSON.stringify(inthegut(cocktail, ingList, favorite)),
  );
  return result;
}
