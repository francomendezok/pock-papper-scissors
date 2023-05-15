function game () {
    var playerScore = 0;
    var cpuScore = 0;

    while (playerScore <= 5 || cpuScore <= 5) {
        // Add event listener when i select an image//
        const playerSelection = algo;
        const computerSelection = getComputerChoice()
        let round = playRound(playerSelection, computerSelection);

        if (round.includes("Win!")) playerScore++;
        if (round.includes("Lose!")) cpuScore++;

        console.log(round);
        console.log("Score:" + playerScore + " - " + cpuScore);
        if (playerScore === 5) {
            console.log("You Wins");
            return;
        }
        if (cpuScore === 5) {
            console.log("AI wins");
            return;
        }
    }

}


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

function playRound (playerSelection, computerSelection) {
    // PLAYER //
    if (playerSelection === computerSelection) return "It's a Tie";
    if (playerSelection === "rock" && computerSelection === "scissors") return "You Win! Rock beats Scissors"; 
    if (playerSelection === "papper" && computerSelection === "rock") return "You Win! Papper beats Rock";  
    if (playerSelection === "scissors" && computerSelection === "papper") return "You Win! Scissors beats Papper";

    // CPU //
    if (computerSelection === "rock" && playerSelection === "scissors") return "You Lose! Rock beats Scissors";
    if (computerSelection === "papper" && playerSelection === "rock") return "You Lose! Papper beats Rock";
    if (computerSelection === "scissors" && playerSelection === "papper") return "You Lose! Scissors beats Papper";
}


game();


