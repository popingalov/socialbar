import { IIngredient } from 'types/ingredient';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import addToCache from 'serviceWorker/helpers/addToCache';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';

interface IIngredientList {
  list: IIngredient[];
}

export default async function removeInIngredientList(id: string) {
  const [ing, my, list]: [IIngredient[], IIngredient[], IIngredientList] =
    await Promise.all([
      takeCacheJson('/api/ingredients'),
      takeCacheJson('/api/ingredients/my'),
      takeCacheJson('/api/my-ingredient-list'),
    ]);

  let ingredient: any = null;

  const newList = list.list.filter((el: any) => el.id !== id);
  list.list = newList;
  let trigger = false;
  const newIngArr: IIngredient[] = ing.map((el: any) => {
    if (el.id === id) {
      ingredient = el;
      trigger = true;
      el.iHave = false;
    }
    return el;
  });

  if (trigger) return resultHelper(list, newIngArr, trigger, ingredient);
  const newIngArrMy: IIngredient[] = my.map((el: any) => {
    if (el.id === id) {
      ingredient = el;
      trigger = false;
      el.iHave = false;
    }
    return el;
  });
  return resultHelper(list, newIngArrMy, trigger, ingredient);
}

async function resultHelper(
  list: IIngredientList,
  arr: IIngredient[],
  trigger: boolean,
  ingredient: IIngredient,
) {
  const responseList = new Response(JSON.stringify(list));
  addToCache(responseList, '/api/my-ingredient-list');

  const result = respGenerator(arr);

  const respond = respGenerator(null);

  return { result, trigger, respond, ingredient };
}
