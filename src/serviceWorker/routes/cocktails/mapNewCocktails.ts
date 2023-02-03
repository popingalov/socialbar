import addToCache from 'serviceWorker/helpers/addToCache';
import { AllCocktailsResponse } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';
import reduceCocktails from './reduceCocktails';
export default async function mapNewCocktails(
  ingredient: IIngredient,
): Promise<void> {
  const promisCocktails = await caches.match('/api/cocktails');
  const cocktails: AllCocktailsResponse = await promisCocktails?.json();
  const result = reduceCocktails(cocktails, ingredient);
  const responsResult = new Response(JSON.stringify(result));
  await addToCache(responsResult, '/api/cocktails');
}
