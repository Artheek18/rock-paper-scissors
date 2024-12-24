function getComputerChoice(){
    if(Math.floor(Math.random() * 3) == 0){
        //console.log("rock")
        return "rock";
    }

    else if(Math.floor(Math.random() * 3) == 1){
        //console.log("paper")
        return "paper";
    }

    else{
        //console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let choice;

    while (true) {
        choice = prompt("What are you picking: rock, paper, or scissors? ").toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            //console.log(choice);
            return choice;
        } else {
            alert("Invalid choice! Please pick rock, paper, or scissors.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper Beats Rock")
        return "You win!"
    }

    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock Beats Scissors")
        return "You win!"
    }

    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors Beats Paper")
        return "You win!"
    }

    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Scissors does not beat Rock")
        return "You lose!"
    }

    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Rock does not beat Paper")
        return "You lose!"
    }

    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Paper does not beat Scissors")
        return "You lose!"
    }

    else if(humanChoice == computerChoice){
        console.log("Its a tie")
    }

  }

  function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds wins.");

    for(let round = 1; round <= 5; round ++){
        console.log("Welcome to round "+  round)

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);

        if(roundResult == "You win!"){
            humanScore++;
            console.log("You win a point");
        }

        else if(roundResult == "You lose!"){
            computerScore++;
            console.log("Computer wins a point");

        }

        else{
            console.log("It is a tie");
        }

        console.log("Current Scores - Player: " + humanScore + " Computer: "+ computerScore);

    }

    console.log("\nGame Over!");
    document.write("<h2>Game Over!</h2>");
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
        document.write("<h3>Congratulations! You are the overall winner!</h3>");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time!");
        document.write("<h3>Computer wins the game! Better luck next time!</h3>");
    } else {
        console.log("It's an overall tie!");
        document.write("<h3>It's an overall tie!</h3>");
    }
  }

  playGame();
  
  
  