# Twitter Stream API Example using Heroku

Base on Heroku's "node-js-gettings-started" example. Please refer to the original article for instructions on how to install Heroku, nodejs etc: [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

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
$ git clone https://github.com/quietcricket/twitter-stream-heroku
$ cd twitter-stream-heroku
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Notice 
Heroku doesn't persist files. When you re-deploy, `tweets.sqlite' will be lost.

## Deploying to Heroku
```
$ heroku create
$ git push heroku master
$ heroku open
```