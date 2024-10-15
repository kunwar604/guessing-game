const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

// planning:
// game will ask user for number guess
// then will give response based off answer, there is only one right answer
// if guess is greater than answer it will respond with too big!
// if guess is lesser than answer it will respond with too small!
// if guess is the answer, it will respond with you win!
// make sure to convert input to number to make it work



function GuessingGame(useranswer, userguess) {
  const numberguess = Number(userguess);


if (numberguess === useranswer) {
  console.log("You win!");
readline.close();
return;
}

if (numberguess > useranswer) {
  console.log("too big!");
} 

else if (numberguess < useranswer) {
  console.log("too small!");
}

//Looks pretty good! Remember to use title case for the Variable names - Cesaria
}

readline.question('Set the correct answer', (useranswerInput) => {
const correctnumber = Number(useranswerInput)

startgame(correctnumber)

});

function startgame(correctnumber) {
  readline.question('guess a number or type "quit" to stop: ', (userguess) => {
//add a local variable that converts the guess to a number that is recieved as input to a constant value for use in this function, same think you did for the correctnumber variable above - Cesaria
    if (userguess === "quit") {
      console.log("you chose to quit the game");
      readline.close();
    } else {
      GuessingGame(correctnumber, userguess);
      startgame(correctnumber);
    }
  });
}
// looks pretty good overall!-Cesaria
