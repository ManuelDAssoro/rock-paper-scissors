let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = "none";
    while (humanChoice != "rock" && humanChoice != "paper" &&humanChoice != "scissors"){
        let input = prompt("Choose Rock, Paper or Scissors!");
        if (input !== null) {
            humanChoice = input.toLowerCase();
        }
}
    return humanChoice;
}

function playRound (humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log ("You both picked " + humanChoice + ", it's a draw!");
        return;
    }
    else {
        if (humanChoice == "rock"){
            if (computerChoice == "paper"){
                computerScore += 1;
                console.log("Rock vs Paper: You Lose!") 
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;                         
            }
            else{
                humanScore += 1;
                console.log("Rock vs Scissors: You Win!")
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "scissors"){
                computerScore += 1;
                console.log("Paper vs Scissors: You Lose!")
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;                          
            }
            else{
                humanScore += 1;
                console.log("Paper vs Rock: You Win!")
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;
            }
        }
        else {
            if (computerChoice == "rock"){
                computerScore += 1;
                console.log("Scissors vs Rock: You Lose!")
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;                          
            }
            else{
                humanScore += 1;
                console.log("Scissors vs Paper: You Win!")
                console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
                return;
        }
    }
}
}





/*function playGame() {
    console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
    humanScore = 0;
    computerScore = 0;
    console.log("Your score: " + humanScore + " - Computer score: " + computerScore);
    while (humanScore < 5 && computerScore < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }        
    if (humanScore == 5){
        console.log("You win the game!")
    }
    else{
        console.log("The computer wins the game!")
    }
}
*/