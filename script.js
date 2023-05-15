

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3) + 1;

    switch (result) {
        case 1:
            return ("rock");
            
        case 2:
            return ("papper");
            
        case 3:
            return ("scissors");  
              
        default:
            break;
    }
}


// It gets two parameters and play one round, returns a string with the winner//

const playerSelection = prompt("Rock, Papper or Scissors").toLowerCase();
const computerSelection = getComputerChoice()

function playRound (playerSelection, computerSelection) {

    // PLAYER //
    if (playerSelection === computerSelection) return "It's a Tie";
    if (playerSelection === "rock" && computerSelection === "scissors") return "You win! Rock beats Scissors"; 
    if (playerSelection === "papper" && computerSelection === "rock") return "You win! Papper beats Rock";   
    if (playerSelection === "scissors" && computerSelection === "papper") return "You win! Scissors beats Papper";

    // CPU //
    if (computerSelection === "rock" && playerSelection === "scissors") return "You Lose! Rock beats Scissors";
    if (computerSelection === "papper" && playerSelection === "rock") return "You Lose! Papper beats Rock";
    if (computerSelection === "scissors" && playerSelection === "papper") return "You Lose! Scissors beats Papper";
}

console.log(playRound(playerSelection, computerSelection));

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.//

// score++//

function game () {
    let playerScore = 0;
    let cpuScore = 0;

    while (playerScore != 5 || cpuScore != 5) {
        playRound();
    }

    if (playerScore === 5) return "You Wins";
    if (cpuScore === 5) return "AI wins";
}

