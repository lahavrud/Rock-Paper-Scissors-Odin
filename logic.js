let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function getHumanChoise() {
    let choice = prompt("Enter Your Choise: rock | paper | scissors");
    return choice;
}

function playRound(humanChoise, computerChoise){
    let choice = ['rock', 'paper', 'scissors'];
    humanChoiseIndex =  choice.indexOf(humanChoise.toLowerCase());
    computerChoiseIndex = choice.indexOf(computerChoise);
    console.log(humanChoise + " vs. " + computerChoise);
    
    //Rows: computer choise | Columns: human choise
    let resultMatrix = [[1, 0, 2], [2, 1, 0], [0, 2, 1]];
    let result = resultMatrix[computerChoiseIndex][humanChoiseIndex]
    
    if (result == 0) {
        console.log("You win!");
        humanScore += 1;
    }
    else if (result == 1) {
        console.log("It's a draw!");
    }
    else {
        console.log("You lose...")
        computerScore += 1;
    }
}

function playGame () {
    humanScore = 0;
    computerScore = 0;
    while(humanScore < 3 && computerScore < 3 ) {
        const humanSelection = getHumanChoise();
        const computerSelection = getComputerChoise();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == 3) {
        console.log("You've won the entire game!")
    }
    else {
        console.log("You've lost the entire game...")
    }
    
    playAgain = prompt("Wanna play another game? (yes/no)")

    if (playAgain == 'yes') {
        playGame()
    }
    else {
        alert('It was fun playing with you!')
    }
}

playGame()