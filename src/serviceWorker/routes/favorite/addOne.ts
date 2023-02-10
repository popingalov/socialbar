import respGenerator from 'serviceWorker/helpers/responseGenerator';
import addToCache from 'serviceWorker/helpers/addToCache';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { IFavoriteResponse } from 'types/response.d.';
import { AllCocktailsResponse, ICocktail } from 'types/cocktail';

export default async function addOneToFavorite(req: Request) {
  const { id } = await req.json();
  const [cocktails, favoriteList]: [AllCocktailsResponse, IFavoriteResponse] =
    await Promise.all([
      takeCacheJson('/api/cocktails'),
      takeCacheJson('/api/favorite'),
    ]);

  for (let index = 0; index < cocktails.all.length; index++) {
    const el = cocktails.all[index];
    if (el.id === id) {
      el.favorite = true;
      favoriteList.cocktails.push(el);
      const length = el.lacks.length;
      if (el.isDefault) {
        if (length > 0 && length <= 2) {
          helper(cocktails.needMore, id);
        }
        if (length === 0) {
          helper(cocktails.haveAll, id);
        }
        helper(cocktails.other, id);
      }
      if (length > 0 && length <= 2) {
        helper(cocktails.mine?.needMore, id);
      }
      if (length === 0) {
        helper(cocktails.mine?.haveAll, id);
      }
      helper(cocktails.mine?.other, id);
      break;
    }
  }

  const result = respGenerator(favoriteList);
  const newCocktail = respGenerator(cocktails);
  await addToCache(newCocktail, '/api/cocktails');
  return result;
}

function helper(arr: ICocktail[] | undefined, id: string) {
  if (arr)
    for (let index = 0; index < arr.length; index++) {
      const el = arr[index];
      if (el.id === id) {
        el.favorite = true;
        break;
      }
    }
}
