import { ICocktail } from 'types/cocktail';
import inthegut from '../../helpers/inthegut';
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
export default async function takeCocktail({ id, baseUrl, url }: IParams) {
  const cocktailsPromise = await caches.match(baseUrl);
  const cocktails: AllCocktailsResponse = await cocktailsPromise?.json();
  const cocktail: ICocktail | undefined = cocktails.all.find(
    el => el.id === id,
  );
  if (!cocktail) {
    throw new Error('Bad id');
  }

  const [ingListPromise, favoritePromise] = await Promise.all([
    caches.match('/api/my-ingredient-list'),
    caches.match('/api/favorite'),
  ]);
  const ingList: any = await ingListPromise?.json();
  const favorite: any = await favoritePromise?.json();

  const result = respGenerator(inthegut(cocktail, ingList, favorite));

  return result;
}
