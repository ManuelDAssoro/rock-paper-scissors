function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function randomizer() {
    let randomNumber = getComputerChoice();
    console.log(randomNumber);
    return void 0;
}