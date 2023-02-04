const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WIN = "Player wins !";
const COMPUTER_WIN = "computer wins !";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    ` ${ROCK}, ${PAPER} Or ${SCISSORS} ?  `,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invaild Choice! We chose ${DEFAULT_USER_CHOICE} for you! `);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const printPlayerAndComputerChoices = function (pChoice, cChoice) {
  console.log(`Computer choice is : ${cChoice}`);
  console.log(`Player choice is : ${pChoice}`);
};

const getWinner = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    printPlayerAndComputerChoices(pChoice, cChoice);
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === ROCK)
  ) {
    printPlayerAndComputerChoices(pChoice, cChoice);
    return COMPUTER_WIN;
  } else if (
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    printPlayerAndComputerChoices(pChoice, cChoice);
    return PLAYER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const finalResult = getWinner(playerSelection, computerChoice);
  console.log(finalResult);
  alert(finalResult);
  console.log("Game ended ...");
  gameIsRunning = false;
  if (!gameIsRunning) {
    console.log(" \n -------------------------- \n");
  }
});
