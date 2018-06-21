const getToken = require("./api");
module.exports = async function program() {
  const token = await getToken(process.argv[2], process.argv[3]);
  console.log(token);
};
