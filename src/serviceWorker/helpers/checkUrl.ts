import { STATIC_URL } from '../staticObjects/baseData';

export default function checkUrl(urlObj: any) {
  const url = urlObj.split(/\.app\//).at(-1) || 'next';

  if (url.length > 28) {
    const helper = url.split('/');
    const splitUrl = `${helper[0]}/${helper[1]}`;
    const test = STATIC_URL[splitUrl];
    return {
      test,
      url: `/${splitUrl}/${helper[2]}`,
      id: helper[2],
      baseUrl: splitUrl,
    };
  }
  const test = STATIC_URL[url];
  return { test, url: `/${url}`, id: null };
}
