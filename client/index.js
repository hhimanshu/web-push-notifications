const client = (() => {
    let serviceWorkerRegObj = undefined;

    const checkNotificationSupport = () => {
        if(!('Notification' in window)) {
            return Promise.reject("The browser doesn't support notifications.")
        }
        console.log("The browser support Notifications!")
        return Promise.resolve("Ok!")
    }

    const registerServiceWorker = () => {
        if(!('serviceWorker') in navigator) {
            return Promise.reject("ServiceWorker support is not available.")
        }

        return navigator.serviceWorker.register('service-worker.js')
        .then(regObj => {
            console.log("service worker is registered successfully!");
            serviceWorkerRegObj = regObj;
        })
    }

    const requestNotificationPermissions = () => {
        return Notification.requestPermission(status => {
            console.log("Notification Permission Status:", status);
        })
    }

    checkNotificationSupport()
        .then(registerServiceWorker)
        .then(requestNotificationPermissions)
        .catch(err => console.error(err))
})()