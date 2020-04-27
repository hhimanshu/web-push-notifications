self.addEventListener('notificationclose', event => {
    console.log('notification closed', event)
})

self.addEventListener('notificationclick', event => {
    if (event.action === "search") {
        const githubUser = event.notification.data.githubUser;
        clients.openWindow(`https://github.com/${githubUser}`);
    } else if (event.action === "close") {
        clients.openWindow(`https://rebrand.ly/funny-dog`);
    }

    console.log('notification clicked', event)
})

self.addEventListener('push', event => {
    const data = event.data.text();
    const options = {
        body: data
    }

    event.waitUntil(
        self.registration.showNotification("Server Push", options)
    )
})