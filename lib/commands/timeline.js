const program = require("../index");

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
      console.log(`- ${text} (${retweet_count})`);
    });
  }
};
