import { IFavoriteResponse } from 'types/response.d.';

export default async function favorite(
  baseUrl: string,
  req: Request,
): Promise<any> {
  const favoritePromise = (await caches.match(baseUrl)) || (await fetch(req));
  const favorite: IFavoriteResponse = await favoritePromise?.json();

  const listPromise = (await caches.match('api/my-ingredient-list')) || null;
  const list = await listPromise?.json();

  const helper = favorite.cocktails.map(el => {
    el.lacks = el.ingredients.reduce((acc, el) => {
      if (list.list.length === 0) {
        acc.push(el);
      }
      const test = list.list.filter((ell: any) => {
        return ell.id === el.data;
      });

      if (test.length > 0) {
        return acc;
      }
      acc.push(el);
      return acc;
    }, [] as any);
    return el;
  });
  const result = { cocktails: helper };
  const resp = new Response(JSON.stringify(result));
  return resp;
}
