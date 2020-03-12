if (!process.env.API_KEY) require('dotenv').config();
const express = require('express')
const Twitter = require('twitter-lite')
const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./db/tweets.db', err => console.log(err));

/**
 * Parameters for tracking
 * https://developer.twitter.com/en/docs/tweets/filter-realtime/guides/basic-stream-parameters
 * track: keywords
 * language: 'en'/'jp'
 * locations: geo fencing to city/country
 */

const parameters = {
  track: "#WFH",
  language:'en'
};

async function initTwitter() {
  let client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.USER_TOKEN,
    access_token_secret: process.env.USER_SECRET
  });
  const stream = client.stream("statuses/filter", parameters)
    .on("data", tweet => console.log("data", tweet))
    .on("error", error => console.log("error", error))
    .on("end", response => console.log("end"));
}

try {
  initTwitter()
} catch (err) {
  console.error(err)
}
/*
express()
  .get('/', (req, res) => res.render('pages/index'))
  .listen(process.env.PORT||5000, () => console.log(`Listening on ${ PORT }`))
  */