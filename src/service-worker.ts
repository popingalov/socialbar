/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

// import { url } from 'inspector';

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
//
import { cacheName } from './serviceWorker/base';
import checkUrl from './serviceWorker/helpers/checkUrl';
import takeCocktail from 'serviceWorker/controllers/takeCocktail';
import takeIngredient from 'serviceWorker/controllers/takeIngredient';
import favorite from 'serviceWorker/controllers/favorite';
//
declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'),
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  }),
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.

self.addEventListener('activate', () => {
  console.log('я працюю 1 раз під час оновлення білда');
});

self.addEventListener('fetch', async (event: FetchEvent): Promise<any> => {
  const req = event.request;
  const { test, url, id, baseUrl } = checkUrl(req.url);

  if (test) {
    event.respondWith(takeCache(req, url, id, baseUrl));
    // event.waitUntil(addToCache(req, url));
  }
});

async function takeCache(req: any, url: string, id: any, baseUrl: any) {
  const cached = await caches.match(url);
  if (cached) {
    return cached;
  }

  // switch (url) {
  //   case '/api/favorite':
  //     const result = await favorite(url, req);
  //     addToCache(result.clone(), url);
  //     return result;
  // }
  if (id) {
    switch (baseUrl) {
      case 'api/ingredients':
        const result = await takeIngredient({ id, baseUrl, url });
        addToCache(result.clone(), url);
        return result;
      case 'api/cocktails':
        const result1 = await takeCocktail({ id, baseUrl, url });
        addToCache(result1.clone(), url);
        return result1;
    }
  }

  const response = await fetch(req);
  addToCache(response.clone(), url);
  return response;
}

async function addToCache(response: any, url: string): Promise<any> {
  (await caches.open(cacheName)).put(url, response);
}
