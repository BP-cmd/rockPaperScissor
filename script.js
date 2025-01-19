alert("Welcome to the game!!");

const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score')
const result = document.querySelector('.results');
let playing = true;

const stats = {
  computer: 0,
  player: 0,
  draws: 0,
  matches: 0
};

buttons.forEach((button) => button.addEventListener('click', (event)=>{
  playGame(event.target.innerText);
}));

let randomNum = ()=>{
  return Math.floor(Math.random()*100)%3;
};

let computerMove = ()=>{
  switch(randomNum()){
    case 0: return "rock";
    case 1: return "scissors";
    case 2: return "paper";
  }
};

let playGame = (Player)=>{
  if(!playing){
    alert("Please reset the game by clicking the reset button !!");
    return;
  }
  let player = Player.toLowerCase();
  let computer = computerMove()
  if((player==='rock' && computer==='scissors')||(player==='scissors' && computer==='paper')||(player==='paper' && computer==='rock')){
    result.style.color = "green";
    result.innerText = "Player Won";
    stats.player++;
  } else if ((player==='rock' && computer==='paper')||(player==='scissors' && computer==='rock')||(player==='paper' && computer==='scissors')){
    result.style.color = "red";
    result.innerText = "Computer Won!!";
    stats.computer++;
  } else if (player===computer){
    result.style.color = "yellow";
    result.innerText = "It's a Draw";
    stats.draws++;
  }

  stats.matches++;
  score.innerText = `Score: 
    Player: ${stats.player} | Computer: ${stats.computer} | Draws: ${stats.draws}`;
  if(stats.computer === 5 || stats.player === 5) gameResult();
}

function gameResult(){
  result.setAttribute("style", "background-color: orange; color: blue;");
  if(stats.computer<stats.player){
    result.innerText="Player Won the Game";
  } else if(stats.computer>stats.player){
    result.innerText ="Computer Won the gome";
  }
  playing = false;
  const resetBtn = document.createElement('button');
  resetBtn.innerText = "Reset";
  document.querySelector('body').appendChild(resetBtn);
  resetBtn.addEventListener('click',()=>{
      for( key in stats){
        stats[key] = 0;
      }
      score.innerText = "";
      result.innerText = "";
      result.style.backgroundColor = "transparent";
      playing = true;
      resetBtn.parentNode.removeChild(resetBtn);
    }
  )
}

