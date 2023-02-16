import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';
import { CACHES_NAME } from 'serviceWorker/staticObjects/baseData';

export default async function fetchCachesReq() {
  const res: Request[] = await takeCacheJson('/offline/token');
  if (!res) return;

  for (const el of res) {
    if (el.method) {
      await helperBody(el);
    } else {
      await helper(el);
    }
  }

  (await caches.open(CACHES_NAME)).delete('/offline/token');
}
async function helper(res: Request) {
  const req = new Request(res.url, {
    method: res.method,
    headers: res.headers,
    mode: res.mode,
  });
  const result = await fetch(req);
}
async function helperBody(res: Request) {
  const req = new Request(res.url, {
    method: res.method,
    body: JSON.stringify(res.body),
    headers: res.headers,
    mode: res.mode,
  });
  const result = await fetch(req);
}
