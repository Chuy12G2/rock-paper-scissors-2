let playerCount = 0;
let computerCount = 0;

const paragragh = document.querySelector('.para-inf');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const paraWinner = document.querySelector('.para-winner');
const buttons = document.querySelectorAll("button");
const buttonRock = buttons[0];
const buttonPaper = buttons[1];
const buttonScissors = buttons[2];

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let ramdomNumber = Math.floor(Math.random()*3);
    console.log("the computer chose: "+ choices[ramdomNumber]);
    return choices[ramdomNumber];

}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        paragragh.textContent = 'Tie';
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        paragragh.textContent = "You Lose! \nPaper beats rock";
        computerCount++;
        
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        paragragh.textContent = " You Lose! \nScissors beat paper";
        computerCount++;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        paragragh.textContent = "You Lose! Rock beats Scissors";
        computerCount++;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        paragragh.textContent = "You Win! Rock beats scissors";
        playerCount++;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        paragragh.textContent = " You Win! Paper beats Rock";
        playerCount++;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        paragragh.textContent = " You Win! Scissors beat Paper";
        playerCount++;
    }
}


buttonRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    updateScore();
    is5()
});

buttonPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    updateScore();
    is5();
});

buttonScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    updateScore();
    is5();
});


function updateScore(){
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
}

function is5(){
    
    if(computerCount == 5){
        paraWinner.textContent = 'You have lost';
    }

    else if (playerCount == 5){
        paraWinner.textContent = 'You have won';
    }
    
}