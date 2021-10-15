const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error");
  }
};

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Wins";
    } else {
      return "Player Wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Wins";
    } else {
      return "Player Wins";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Wins";
    } else {
      return "Players Wins";
    }
  }
  if (userChoice === "bomb") {
    return "Player Wins";
  }
}

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
