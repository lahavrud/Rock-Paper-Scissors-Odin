function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function getHumanChoise() {
    let choice = prompt("Enter Your Choise: rock | paper | scissors");
    return choice;
}

console.log(getHumanChoise())
