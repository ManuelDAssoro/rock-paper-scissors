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
    let humanChoice = prompt ("Choose Rock, Paper or Scissors!");
    return humanChoice;
}

function playRound (humanChoice, computerChoice){
    console.log (humanChoice);
    console.log (computerChoice);
    if (humanChoice == computerChoice){
        console.log ("You both picked " + humanChoice + ", its a draw!");
    }
    else {
        if (humanChoice == "rock"){
            if (computerChoice == "paper"){
                computerScore += 1;
                console.log("Rock vs Paper: You Lose!")                          
            }
            else{
                humanScore += 1;
                console.log("Rock vs Scissors: You Win!")
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "scissors"){
                computerScore += 1;
                console.log("Paper vs Scissors: You Lose!")                          
            }
            else{
                humanScore += 1;
                console.log("Paper vs Rock: You Win!")
            }
        }
        else {
            if (computerChoice == "rock"){
                computerScore += 1;
                console.log("Scissors vs Rock: You Lose!")                          
            }
            else{
                humanScore += 1;
                console.log("Scissors vs Paper: You Win!")
        }
    }
}
}
