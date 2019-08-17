if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([
  {
    "url": "images/icons/1.png",
    "revision": "bed9177d572777f7d2fb3194ef3229a1"
  },
  {
    "url": "images/icons/anbar.png",
    "revision": "89616e0261c8be51a67de76681f0d126"
  },
  {
    "url": "images/icons/angosht.png",
    "revision": "dfa1c2c7a403827e5d92d329f44951e6"
  },
  {
    "url": "images/icons/frosh.png",
    "revision": "5e1e34677741c50032863cab108f6287"
  },
  {
    "url": "images/icons/gozaresh.png",
    "revision": "903ab0269de40c19e46c96d855ad331f"
  },
  {
    "url": "images/icons/ic-arrow-left-back.png",
    "revision": "bec8b5c71d90256e8b3c6c81bc438619"
  },
  {
    "url": "images/icons/ic-arrow-right.png",
    "revision": "7e42af925b0d62885739a6be176f5674"
  },
  {
    "url": "images/icons/ic-check.png",
    "revision": "983cd5f4d9d30dfaea740248a3f06a94"
  },
  {
    "url": "images/icons/ic-close.png",
    "revision": "5d9f35a45210e373e63014f08770cc53"
  },
  {
    "url": "images/icons/ic-left-arrow.png",
    "revision": "cbe3f1d4aa4502b22dc367d991e81047"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "873880731ea524e48ee675fd1d6e10e9"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "37279cc623f16d576a04880648e4d4b6"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "dcd4d6e4335d1c55d250ea3ed6e6574f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "69c13e011fa81ab1c9a4533a48973469"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "9bfbd8a1a5e6677d35c5edaca4f50dcc"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "9bfbd8a1a5e6677d35c5edaca4f50dcc"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "cf07f84e8ed16e1d674e335109790f3f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "92915d7594f688338ed29ff229cf398c"
  },
  {
    "url": "images/icons/kartabl.png",
    "revision": "fe9fb71b7fa14889aa9da3efe2b8c9b5"
  },
  {
    "url": "images/icons/khazane.png",
    "revision": "13c2b9c6bf5afb1f8cdfe73fdcacf43d"
  },
  {
    "url": "images/icons/lock.png",
    "revision": "2d7bbb9f2618cf556f6c4233e0fa7807"
  },
  {
    "url": "images/icons/main-left-circut.png",
    "revision": "1a30a317652261d7b9e9d5ad9404bc04"
  },
  {
    "url": "images/icons/main-right-circut.png",
    "revision": "c231dce1886ad3bc3063397b18345af4"
  },
  {
    "url": "images/icons/moshtarian.png",
    "revision": "123e9ce1b2ad32b53bcb9d87049ef011"
  },
  {
    "url": "images/icons/phone.png",
    "revision": "062cf9141317070927fe0236f7989258"
  },
  {
    "url": "images/icons/roydadha.png",
    "revision": "dd22796903c52f3ce4c4454b1a3dced8"
  },
  {
    "url": "images/logo/logo 2.png",
    "revision": "be2fd9f9627a1b9036b3add71c7ffb26"
  },
  {
    "url": "images/logo/logo.png",
    "revision": "e5b71a2994d4ce41d517903e10064fa4"
  },
  {
    "url": "index.html",
    "revision": "9d3338a4a513e1cd18c5f114cdcfd935"
  },
  {
    "url": "precache-manifest.6a0597ebdb8a34897bccbc90fc6a5c7a.js",
    "revision": "6a0597ebdb8a34897bccbc90fc6a5c7a"
  },
  {
    "url": "script/main.js",
    "revision": "e3a341bea59ed429a6dbfd596e9ecfa1"
  },
  {
    "url": "service-worker.js",
    "revision": "6259ed19b7449dcb560c7f28acc44e24"
  },
  {
    "url": "static/css/2.ddb234f8.chunk.css",
    "revision": "c5125a3bfe493a5a0cc20e8db8789e50"
  },
  {
    "url": "static/css/main.e8831f73.chunk.css",
    "revision": "87a5d4ea848fb7fe0cfc0d6859185594"
  },
  {
    "url": "static/js/2.9514cc9a.chunk.js",
    "revision": "9cbaeac88f15e5f50884d114abe53142"
  },
  {
    "url": "static/js/main.c532ec2c.chunk.js",
    "revision": "53c193ac395e2d1d61062a2d2c32a4dd"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });
        workbox.routing.registerRoute(
            new RegExp('.*\.js'),
            new workbox.strategies.CacheFirst()
        );
        workbox.routing.registerRoute(
            new RegExp('.*\.css'),
            new workbox.strategies.CacheFirst()
        );
        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}