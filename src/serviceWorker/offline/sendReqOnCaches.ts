import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { CACHES_NAME } from 'serviceWorker/staticObjects/baseData';

export default async function fetchCachesReq() {
  const res = await takeCacheJson('/my/test33');
  if (res) {
    const req = new Request(res.url, {
      method: res.method,
      body: JSON.stringify(res.body),
      headers: res.headers,
      mode: res.mode,
    });
    await fetch(req);

    (await caches.open(CACHES_NAME)).delete('/my/test33');
  }
}
