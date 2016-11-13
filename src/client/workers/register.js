
function registerWorker(filePath) {
  return navigator.serviceWorker.register(filePath)
    .then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch((err) => {
      console.error('ServiceWorker registration failed: ', err);
    });
}

registerWorker('/static/workers/geolocation.js');
