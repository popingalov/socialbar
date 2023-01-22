export default async function favorite(url: string, req: Request) {
  const [promiseFavorite, promiseCocktails] = await Promise.all([
    fetch(req),
    caches.match('/api/cocktails'),
  ]);

  const favorite = await promiseFavorite.json();
  const { all } = await promiseCocktails?.json();
  favorite.cocktails = all.filter((el: any) => el.favorite);
  const result = new Response(favorite);
  return result;
}
