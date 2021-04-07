//3 packages required
const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

//Get usr input
const userInput = process.argv[2];
//Generate the languageCode from the user input using a method from franc package
const languageCode = franc(userInput);

//If language cannot be guessed
if (languageCode === "und") {
  console.log(
    "Couldn't figure out the language. Try with more sample text.".red
  );
}
//If we guess a language
else {
  const language = langs.where("3", languageCode);
  try {
    let lan = language.name;
    console.log(`Our best guess is ${lan}.`.green);
  } catch (e) {
    console.log(
      "Couldn't figure out the language. Try with more sample text.".red
    );
  }
}
