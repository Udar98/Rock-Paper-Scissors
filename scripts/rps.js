let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

showScore();

function playGame(playerMove){
const computerChoice = pickComputerChoice();

let result = '';
if(playerMove === 'scissors'){
  if(computerChoice === 'rock'){
    result = `<span style = "color: red">Computer wins!</span>`;
  }else if(computerChoice === 'paper'){
    result = `<span style = "color: green">You win!</span>`;
  }else if(computerChoice === 'scissors'){
    result = 'Tie!';
  }

}else if(playerMove === 'paper'){
  if(computerChoice === 'rock'){
    result = `<span style = "color: green">You win!</span>`;
  }else if(computerChoice === 'paper'){
    result = 'Tie!';
  }else if(computerChoice === 'scissors'){
    result = `<span style = "color: red">Computer wins!</span>`;
  }
  
}else if(playerMove === 'rock'){
  if(computerChoice === 'rock'){
    result = 'Tie!';
  }else if(computerChoice === 'paper'){
    result = `<span style = "color: red">Computer wins!</span>`;
  }else if(computerChoice === 'scissors'){
    result = `<span style = "color: green">You win!</span>`;
  } 
}
 


if(result === `<span style = "color: green">You win!</span>`){
  score.wins += 1;
} else if(result === `<span style = "color: red">Computer wins!</span>`){
  score.losses += 1;
} else if( result === 'Tie!'){
  score.ties += 1;
}


localStorage.setItem('score', JSON.stringify(score));

showScore();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You  
<img src="images/${playerMove}.png" class = "moves-icon-moves">
<img src ="images/${computerChoice}.png" class = "moves-icon-moves">
Computer `;

}

function pickComputerChoice(){
const randomNumber = Math.random();

let computerChoice = '';

if(randomNumber >= 0 && randomNumber < 1/3){
  computerChoice ='rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerChoice ='paper';
} else if(randomNumber >= 2/3 && randomNumber< 1){
  computerChoice ='scissors';
}

return computerChoice;
}




function showScore(){
document.querySelector('.js-score')
.innerHTML = `<span style ="color: green">Wins: ${score.wins}</span>,
<span style ="color: red "> Losses: ${score.losses}</span>, Ties: ${score.ties}`;
}

