module.exports = function(argv) {
  // Here we can add our app logic
  console.log("Look Ma! I can parse command line arguments!");
  argv.forEach(element => {
    console.log(` - ${element}`);
  });
};
