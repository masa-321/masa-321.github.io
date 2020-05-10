'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "44cfdb264877a8d83612330931fae5f3",
"/main.dart.js": "d45250d1e0e13565a05f60562473484d",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "df38c4013e2d6cd39983e6e2d90f9a10",
"/assets/LICENSE": "6d54d43f1997b67c6ab6e4b5384ebed7",
"/assets/AssetManifest.json": "26cd3a0feb24e940b4269a080f3bc723",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/category_images/img_technology.png": "165a4073582630bbd159cee4da864bd5",
"/assets/assets/category_images/img_not_found.jpg": "0578e19cdb2b7e638b5202790762e038",
"/assets/assets/category_images/img_science.png": "7c1444e720b1510f068ddeb94e8f62de",
"/assets/assets/category_images/img_sport.png": "bc1914bdd67e24cfd96f4c8ce349f210",
"/assets/assets/category_images/img_business.png": "63b7c6072839f73916463e88f348092f",
"/assets/assets/category_images/img_health.png": "7998cfaa77bb1802579fd6a833e6031f",
"/assets/assets/category_images/img_entertainment.png": "41544b487b5aed56a0d3c72c79ef34e3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
