let playerCount = 0;
let computerCount = 0;


function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let ramdomNumber = Math.floor(Math.random()*3);
    console.log("the computer chose: "+ choices[ramdomNumber]);
    return choices[ramdomNumber];

}

//console.log(getComputerChoice());

function playerSelection(){
    let playerChoice = prompt("Type Rock, Paper or Scissors");
    return playerChoice.toLocaleLowerCase();

}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("Draw");
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log(" You Lose! Paper beats rock");
        computerCount++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log(" You Lose! Scissors beat paper");
        computerCount++;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log(" You Lose! Rock beats Scissors");
        computerCount++;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log(" You Win! Rock beats scissors");
        playerCount++;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log(" You Win! Paper beats Rock");
        playerCount++;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log(" You Win! Scissors beat Paper");
        playerCount++;
    }
}




function game(){
    for(i = 0; i < 5 ; i++){
        playRound(playerSelection(), getComputerChoice());
    }

    if(playerCount > computerCount){
        console.log("Player Wins the Game");
    }
    else if (playerCount < computerCount){
        console.log("Computer Wins the Game");
    }

    else{
        console.log("it's a draw");
    }
}

game();
