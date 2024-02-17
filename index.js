

function getComputerChoice(choices) {
  return choices [Math.floor(Math.random()*choices.length)];
}

const choices = ["rock", "paper", "scissors"];
// const rules = "rock" < "paper"; "rock" > "scissors"; "scissors" > "paper";
console.log(getComputerChoice(choices));



function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) { 
    return "its a tie, replay the round" }
  else if (computerSelection == "scissors") {
    return " Congrats mate! "}
  else (computerSelection == "paper"); {
    return "You lose :(" };
  
  
  }
    
  const playerSelection = "rock";
  const computerSelection = getComputerChoice(choices);
  console.log(playRound(playerSelection, computerSelection));
