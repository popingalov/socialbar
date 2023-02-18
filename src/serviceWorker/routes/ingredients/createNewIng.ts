import addToCache from 'serviceWorker/helpers/addToCache';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { IIngredient } from 'types/ingredient';
interface IError extends Object {
  statusCode: number;
  message: string;
}
export default async function createNewIng(req: Request) {
  const [newIng, ingredients]: [IIngredient | IError, IIngredient[]] =
    await Promise.all([
      (await fetch(req)).json(),
      takeCacheJson('/api/ingredients/my'),
    ]);
  if ('statusCode' in newIng) {
    throw new Error(newIng.message);
  }
  if (newIng) ingredients.push(newIng);
  const result = respGenerator(newIng, 201);
  const newIngredients = respGenerator(ingredients);
  addToCache(newIngredients, '/api/ingredients/my');
  return result;
}
