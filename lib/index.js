const { getToken, getTimeline } = require("./api");
module.exports = async function program(twitterKey, twitterSecret, screenName) {
  const token = await getToken(twitterKey, twitterSecret);
  return await getTimeline(token, screenName);
};
