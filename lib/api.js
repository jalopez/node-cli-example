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

async function getTimeline(token, screenName) {
  return request.get({
    uri: `${API_URL}/1.1/statuses/user_timeline.json`,
    qs: {
      screen_name: screenName
    },
    json: true,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

module.exports = {
  getToken,
  getTimeline
};
