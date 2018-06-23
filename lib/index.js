const { getToken } = require("./api");
module.exports = async function program(twitterKey, twitterSecret) {
  const token = await getToken(twitterKey, twitterSecret);
};
