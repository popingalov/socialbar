import addToCache from 'serviceWorker/helpers/addToCache';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { IIngredient } from 'types/ingredient';

export default async function createNewIng(req: Request) {
  const [newIng, ingredients]: [IIngredient, IIngredient[]] = await Promise.all(
    [(await fetch(req)).json(), takeCacheJson('/api/ingredients/my')],
  );
  ingredients.push(newIng);
  const result = respGenerator(newIng, 201);
  const newIngredients = respGenerator(ingredients);
  addToCache(newIngredients, '/api/ingredients/my');
  return result;
}
