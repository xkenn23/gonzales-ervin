let secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let guessedNumber;

console.log("Welcome Player! Try to guess the secret number between 1 and 10.");

do {
  guessedNumber = parseInt(prompt("Enter your guess (between 1 and 10):"));
  attempts++;

  if (guessedNumber < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(
      "Congratulations! You guessed the correct number: ",
      secretNumber
    );
    console.log(`It took you ${attempts} attempts.`);
  }
} while (guessedNumber !== secretNumber);
