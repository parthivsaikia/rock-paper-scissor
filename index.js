let moves = ['ROCK','PAPER','SCISSOR'];

//give the computer a random choice.

function getComputerSelection(){
    
    let computerSelection =  moves[(Math.floor(Math.random()*3))];
    return computerSelection;
    
}

function getPlayerSelection(){
    let playerSelection = prompt("Rock,Paper or Scissor").toUpperCase();
    return playerSelection;
}

function playRound(computerSelection,playerSelection){

    if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log(`You lost ${computerSelection} beats ${playerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore -= 1;
        computerScore += 1;
    }else if(playerSelection === "ROCK" && computerSelection === "SCISSOR"){
        console.log(`You won ${playerSelection} beats ${computerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore += 1;
        computerScore -= 1;
    }else if(playerSelection === "PAPER" && computerSelection === "SCISSOR"){
        console.log(`You lost ${computerSelection} beats ${playerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore -= 1;
        computerScore += 1;
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log(`You won ${playerSelection} beats ${computerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore += 1;
        computerScore -= 1;
    }else if(playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        console.log(`You won ${playerSelection} beats ${computerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore += 1;
        computerScore -= 1;
    }else if(playerSelection === "SCISSOR" && computerSelection === "ROCK"){
        console.log(`You lost ${computerSelection} beats ${playerSelection}. Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        playerScore -= 1;
        computerScore += 1;
    }else{
        console.log(`It's a tie.Computer's choice was ${computerSelection} and your choice was ${playerSelection}`);
        
    }
    

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    getComputerSelection();
    // getPlayerSelection();
    playRound(getComputerSelection(),getPlayerSelection());
    playRound(getComputerSelection(),getPlayerSelection());
    playRound(getComputerSelection(),getPlayerSelection());
    playRound(getComputerSelection(),getPlayerSelection());
    playRound(getComputerSelection(),getPlayerSelection());
    
    if(playerScore > computerScore){
        console.log(`Your Score is ${playerScore} and computer's score is ${computerScore}.`);
    }else if(playerScore < computerScore){
        console.log(`Your Score is ${playerScore} and computer's score is ${computerScore}.`)
    }else{
        console.log(`Your Score is ${playerScore} and computer's score is ${computerScore}.`)
    }
}