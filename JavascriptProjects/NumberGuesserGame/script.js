let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(user, computer, secretTarget) {
  let uGuess = Math.abs(secretTarget - user);
  let cGuess = Math.abs(secretTarget - computer);
  if (uGuess <= cGuess) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
