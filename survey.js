const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = [];

const askQuestion = function(index) {
  if (index >= questions.length) {
    console.log(`${answers[0]}'s Profile:`);
    console.log(`Likes: ${answers[1]}`);
    console.log(`Listens to: ${answers[2]}`);
    console.log(`Favourite meal time: ${answers[3]}`);
    console.log(`Favourite food for ${answers[3]}: ${answers[4]}`);
    console.log(`Favorite sport: ${answers[5]}`);
    console.log(`Superpower: ${answers[6]}`);
    rl.close();
    return;
  }
  rl.question(questions[index], (answer)=>{
    answers.push(answer);
    // we use recursion because a loop (eg. while) works synchronously
    // which makes it incompatible with the async way we are asking questions
    askQuestion(index + 1);
  });
};

askQuestion(0);

