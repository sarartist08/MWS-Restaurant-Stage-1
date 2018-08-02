let chacheName ='v4';
let chachFiles = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./js/main.js',
	'./js/restaurant_info.js',
	'./js/dbhelper.js',
	'./data/resturants.json',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg'
];

self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			cache.addAll(cacheFiles);
		})
	)
})

self.addEventListener('activate', function(e){
	e.waitUnil(
		caches.keys().then(function(cacheNames){
			return Promise.all(cacheNames.map(function(currintCacheName){
				if (currentCacheName !== cacheName) {
					caches.delete(currentCacheName);
				}
			}))
		})
	)
})

self.addEventListener('fetch', function(e){
	e.respondWith(

		caches.open(chaceName).then(cache => {
			return cache.match(e.request).then(response => {
				return (
					respone ||
					fetch(e.request).then(response => {
						cache.put(e.request, response.clone());
						return response;
					})
					.catch(fanction (err){
						console.log('[ServiceWorker]Error fetching and caching',err);
					})
				);
			});
		})
	);
})