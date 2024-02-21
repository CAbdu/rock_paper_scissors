// let playerSelection = prompt("choose between rock, paper or scissors?") 
//     if (playerSelection == "rock", "paper", "scissors") {
//     alert (`you pick ${playerSelection} !`);
//   } else (
//     alert (`${playerSelection} is not a valid pick:s`)
//   )


const choices = ["rock", "paper", "scissors"];

function getComputerChoice() { 
  return choices [Math.floor(Math.random()*choices.length)];
 
}

console.log(getComputerChoice(choices));


function playRound (playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return " Congrats mate! ";
  } else if ( playerSelection === "rock" && computerSelection === "paper"){
    return "you lose !";
  } else if ( playerSelection === "scissors" && computerSelection === "paper"){
    return " Wp mate ! ";
  } else if ( playerSelection === "scissors" && computerSelection === "rock"){
      return "you lose ! ";
  } else if ( playerSelection === "paper" && computerSelection === "rock"){
      return "GG ! ";
  } else if ( playerSelection === "paper" && computerSelection === "scissors"){
      return "you lose ! ";
  } else if ( playerSelection === computerSelection) {
    return "It's a draw";
  }  
}
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt(
        "Enter rock, paper or scissors"
      );
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  game();