import addToCache from 'serviceWorker/helpers/addToCache';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { AllCocktailsResponse } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';
import reduceCocktails from './reduceCocktails';
export default async function mapNewCocktails(
  ingredient: IIngredient,
  method: string,
): Promise<void> {
  const cocktails:AllCocktailsResponse = await takeCacheJson('/api/cocktails')
  const result = reduceCocktails(cocktails, ingredient, method);
  const responsResult = new Response(JSON.stringify(result));
  await addToCache(responsResult, '/api/cocktails');
}
