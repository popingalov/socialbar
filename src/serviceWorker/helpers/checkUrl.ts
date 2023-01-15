import { staticUrl } from '../base';

export default function checkUrl(urlObj: any) {
  const url = urlObj.split(/\/api\//).at(-1) || 'next';
  // const url = urlObj.href.split(/\/api\//).at(-1) || 'next';
  const test = staticUrl[url];
  const testurl = `/api/${url}`;
  return { test, url };
}
