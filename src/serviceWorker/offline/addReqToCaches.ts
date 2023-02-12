import addToCache from 'serviceWorker/helpers/addToCache';
import respGenerator from 'serviceWorker/helpers/responseGenerator';

export default async function cachesOflineReq(req: Request) {
  const result: any = {};
  result.url = req.url;
  result.method = req.method;
  result.headers = {
    authorization: req.headers.get('authorization'),
    'Content-Type': 'application/json',
  };
  result.mode = req.mode;
  const jsonBody = await req.json();
  result.body = jsonBody;

  const resResult = respGenerator(result);

  addToCache(resResult, '/my/test33');
}
