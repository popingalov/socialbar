export default async function takeCacheJson(url: string) {
  const promiseResult = await caches.match(url);
  const result = await promiseResult?.json();
  return result;
}
