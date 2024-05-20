function playRound(userInput, computerInput) {
  userInput = userInput.toLowerCase(); 

  if ((userInput == "rock" && computerInput == "scissors") ||
      (userInput == "paper" && computerInput == "rock") ||
      (userInput == "scissors" && computerInput == "paper")) {
    scoreUser++;
    return "You win!";
    
  } else if ((userInput == "rock" && computerInput == "paper") ||
             (userInput == "scissors" && computerInput == "rock") ||
             (userInput == "paper" && computerInput == "scissors")) {
    scoreComputer++;
    return "You lose!";

  } else (userInput == computerInput);
    tieScore++;
    return "It's a tie!";

  
}

function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let scoreUser = 0;
let scoreComputer = 0;
let tieScore = 0;
const winningScore = 5;

function updateScores() {
  document.getElementById('userScore').textContent = scoreUser;
  document.getElementById('computerScore').textContent = scoreComputer;
  document.getElementById('tieScore').textContent = tieScore;
}

function handleButtonClick(event) {
  const userInput = event.target.textContent.toLowerCase();
  const computerInput = getRandomChoice();
  const result = playRound(userInput, computerInput);
  document.getElementById('result').textContent = `You chose: ${userInput}, Computer chose: ${computerInput}. ${result}`;
  updateScores();
  checkForWinner();
}
document.getElementById('rockButton').addEventListener('click', handleButtonClick);
document.getElementById('paperButton').addEventListener('click', handleButtonClick);
document.getElementById('scissorsButton').addEventListener('click', handleButtonClick);



function checkForWinner() {
  if (scoreUser >= winningScore) {
    alert("Congratulations! You are the winner!");
    resetGame();
  } else if (scoreComputer >= winningScore) {
    alert("Sorry, the computer wins this time.");
    resetGame();
  }
}

function resetGame() {
  scoreUser = 0;
  scoreComputer = 0;
  tieScore = 0;
  updateScores();
}


  