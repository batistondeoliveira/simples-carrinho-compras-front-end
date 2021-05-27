/* eslint-disable */

var CACHE_NAME = 'mystore_cg_ms_2021_05_27_13_17';

var filesToCache = [                                       
    //arquivos css                
    'css/app.css',    

    //arquivos img
    'img/logo.png'    
];

self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] Install');

    self.skipWaiting();    

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener('activate', function activator(event) {
    console.log('[ServiceWorker] Activate');

    event.waitUntil(
        caches.keys().then(function (keyList) {                
            return Promise.all(keyList.map(function (key) { 
                if(key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);

                    return caches.delete(key); 
                }
            }));
        })                    
    );
});

self.addEventListener('fetch', function (event) {     
    console.log('[ServiceWorker] Fetch');

    // We only want to call event.respondWith() if this is a GET request for an HTML document.
    if (event.request.method === 'GET') {        
        event.respondWith(
            fetch(event.request).catch(function(e) {
                //console.error('Fetch failed; returning offline page instead.', e);
                return caches.open(filesToCache).then(function(cache) {
                    return cache.match(event.request);
                });
            })
        );
    }
});
