import { IIngredient } from 'types/ingredient';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import addToCache from 'serviceWorker/helpers/addToCache';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';

interface IIngredientList {
  list: IIngredient[];
}

export default async function addToIngredientList(req: Request) {
  const { id } = await req.json();
  const [ing, my, list]: [IIngredient[], IIngredient[], IIngredientList] =
    await Promise.all([
      takeCacheJson('/api/ingredients'),
      takeCacheJson('/api/ingredients/my'),
      takeCacheJson('/api/my-ingredient-list'),
    ]);

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
