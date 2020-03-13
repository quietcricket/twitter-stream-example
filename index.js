if (!process.env.API_KEY) require('dotenv').config();
const express = require('express')
const Twitter = require('twitter-lite')
const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('tweets.sqlite', err => console.log(err));
db.serialize(() => {
    db.run('CREATE TABLE tweet(id INTEGER PRIMARY KEY AUTOINCREMENT,tid,body)', (_, err) => {});
});


/**
 * Parameters for tracking
 * https://developer.twitter.com/en/docs/tweets/filter-realtime/guides/basic-stream-parameters
 * track: keywords
 * language: 'en'/'jp'
 * locations: geo fencing to city/country
 */
const parameters = {
    track: "#WFH"
};

async function initTwitter() {
    let client = new Twitter({
        consumer_key: process.env.API_KEY,
        consumer_secret: process.env.API_SECRET,
        access_token_key: process.env.USER_TOKEN,
        access_token_secret: process.env.USER_SECRET
    });
    const stream = client.stream("statuses/filter", parameters)
        .on("data", tweet => {
            db.serialize(() => {
                db.run('INSERT INTO tweet(tid,body) VALUES(?,?)', [tweet.id_str, JSON.stringify(tweet)]);
            });
        })
        .on("error", error => console.log("error", error))
        .on("end", response => console.log("end"));
}

try {
    initTwitter()
} catch (err) {
    console.error(err)
}

app = express()
    .get('/', (req, res) => {
        db.serialize(() => {
            db.get('select COUNT(id) as total from tweet', (err, row) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(row));
            });
        });
    })
module.exports = app;