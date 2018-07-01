const { getToken, getTimeline } = require("./api");
module.exports = async function program(screenName, { key, secret }) {
  const token = await getToken(key, secret);
  return await getTimeline(token, screenName);
};
