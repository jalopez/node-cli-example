const chalk = require("chalk");
const emoji = require("node-emoji");
const urlRegex = require("url-regex");
const program = require("../index");

function format(text) {
  return text
    .replace(urlRegex(), a => chalk.underline(a))
    .replace(/(@.+?)[\s]/, (_, b) => `${chalk.hex("#326ada")(b)} `)
    .replace(/(#.+?)[\s]/, (_, b) => `${chalk.hex("#433e90")(b)} `);
}

module.exports = {
  command: "timeline [twitterAccount]",
  aliases: ["$0"],
  describe: "Get the timeline of a given user",
  builder(yargs) {
    return yargs.option("count", {
      alias: "c",
      describe: "Number of twitts to return",
      default: 5
    });
  },
  async handler(argv) {

    const result = await program(argv.twitterAccount, argv);
    result.forEach(({ text, retweet_count }) => {
      console.log(
        `- ${format(text)} ${emoji.get("zap")} ${chalk.green(retweet_count)}`
      );
    });
  }
};
