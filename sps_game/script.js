let options = ['rock','paper','scissor']
let playerScore = 0
let computerScore = 0

function computerPlay(){
    let value = Math.floor(Math.random(options)*options.length)
    return options[value]
}

function playRound( playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "tie"
    }
    else if ( (playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissor" && computerSelection === "paper" ||
    playerSelection === "rock" && computerSelection === "scissor"))
    {   
        playerScore = playerScore + 1
        return `Player wins, ${playerSelection} beats ${computerSelection}`
    }
    else if ((computerSelection === "paper" && playerSelection === "rock" || 
    computerSelection === "scissor" && playerSelection === "paper" ||
    computerSelection === "rock" && playerSelection === "scissor")) {
        computerScore = computerScore+1
        return `Computer wins, ${computerSelection} beats ${playerSelection}`
    }

}

function game(){
    for(let i = 0;i < 5 ; i++ ){
        let playerSelection = prompt("Choose rock paper or scissor")
       playerSelection = playerSelection.toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection,computerSelection))
    }
    return `Your score is ${playerScore} and computer score is ${computerScore}`
}


console.log(game())




