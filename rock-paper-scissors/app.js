//Variables
const computerDisplay = document.getElementById("computerDisplay");
const userDisplay = document.getElementById("userDisplay");
const resultDisplay = document.getElementById("winner");
const choices = document.querySelectorAll("button");
const container = document.querySelector(".bottom-container");
let userChoice;
let computerOutDisplay;

//event listener for play choices
choices.forEach((choice) => choice.addEventListener("click", play));

//main fuction
function play(e) {
  userChoice = e.target.id;
  userDisplay.innerHTML = userChoice;

  getComputerChoice();
  getWinner();
}

function getComputerChoice() {
  const gameArray = ["rock", "paper", "scissors"];
  const computerOutput = Math.floor(Math.random() * gameArray.length);
  computerOutDisplay = gameArray[computerOutput];
  computerDisplay.innerHTML = computerOutDisplay;
}

function getWinner() {
  let result;
  if (computerOutDisplay === userChoice) result = "draw!";
  if (computerOutDisplay === "rock" && userChoice === "scissors")
    result = "you lose!";
  if (computerOutDisplay === "rock" && userChoice === "paper")
    result = "you win!";
  if (computerOutDisplay === "scissors" && userChoice === "rock")
    result = "you win!";
  if (computerOutDisplay === "scissors" && userChoice === "paper")
    result = "you lose!";
  if (computerOutDisplay === "scissors" && userChoice === "rock")
    result = "you win!";
  if (computerOutDisplay === "paper" && userChoice === "rock")
    result = "you lose!";
  if (computerOutDisplay === "paper" && userChoice === "scissors")
    result = "you win!";

  if (result === "you lose!")
    resultDisplay.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--clr-red-light");
  else {
    resultDisplay.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--clr-green-light");
  }
  resultDisplay.innerHTML = result;
  container.classList.add("show-container");
}
