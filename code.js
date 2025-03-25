let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;

// get the player choice and compare it with the computer choice
const buttons = document.querySelectorAll("button");
const playerLastChoice = document.getElementById("playerLastChoice");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        playerLastChoice.innerHTML = button.innerHTML;
    }); 
});


// randomly generate the computer choice
const computerLastChoice = document.getElementById("computerLastChoice");

function getComputerChoice() {  
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            computerLastChoice.innerHTML = "✊";
            break;
        case 1:
            computerChoice = "paper";
            computerLastChoice.innerHTML = "✋";
            break;
        case 2:
            computerChoice = "scissors";
            computerLastChoice.innerHTML = "✌️";
            break;
    }
    return computerChoice;
}

// compare the user and computer choices, show the result and add it to score.
function playRound (playerChoice, computerChoice){
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore += 1; 
    } else {
        computerScore += 1; 
    }
    computerScoreDisplay.innerHTML = computerScore;
    playerScoreDisplay.innerHTML = playerScore;


    setTimeout(() => {
        if (playerScore == 5) {
            alert("You win the game!");
            playerScore = 0;
            computerScore = 0;
            computerScoreDisplay.innerHTML = computerScore;
            playerScoreDisplay.innerHTML = playerScore;
        } else if (computerScore == 5) {
            alert("The computer wins the game!");
            playerScore = 0;
            computerScore = 0;
            computerScoreDisplay.innerHTML = computerScore;
            playerScoreDisplay.innerHTML = playerScore;
        }
    }, 0);
}





