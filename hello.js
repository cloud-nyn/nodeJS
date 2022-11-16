const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name? \n", (name) => {
  console.log(`Welcome ${name}`);
  readline.question("How old are you? \n", (age) => {
    if (age < 16) {
      console.log("You're not allowed to drive in Iowa");
    } else {
      console.log("Awesome welcome to the adults club");
    }
    readline.close();
  });
});
