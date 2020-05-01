## Prerequisites

### Install `nvm`
This project requires the LTS version of Node. If you have another version installed, you can best manage them using Node Version Manager (nvm)

Read [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) section to add nvm to your machine

### Installing LTS Node version
Once you have `nvm` installed, you can installed the LTS version using the following command
```sh
nvm install --lts
```

The output may look like the following

```text
nvm install --lts
Installing latest LTS version.
Downloading and installing node v12.16.1...
Downloading https://nodejs.org/dist/v12.16.1/node-v12.16.1-darwin-x64.tar.xz...
############################################################################################################ 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v12.16.1 (npm v6.13.4)
```

**Note:** If your terminal is *not* using the `LTS` version of node, use the following command
```sh
nvm use stable
```
You should see an output similar to the following

```text
➜  nvm use stable
Now using node v12.16.2 (npm v6.14.4)
```

### Getting the project locally
```sh
git clone git@github.com:hhimanshu/web-push-notifications.git

cd web-push-notifications
```

### Installing dependencies
The dependency for entire project can be downloaded using the following command
```sh
npm install
```

### Start the Client App

Once installed, you can start the client app with the following command
```sh
npm start
```

This will start the client app at [localhost:9999](http://localhost:9999).

### Start the Server App
```sh
node server/app.js
```

### References
Use [Notification Generator](https://serviceworke.rs/push-get-payload_demo.html) demo to test the client notification subscription workflow  

[Customize the Notification `options` object](https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification#Syntax)

[API documentation of `Clients` interface](https://developer.mozilla.org/en-US/docs/Web/API/Clients)

[API documentation for `clients.openWindow`](https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow) 

[API documentation on `clients.matchAll`](https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll)

[API documentation for `PushManager.subscribe`](https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe)

[API documentation of Service Worker `getNotifications`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/getNotifications)   

[API documentation of Service Worker `showNotifications`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification)  


[API documentation of `ServiceWorkerRegistration`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration)  

[API Reference for `webPush.sendNotification`](https://github.com/web-push-libs/web-push#api-reference)

[Usage Example for FakerJS `helpers.createTransaction`](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html#helpers)  

[W3 Spec on Service Worker `event.waitUntil`](https://www.w3.org/TR/service-workers/#wait-until-method)  

[W3 Spec on Page Visibility](https://www.w3.org/TR/page-visibility/#dom-document-visibilitystate)  





