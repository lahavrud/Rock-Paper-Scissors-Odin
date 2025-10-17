function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

