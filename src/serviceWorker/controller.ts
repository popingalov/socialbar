import addToCache from './helpers/addToCache';
import takeIngredient from './get/takeIngredient';
import takeCocktail from './get/takeCocktail';
import favorite from './get/favorite';
export default async function controller(
  req: Request,
  url: string,
  id: string,
  baseUrl: string,
) {
  const { method } = req;

  if (method === 'GET') {
    // switch (url) {
    //   case '/api/favorite':
    //     const result = await favorite(url, req);
    //     addToCache(result.clone(), url);
    //     return result;
    // }
    if (id) {
      switch (baseUrl) {
        case 'api/ingredients':
          const result = await takeIngredient({ id, baseUrl, url });
          addToCache(result.clone(), url);
          return result;
        case 'api/cocktails':
          const result1 = await takeCocktail({ id, baseUrl, url });
          addToCache(result1.clone(), url);
          return result1;
      }
    }
  }

  // if (method === 'POST') {
  //   switch (url) {
  //     case '/api/favorite':
  //       const result = await favorite(url, req);
  //       addToCache(result.clone(), url);
  //       return result;
  //   }
  // }
  const response = await fetch(req);
  addToCache(response.clone(), url);
  return response;
}
