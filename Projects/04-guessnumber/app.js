const userInput = document.querySelector("#guessField");
const form = document.querySelector("form");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let maxGuesses = 10;
let previousGuesses = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const guess = Number(userInput.value);

  if (!guess || guess < 1 || guess > 100) {
    lowOrHi.textContent = "❌ Please enter a number between 1 and 100.";
    userInput.value = "";
    return;
  }

  previousGuesses.push(guess);
  guesses.textContent = previousGuesses.join(", ");

  if (guess === randomNumber) {
    lowOrHi.textContent = "🎉 Congratulations! You guessed it right!";
    endGame();
  } else if (guess < randomNumber) {
    lowOrHi.textContent = "📉 Too low! Try again.";
  } else {
    lowOrHi.textContent = "📈 Too high! Try again.";
  }

  guessCount++;
  lastResult.textContent = maxGuesses - (guessCount - 1);

  userInput.value = "";

  if (guessCount > maxGuesses) {
    lowOrHi.textContent = `💀 Game Over! The number was ${randomNumber}.`;
    endGame();
  }
});

function endGame() {
  userInput.disabled = true;
  document.querySelector("#subt").disabled = true;

  // Add restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Start New Game";
  document.querySelector("#wrapper").appendChild(restartBtn);

  restartBtn.addEventListener("click", function () {
    // Reset game state
    guessCount = 1;
    previousGuesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guesses.textContent = "";
    lastResult.textContent = maxGuesses;
    lowOrHi.textContent = "";

    userInput.disabled = false;
    document.querySelector("#subt").disabled = false;
    restartBtn.remove();
  });
}
