function game () {
    var playerScore = 0;
    var cpuScore = 0;
    var playerSelection;
    var computerSelection;
               // Add event listener when I select an image//
       const options = document.querySelectorAll(".option");
       const live = document.querySelector(".liveScore");
       const button = document.querySelector("#playAgain");

       options.forEach(option => option.addEventListener ("click", handleClick));  
       button.addEventListener ("click", function () {
        playerScore = 0;
        cpuScore = 0;
        button.style.display = 'none';
        live.textContent = "";
        options.forEach(option => option.addEventListener ("click", handleClick));  
       })      

       function handleClick (event) {
        playerSelection = event.target.id;
        computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);
        if (result.includes("Win!")) playerScore++;
        if (result.includes("Lose!")) cpuScore++;
        
        live.textContent = result + "Score:" + playerScore + " - " + cpuScore;

        if (playerScore === 5) {
            live.textContent = "You Wins";
            button.style.display = 'block';
            options.forEach(option => option.removeEventListener ("click", handleClick));  
            return;
        }
        if (cpuScore === 5) {
            live.textContent = "You Lose";
            button.style.display = 'block';
            options.forEach(option => option.removeEventListener ("click", handleClick));  
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
    if (playerSelection ===  "rock" && computerSelection === "scissors") return "You Win! Rock beats Scissors"; 
    if (playerSelection ===  "papper" && computerSelection === "rock") return "You Win! Papper beats Rock";  
    if (playerSelection ===  "scissors" && computerSelection === "papper") return "You Win! Scissors beats Papper";

    // CPU //
    if (computerSelection === "rock" && playerSelection ===  "scissors") return "You Lose! Rock beats Scissors";
    if (computerSelection === "papper" && playerSelection ===  "rock") return "You Lose! Papper beats Rock";
    if (computerSelection === "scissors" && playerSelection ===  "papper") return "You Lose! Scissors beats Papper";
}

game();


