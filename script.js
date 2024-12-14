console.log("Welcome to the game!!")
// let userChoice = prompt("Choose your move -- rock/paper/scissors ?", null)

//function to create random number between 0,1,2 each time it's called
let randomNum = ()=>{
  return Math.floor(Math.random()*100)%3;
};
//function evaluate get computer move
let computerMove = ()=>{
  switch(randomNum()){
    case 0: return "rock";
    case 1: return "scissors";
    case 2: return "paper";
  }
};
