import { cacheName } from '../base';
export default async function addToCache(
  response: any,
  url: string,
): Promise<any> {
  (await caches.open(cacheName)).put(url, response);
}
