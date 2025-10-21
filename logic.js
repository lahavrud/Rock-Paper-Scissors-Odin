let humanScore = 0;
let computerScore = 0;

const computerScoreSpan = document.querySelector(".computer-score");
const humanScoreSpan = document.querySelector(".human-score")
const messeges = document.querySelector(".messages");
const resultsContainer = document.querySelector(".results-container")

function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function gameEnd(win){
    if (win){
        messeges.textContent = "Wow. Now that's impressive. You've won"
    }
    else {
        messeges.textContent = "Losing's feeling bad, ain't it?"
    }
    const restartButton = document.createElement('button');
    restartButton.textContent = "Restart";
    resultsContainer.appendChild(restartButton);
    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.style.visibility = 'hidden';
    
    restartButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        computerScoreSpan.textContent = 0;
        humanScoreSpan.textContent = 0;
        messeges.textContent = "New game has started";
        buttonsContainer.style.visibility = 'visible';
        resultsContainer.removeChild(restartButton);
    })
}
function playRound(humanChoise, computerChoise){
    let choice = ['rock', 'paper', 'scissors'];
    humanChoiseIndex =  choice.indexOf(humanChoise.toLowerCase());
    computerChoiseIndex = choice.indexOf(computerChoise);
    console.log(humanChoise + " vs. " + computerChoise);
    
    //Rows: computer choise | Columns: human choise ([0]-rock [1]-paper [2]-scissors | 0-loss 1-draw 2-win)
    let resultMatrix = [[1, 0, 2], [2, 1, 0], [0, 2, 1]];
    let result = resultMatrix[computerChoiseIndex]
                            [humanChoiseIndex]
    
    if (result == 0) {
        messeges.textContent = "You Won!";
        humanScore += 1;
        updateWinnerScore(humanScore, humanScoreSpan);
    }
    else if (result == 1) {
        messeges.textContent = "It's a Tie!";
    }
    else {
        messeges.textContent = "You Lose";
        computerScore += 1;
        updateWinnerScore(computerScore, computerScoreSpan);
    }

    if(humanScore == 3){
        gameEnd(true);
    }
    else if(computerScore == 3){
        gameEnd(false);
    }
}

function updateWinnerScore(score, span) {
    span.textContent = score;
}



const rockButton = document.querySelector("#rockBtn")
const paperButton = document.querySelector("#paperBtn")
const scissorsButton = document.querySelector("#scissorsBtn")

rockButton.addEventListener("click", () => playRound("rock",getComputerChoise()));
paperButton.addEventListener("click", () => playRound("paper",getComputerChoise()));
scissorsButton.addEventListener("click", () => playRound("scissors",getComputerChoise()));






