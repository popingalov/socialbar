import { staticUrl } from '../base';

export default function checkUrl(urlObj: any) {
  const url = urlObj.split(/\/api\//).at(-1) || 'next';
  const test = staticUrl[url];

  return { test, url };
}
