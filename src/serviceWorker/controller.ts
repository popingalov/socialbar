import addToCache from './helpers/addToCache';
import takeIngredient from './routes/ingredients/takeIngredientsById';
import takeCocktail from './routes/cocktails/takeCocktailById';
import ingredientList from './routes/ingredientList/addToIngredientList';
import ingredientListRemove from './routes/ingredientList/removeInIngredientList';
import { callbackObj } from './staticObjects/callbackObject';
import addOneToShop from './routes/shopingList/addOne';
import removeOneInTheShop from './routes/shopingList/removeOne';
import addOneToFavorite from './routes/favorite/addOne';
import removeOneInTheFavorite from './routes/favorite/remove';
import createNewIng from './routes/ingredients/createNewIng';
import respGenerator from './helpers/responseGenerator';
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
      if (id) {
        switch (baseUrl) {
          case 'api/ingredients':
            const result = await takeIngredient({ id, baseUrl, url });
            return result;
          case 'api/cocktails':
            const result1 = await takeCocktail({ id, baseUrl, url });
            return result1;
        }
      }
    }

    if (method === 'POST') {
      switch (url) {
        case '/api/my-ingredient-list':
          const { result, trigger, ingredient } = await ingredientList(
            req.clone(),
          );
          callbackObj.nameFunc = 'addIngToList';
          callbackObj.trigger = true;
          callbackObj.ingredient = ingredient;
          callbackObj.method = method;

          const cacheUrl = trigger ? '/api/ingredients' : '/api/ingredients/my';
          await addToCache(result.clone(), cacheUrl);
          online && fetch(req);

          return result;

        case '/api/shoping-list':
          const r1 = await addOneToShop(req.clone());
          await addToCache(r1.clone(), url);
          online && fetch(req);
          return r1;
        case '/api/favorite':
          const r2 = await addOneToFavorite(req.clone());
          await addToCache(r2.clone(), url);
          online && fetch(req);
          return r2;
        case '/api/ingredients':
          const r3 = await createNewIng(req.clone());
          // await addToCache(r3.clone(), url);
          return r3;
      }
    }

    if (method === 'DELETE') {
      switch (baseUrl) {
        case 'api/my-ingredient-list':
          const { result, trigger, respond, ingredient } =
            await ingredientListRemove(id);
          callbackObj.nameFunc = 'removeIngToList';
          callbackObj.trigger = true;
          callbackObj.ingredient = ingredient;
          callbackObj.method = method;
          const cacheUrl = trigger ? '/api/ingredients' : '/api/ingredients/my';
          addToCache(result.clone(), cacheUrl);
          online && fetch(req);
          return respond;
        case 'api/shoping-list':
          const r1 = await removeOneInTheShop(id);
          await addToCache(r1.clone(), `/${baseUrl}`);
          online && fetch(req);
          return r1;
        case 'api/favorite':
          const r2 = await removeOneInTheFavorite(id);
          await addToCache(r2.clone(), `/${baseUrl}`);
          online && fetch(req);
          return r2;
      }
    }
    const response = await fetch(req);
    addToCache(response.clone(), url);
    return response;
  } catch (error: any) {
    console.log('піймав', error);
    const status = error.message === 'Unauthorized' ? 401 : 404;
    return respGenerator(
      { statusCode: status, message: error.message },
      status,
      error.message,
    );
  }
}
