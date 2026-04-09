self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("meu-app").then(function(cache) {
      return cache.addAll([
        "index.html"
      ]);
    })
  );
});