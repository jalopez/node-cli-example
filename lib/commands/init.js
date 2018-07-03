const inquirer = require("inquirer");
const path = require("path");
const os = require("os");
const fs = require("fs");

module.exports = {
  command: "init",
  aliases: [],
  describe: "Init the config file",
  async handler({ key: configKey, secret: configSecret }) {
    let key = configKey;
    let secret = configSecret;
    if (!key || !secret) {
      const result = await inquirer.prompt([
        {
          name: "key",
          message: "Twitter API key",
          validate: text => text.length > 0
        },
        {
          name: "secret",
          message: "Twitter API secret",
          validate: text => text.length > 0
        }
      ]);
      key = result.key;
      secret = result.secret;
    }
    const config = {
      key,
      secret
    };
    console.log(`The following config: ${JSON.stringify(config)}`);
    console.log("Will be stored in ~/.twitterrc");
    const { confirm } = await inquirer.prompt([
      {
        name: "confirm",
        message: "Are you sure?",
        type: "confirm",
        default: true
      }
    ]);

    if (confirm) {
      fs.writeFileSync(
        path.join(os.homedir(), ".twitterrc"),
        JSON.stringify(config, null, 2)
      );
    }
  }
};
