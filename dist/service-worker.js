const addResourcesToCache = async (resources) => {
	const cache = await caches.open("v1");
	await cache.addAll(resources);
};
// google fonts urls
var resourcesToCacheLater = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		addResourcesToCache([
			"/",
			"/css/styles.css?v=1",
			"/js/script.js?v=1",
			"/img/hero.webp",
			"/img/hero-desk.webp",
			"/img/hero-tablet.webp",
			"/img/hero-mobile.webp",
			"/img/about.webp",
			"/img/about-desk.webp",
			"/img/about-tablet.webp",
			"/img/about-mobile.webp",
			"/img/africa.webp",
			"/img/africa-desk.webp",
			"/img/africa-tablet.webp",
			"/img/africa-mobile.webp",
			"/img/asia.webp",
			"/img/asia-desk.webp",
			"/img/asia-tablet.webp",
			"/img/asia-mobile.webp",
			"/img/europe.webp",
			"/img/europe-desk.webp",
			"/img/europe-tablet.webp",
			"/img/europe-mobile.webp",
			"/img/logo_mini.webp",
			"/img/logo_white.webp",
		])
	);
});

self.addEventListener("fetch", (event) => {
	var requestUrl = new URL(event.request.url);
	//cache google fonts
	if (resourcesToCacheLater.indexOf(requestUrl.host) >= 0) {
		cache.put(event.request, response.clone());
	}
	event.respondWith(caches.match(event.request));
});
