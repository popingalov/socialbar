import addToCache from './helpers/addToCache';
import takeIngredient from './routes/ingredients/takeIngredientsById';
import takeCocktail from './routes/cocktails/takeCocktailById';
import favorite from './routes/favorite/takeFavorite';
import ingredientList from './routes/ingredientList/addToIngredientList';
import ingredientListRemove from './routes/ingredientList/removeInIngredientList';
import { callbackObj } from './staticObjects/callbackObject';
export default async function controller(
  req: Request,
  url: string,
  id: string,
  baseUrl: string,
  online: boolean,
) {
  const { method } = req;

  try {
    if (method === 'GET') {
      switch (url) {
        case '/api/favorite':
          const result = await favorite(url, req);
          addToCache(result.clone(), url);
          return result;
      }
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
    console.log(method);

    if (method === 'POST') {
      switch (url) {
        case '/api/my-ingredient-list':
          online && fetch(req.clone());

          const { result, trigger, ingredient } = await ingredientList(req);
          callbackObj.nameFunc = 'addIngToList';
          callbackObj.trigger = true;
          callbackObj.ingredient = ingredient;
          callbackObj.method = method;
          const cacheUrl = trigger ? '/api/ingredients' : '/api/ingredients/my';
          await addToCache(result.clone(), cacheUrl);
          return result;
      }
    }

    if (method === 'DELETE') {
      switch (baseUrl) {
        case 'api/my-ingredient-list':
          online && fetch(req.clone());
          const { result, trigger, respond, ingredient } =
            await ingredientListRemove(id);
          callbackObj.nameFunc = 'removeIngToList';
          callbackObj.trigger = true;
          callbackObj.ingredient = ingredient;
          callbackObj.method = method;
          const cacheUrl = trigger ? '/api/ingredients' : '/api/ingredients/my';
          addToCache(result.clone(), cacheUrl);
          return respond;
      }
    }
    const response = await fetch(req);
    addToCache(response.clone(), url);
    return response;
  } catch (error: any) {
    console.log('піймав', error);

    return new Response(error.message, {
      status: 404,
      statusText: error.message,
    });
  }
}
