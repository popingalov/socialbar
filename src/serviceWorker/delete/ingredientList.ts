import { cacheName } from '../base';

export default async function ingredientList(req: Request) {
  const { id } = await req.json();
  const promiseIng = await caches.match('/api/ingredients');
  const ing = await promiseIng?.json();
  const promiselist = await caches.match('/api/my-ingredient-list');
  const list = await promiselist?.json();

  const newIngArr = ing.filter((el: any) => {
    if (el.id === id) {
      el.iHave = false;
    }
    return el.id !== id;
  });
  const helper = list.list.filter((el: any) => el.id !== id);
  list.list = helper;
  const newList = new Response(JSON.stringify(list));
  await (await caches.open(cacheName)).put('/api/my-ingredient-list', newList);
  const result = new Response(JSON.stringify(newIngArr));
  return result;
}
