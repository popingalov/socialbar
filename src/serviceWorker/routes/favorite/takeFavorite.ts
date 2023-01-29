import respGenerator from 'serviceWorker/helpers/responseGenerator';

export default async function favorite(url: string, req: Request) {
  const [promiseFavorite, promiseCocktails] = await Promise.all([
    fetch(req),
    caches.match('/api/cocktails'),
  ]);

  const favorite = await promiseFavorite.json();

  const { all } = await promiseCocktails?.json();
  const helper = favorite.cocktails.map((el: any) => {
    const result = all.find((els: any) => els.title === el.title);
    return result;
  });

  favorite.cocktails = helper;
  // favorite.cocktails = all.filter((el: any) => el.favorite);
  const result = respGenerator(favorite);

  return result;
}
