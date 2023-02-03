import { IIngredient } from 'types/ingredient';
import { CACHES_NAME } from '../../staticObjects/baseData';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import addToCache from 'serviceWorker/helpers/addToCache';

interface IIngredientList {
  list: IIngredient[];
}

export default async function addToIngredientList(req: Request) {
  const { id } = await req.json();
  const promiseIng = await caches.match('/api/ingredients');
  const ing: IIngredient[] = await promiseIng?.json();
  const myPromise = await caches.match('/api/ingredients/my');
  const my: IIngredient[] = await myPromise?.json();

  const promiselist = await caches.match('/api/my-ingredient-list');
  const list: IIngredientList = await promiselist?.json();

  let trigger = false;
  let thisIngredient: IIngredient | null = null;
  const newIngArr = ing.map((el: any) => {
    if (el.id === id) {
      trigger = true;
      el.iHave = true;
      thisIngredient = el;
      list.list.push(el);
    }
    return el;
  });

  if (trigger) return helper(list, newIngArr, trigger, thisIngredient);

  const newIngArrMy = my.map((el: any) => {
    if (el.id === id) {
      el.iHave = true;
      thisIngredient = el;
      list.list.push(el);
    }
    return el;
  });
  return helper(list, newIngArrMy, trigger, thisIngredient);
}

async function helper(
  list: IIngredientList,
  newIngArr: IIngredient[],
  trigger: boolean,
  ingredient: IIngredient | null,
) {
  const newList = new Response(JSON.stringify(list));
  await addToCache(newList, '/api/my-ingredient-list');

  const result = respGenerator(newIngArr, 201);

  return { result, trigger, ingredient };
}
