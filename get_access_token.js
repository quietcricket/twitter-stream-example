if (!process.env.API_KEY) require('dotenv').config();
const Twitter = require('twitter-lite')
const open = require('open')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function get_access_token(resp) {
    rl.question("Please enter the 7 digits code from Twitter: ", code => {
        let client = new Twitter({
            consumer_key: process.env.API_KEY,
            consumer_secret: process.env.API_SECRET,
        })
        client.getAccessToken({
            key: resp.oauth_token,
            secret: resp.oauth_token_secret,
            verifier: code.trim()
        }).then(r => {
            console.log("Access token generated successfully from @" + r.screen_name);
            console.log("ACCESS_TOKEN: " + r.oauth_token);
            console.log("ACCESS_TOKEN_SECRET: " + r.oauth_token_secret);
            rl.close();
        }).catch(err => {
            console.log('ERROR!!!' + err.message);
            getAccessToken(resp);
        })
    })

}
async function get_request_token() {
    let client = new Twitter({
        consumer_key: process.env.API_KEY,
        consumer_secret: process.env.API_SECRET,
    })
    let resp = await client.getRequestToken('oob');
    let url = 'https://api.twitter.com/oauth/authenticate?oauth_token=' + resp.oauth_token;
    console.log("Now opening Twitter for authentication: " + url)
    open(url);
    get_access_token(resp);
}
get_request_token();