import { staticUrl } from '../base';

export default function checkUrl(urlObj: any) {
  const url = urlObj.split(/\.app\//).at(-1) || 'next';
  console.log(urlObj.split(/\.app\//));

  const test = staticUrl[url];
  return { test, url: `/${url}` };
}
