const request = require("request-promise");

const API_URL = "https://api.twitter.com";

// Authenticate on twitter:
// https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
module.exports = async function getToken(key, secret) {
  const credentials = Buffer.from(`${key}:${secret}`).toString("base64");
  return request.post({
    uri: `${API_URL}/oauth2/token`,
    headers: {
      Authorization: `Basic ${credentials}`,
      "User-Agent": "My twitter node CLI",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials"
  });
};
