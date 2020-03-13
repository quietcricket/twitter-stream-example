# Twitter Stream API Example 
Base on Heroku's "node-js-gettings-started" example. Please refer to the original article for instructions on how to install Heroku, nodejs etc: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## UPDATE
It's a bad idea to user Heroku. There is no persistant storage. Every new deployment will lose the database.
Ended up using AWS lightsail

# API token and secrets
The API token and secret are read from .env file
It should look like this. You can obtain them in Twitter developer app portal
```
API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx
API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxx
USER_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxx
USER_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Running Locally

```sh
$ git clone https://github.com/quietcricket/twitter-stream-example
$ cd twitter-stream-example
$ npm install
$ npm run start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).