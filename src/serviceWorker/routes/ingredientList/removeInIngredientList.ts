import { IIngredient } from 'types/ingredient';
import { CACHES_NAME } from '../../staticObjects/baseData';
import respGenerator from 'serviceWorker/helpers/responseGenerator';

interface IIngredientList {
  list: IIngredient[];
}

export default async function removeInIngredientList(id: string) {
  const promiseIng = await caches.match('/api/ingredients');
  const ing: IIngredient[] = await promiseIng?.json();
  const myPromise = await caches.match('/api/ingredients/my');
  const my: IIngredient[] = await myPromise?.json();
  const promiselist = await caches.match('/api/my-ingredient-list');
  const list: IIngredientList = await promiselist?.json();
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
  await (
    await caches.open(CACHES_NAME)
  ).put('/api/my-ingredient-list', responseList);

  const result = respGenerator(arr);

  const respond = respGenerator(null);

  return { result, trigger, respond, ingredient };
}
