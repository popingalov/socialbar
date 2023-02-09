import addToCache from 'serviceWorker/helpers/addToCache';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { IIngredient } from 'types/ingredient';
import { IShoppingResponse } from 'types/response.d.';

export default async function removeOneInTheShop(id: string) {
  const [shopingList, myIngredients, defaultIngredients]: [
    IShoppingResponse,
    IIngredient[],
    IIngredient[],
  ] = await Promise.all([
    takeCacheJson('/api/shoping-list'),
    takeCacheJson('/api/ingredients/my'),
    takeCacheJson('/api/ingredients'),
  ]);

  if (myIngredients) {
    const { result, ifound } = helper(
      myIngredients,
      shopingList,
      id,
      '/api/ingredients/my',
    );
    if (ifound) return result;
  }
  const { result, ifound } = helper(
    defaultIngredients,
    shopingList,
    id,
    '/api/ingredients',
  );
  if (ifound) return result;
  throw new Error('Bad id');
}

function helper(
  arr: IIngredient[],
  shopingList: IShoppingResponse,
  id: string,
  url: string,
) {
  let ifound = false;
  const result = arr.map(el => {
    if (el.id === id) {
      el.shopping = false;
      ifound = true;
    }
    return el;
  });
  if (ifound) {
    const respIng = respGenerator(result);
    addToCache(respIng, url);
  }
  shopingList.ingredients = shopingList.ingredients.filter(el => el.id !== id);
  return { result: respGenerator(shopingList), ifound };
}
