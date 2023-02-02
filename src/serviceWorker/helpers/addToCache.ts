import { CACHES_NAME } from '../staticObjects/baseData';
export default async function addToCache(
  response: any,
  url: string,
): Promise<any> {
  (await caches.open(CACHES_NAME)).put(url, response);
}
