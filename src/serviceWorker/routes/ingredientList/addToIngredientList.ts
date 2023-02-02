import { IIngredient } from 'types/ingredient';
import { CACHES_NAME } from '../../staticObjects/baseData';
import respGenerator from 'serviceWorker/helpers/responseGenerator';

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

  const newIngArr = ing.map((el: any) => {
    if (el.id === id) {
      trigger = true;
      el.iHave = true;
      list.list.push(el);
    }
    return el;
  });

  if (trigger) return helper(list, newIngArr, trigger, id);

  const newIngArrMy = my.map((el: any) => {
    if (el.id === id) {
      el.iHave = true;
      list.list.push(el);
    }
    return el;
  });
  return helper(list, newIngArrMy, trigger, id);
}

async function helper(
  list: IIngredientList,
  newIngArr: IIngredient[],
  trigger: boolean,
  id: string,
) {
  const newList = new Response(JSON.stringify(list));
  await (
    await caches.open(CACHES_NAME)
  ).put('/api/my-ingredient-list', newList);
  const result = respGenerator(newIngArr, 201);

  return { result, trigger, id };
}
