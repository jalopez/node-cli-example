const request = require("request-promise");

const API_URL = "https://api.twitter.com";

// Authenticate on twitter:
// https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
async function getToken(key, secret) {
  const credentials = Buffer.from(`${key}:${secret}`).toString("base64");
  return request
    .post({
      uri: `${API_URL}/oauth2/token`,
      json: true,
      headers: {
        Authorization: `Basic ${credentials}`,
        "User-Agent": "My twitter node CLI",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: "grant_type=client_credentials"
    })
    .then(({ access_token }) => access_token);
}

// https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
async function getTimeline(token, screenName, count = 5) {
  return request
    .get({
      uri: `${API_URL}/1.1/statuses/user_timeline.json`,
      qs: {
        screen_name: screenName,
        exclude_replies: true,
        count
      },
      json: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(result =>
      result.map(({ text, retweet_count }) => ({ text, retweet_count }))
    );
}

module.exports = {
  getToken,
  getTimeline
};
