// let playerSelection = prompt("choose between rock, paper or scissors?") 
//     if (playerSelection == "rock", "paper", "scissors") {
//     alert (`you pick ${playerSelection} !`);
//   } else (
//     alert (`${playerSelection} is not a valid pick:s`)
//   )


const playerChoices = ["rock", "paper", "scissors"];
const computerChoices = ["rock", "paper", "scissors"];

function getPlayerChoice() { 
  return playerChoices [Math.floor(Math.random()*playerChoices.length)];
 
}
let playerSelection = getPlayerChoice();
console.log(playerSelection);

function getComputerChoice() { 
  return computerChoices [Math.floor(Math.random()*computerChoices.length)];
 
}
let computerSelection = getComputerChoice();
console.log(computerSelection);



function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("it's a tie");
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("Computer won")
    } else {
      console.log("Player won")
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer won")
    } else {
      console.log("Player won")
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("Computer won")
    } else {
      console.log("Player won")
    }
  }
}


// function playerSelection(){
// let ask = prompt("Enter rock, paper or scissors");
// let string1 = ["rock" || "paper" || "scissors"];  
// let string2 = ["ROCK","Rock" || "PAPER", "Paper" || "SCISSORS", "Scissors"];
// let areEqual = string1.localeCompare(string2, undefined, {
//   sensitivity: 'base'
// });
// console.log(ask);
// console.log(areEqual);

// }
// function playerSelection(choices) {
//   let input = prompt("Enter rock, paper or scissors");
//   let cInput = input.toLowerCase();
//   if (input () === cInput()) {
//     console.log(cInput);
//   } else {
//     console.log('you are not playing by the rules..');
//   } 
//   // console.log(cInput);
// }


  function game() {
    for (let i = 0; i < 5; i++) {
      // let playerSelection = choices;
      // let playerGuess = prompt("choose rock, paper or scissors");
      // if (playerGuess == playerSelection) {
      //   console.log(playerSelection)
      // }
      // else {console.log("not a correct answer")}
      
      console.log(getPlayerChoice());
      console.log(getComputerChoice());
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  game();