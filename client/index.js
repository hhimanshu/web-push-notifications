const client = (() => {

    const checkNotificationSupport = () => {
        return Promise.reject("notification support not checked.")
    }

    const registerServiceWorker = () => {
        return Promise.reject("service worker not registerd yet")
    }

    checkNotificationSupport()
        .then(registerServiceWorker)
        .catch(err => console.error(err))
})()