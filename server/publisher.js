const webPush = require('web-push');
const faker = require('faker');

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cgpM2kf-o9I:APA91bGsFxoaA-YvOzeMUtmn3BIiWotLkpU3cwZNXOOBNGUJ9e1U6IIHd-oLnsgxFnW2GH6UnBeiXflxPUXmkBl_kk_vkL-oUHMFAOEwKUUsA4Zr9x8x6G9Weu9OnGIW94lJw5YEHYDc",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCUxEO-k-xwq8TzNYrvVbvMGjJS2tEQWfZCt6pvbN1OznFSxdTbFCGOgcNfpVWo2imU8ybRamYKz5xVUCJs43do",
        "auth": "JutsLAPMx6UcqHQrRkm6JQ"
    }
}

const vapidPublicKey = 'BBjDHF8cFoJznds83RrbZByg-UQCxWTNb9afVNjxjbpIsj2CaJyKDrndm9GwHk9Tbargfzt83gYprv9kl1OvIEU';
const vapidPrivateKey = 'j1bKaA0HcYpB58PW3Ho2wg2WcK7raVplzN7zGo3Pnfw';

const options = {
    TTL: 60,
    vapidDetails: {
        subject: 'mailto: pushers@pushy.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

const notify = () => {
    const transaction = faker.helpers.createTransaction()
    webPush.sendNotification(
            pushSubscription,
            JSON.stringify(transaction),
            options
        )
        .then(() => console.log(`subscribers notified.`))
        .catch(error => console.error('Error in pushing notification', error))
}

notify()