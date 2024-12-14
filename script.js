alert("Welcome to the game!!");
let userChoice
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
    stats.player++;
  } else if ((player==='rock' && computer==='paper')||(player==='scissors' && computer==='rock')||(player==='paper' && computer==='scissors')){
    alert("Computer wins");
    stats.computer++;
  } else if (player===computer){
    alert("Game Draw");
    stats.draws++;
  } else {
    alert("Choose a valid move i.e rock, paper, scissors");
    return;
  }
  stats.matches++;
  console.log(stats);
}
//object to store the score and track the game
const stats = {
  computer: 0,
  player: 0,
  draws: 0,
  matches: 0
}
//function to display final game result
function gameResult(){
  let result;
  if(stats.computer<stats.player){
    result="Player Won the Game";
  } else if(stats.computer>stats.player){
    result="Computer Won the gome";
  } else {
    result = "Game tied";
  }
  alert(`GAME OVER !!\nPlayer score: ${stats.player}\nComputer Score: ${stats.computer}\nMatch Tied: ${stats.draws}\n${result}`)
}

while(stats.matches<5){
  userChoice  = prompt("Choose your move -- rock/paper/scissors ?", null);
  if(!userChoice)continue;
  playGame(userChoice);
}
gameResult();
