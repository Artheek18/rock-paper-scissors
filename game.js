function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorButton = document.getElementById("scissors-button");
const resetButton = document.getElementById("reset-button");

const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerText = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
        playerScore++;
    } else if (humanChoice === computerChoice) {
        result.innerText = `It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    } else {
        result.innerText = `You lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} does not beat ${computerChoice}`;
        computerScore++;
    }

    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === 5) {
        winnerDisplay.textContent = "You win the game! 🎉 Congratulations!";
        disableGameButtons();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer wins the game! Better luck next time!";
        disableGameButtons();
    }
}

function disableGameButtons() {
    document.querySelectorAll("#rock-button, #paper-button, #scissors-button").forEach(button => {
        button.disabled = true;
    });

    resetButton.style.display = 'block'; 
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    result.innerText = "";
    winnerDisplay.innerText = "";
    updateScore();

    document.querySelectorAll("#rock-button, #paper-button, #scissors-button").forEach(button => {
        button.disabled = false;
    });

    resetButton.style.display = 'none'; 
}

resetButton.addEventListener("click", resetGame);

document.querySelectorAll("#rock-button, #paper-button, #scissors-button").forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


