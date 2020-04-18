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

### Getting the project locally
```sh
git clone git@github.com:hhimanshu/web-push-notifications.git

cd web-push-notifications
```

### Start the Client App
Install the dependencies
```sh
npm install
```

Once installed, you can start the client app with the following command
```sh
npm start
```

This will start the client app at [localhost:9999](http://localhost:9999).