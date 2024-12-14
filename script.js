console.log("Welcome to the game!!");
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

let playGame = (Player)=>{
  let player = Player.toLowerCase();
  let computer = computerMove()
  if((player==='rock' && computer==='scissors')||(player==='scissors' && computer==='paper')||(player==='paper' && computer==='rock')){
    alert("Player wins");
  } else if ((player==='rock' && computer==='paper')||(player==='scissors' && computer==='rock')||(player==='paper' && computer==='scissors')){
    alert("Computer wins");
  } else if (player===computer){
    alert("Game Draw");
  } else {
    alert("Choose a valid move i.e rock, paper, scissors");
  }
}