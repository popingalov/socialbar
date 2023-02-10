import { ICocktail } from 'types/cocktail';
import inthegut from '../../helpers/inthegut';
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
export default async function takeCocktail({ id, baseUrl, url }: IParams) {
  const cocktails: AllCocktailsResponse = await takeCacheJson(baseUrl);
  const cocktail: ICocktail | undefined = cocktails.all.find(
    el => el.id === id,
  );
  if (!cocktail) {
    throw new Error('Bad id');
  }

  const [ingList, favorite] = await Promise.all([
    takeCacheJson('/api/my-ingredient-list'),
    takeCacheJson('/api/favorite'),
  ]);
  // const ingList: any = await ingListPromise?.json();
  // const favorite: any = await favoritePromise?.json();

  const result = respGenerator(inthegut(cocktail, ingList, favorite));

  return result;
}
