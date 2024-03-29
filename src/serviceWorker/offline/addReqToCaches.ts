import addToCache from 'serviceWorker/helpers/addToCache';
import respGenerator from 'serviceWorker/helpers/responseGenerator';
import takeCacheJson from 'serviceWorker/helpers/takeCacheJson';

export default async function cachesOflineReq(req: Request) {
  const cachesRes = await takeCacheJson('/my/test33');
  const result: any = {};
  result.url = req.url;
  result.method = req.method;
  result.headers = {
    authorization: req.headers.get('authorization'),
    'Content-Type': 'application/json',
  };
  result.mode = req.mode;
  if (req.method !== 'DELETE') {
    const jsonBody = await req.json();
    result.body = jsonBody;
  }
  if (cachesRes) {
    cachesRes.push(result);
    const resResult = respGenerator(cachesRes);
    addToCache(resResult, '/my/test33');
    return;
  }
  const resResult = respGenerator([result]);
  addToCache(resResult, '/my/test33');
}
