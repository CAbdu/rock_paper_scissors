function playRound(userInput, computerInput) {
if (userInput.toLowerCase()=="rock" && computerInput=="scissors" || userInput.toLowerCase()=="paper" && computerInput=="rock" || userInput.toLowerCase()=="scissors" && computerInput=="paper"){
   scoreUser++;
  return win;
}
else if (userInput.toLowerCase()=="rock" && computerInput=="paper" || userInput.toLowerCase()=="scissors" && computerInput=="rock" || userInput.toLowerCase()=="paper" && computerInput=="scissors"){
  scoreComputer++;
  return lose;
}
  else if (userInput.toLowerCase() == computerInput){
 tieScore++;
  return tie;
} //if player input rock compare to rock, its a tie
else {
  return "you must input rock, paper or scissors";

} //else if player input paper compare to rock, you win
}



let scoreUser = 0;
let scoreComputer = 0;
let tieScore = 0;

const win = "You win this round!"
const lose = "You lose this round!"
const tie = "This round is a tie!"


  function game() {
    
    for (let i = 0; i <3 ; i++){
    const userInput = prompt("Do you choose rock, paper or scissors?");
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}
choices = ["rock", "paper", "scissors"];
let computerInput = choices[Math.floor(Math.random()*choices.length)];
console.log("Computer chose" + ` ${computerInput}`);

    console.log(playRound(userInput,computerInput));
}
    
if (scoreUser>scoreComputer){
  return "You Win this game.\n -------";
}
  if (scoreUser==scoreComputer){
    return "This game is a tie.\n -------";
  }
 else{
  return "You Lose this game.\n -------";
}
 
}
  
      console.log(game());
      console.log( "Your final score is " +scoreUser +" wins " +scoreComputer+" loses and " +tieScore +" draws.\n -------");
      score=scoreUser+scoreComputer+tieScore;

      console.log("You played this game " +score +" times.\n -------\nGame over.");
