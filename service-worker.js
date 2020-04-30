self.addEventListener('notificationclose', event => {
    console.log('notification closed', event)
})

self.addEventListener('notificationclick', event => {
    if (event.action === "search") {
        const githubUser = event.notification.data.githubUser;
        clients.openWindow(`https://github.com/${githubUser}`);
    } else if (event.action === "close") {
        clients.openWindow(`https://rebrand.ly/funny-dog`);
    } else if (event.action === "") {
        event.waitUntil(
            clients.matchAll().then(cs => {
                const client = cs.find(c => c.visibilityState === "visible")
                if (client !== undefined) {
                    // when the tab is open and visible
                    client.navigate('/hello.html');
                } else {
                    // when there is no tab opened
                    clients.openWindow('/hello.html')
                }
            })
        )
    }

    console.log('notification clicked', event)

    self.registration.getNotifications()
        .then(ns => ns.forEach(n => n.close()))
})

self.addEventListener('push', event => {
    const transaction = JSON.parse(event.data.text());
    const options = {
        body: transaction.business
    }

    const transactionType = transaction.type === "deposit" ? '+' : '-';

    event.waitUntil(
        clients.matchAll()
        .then(cs => {
            if (cs.length === 0) {
                self.registration.showNotification(`${transactionType} ` + transaction.amount, options)
            } else {
                cs[0].postMessage(transaction)
            }
        })
    )
})