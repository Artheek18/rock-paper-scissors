function getComputerChoice(){
    if(Math.floor(Math.random() * 3) == 0){
        console.log("rock")
        return "rock";
    }

    else if(Math.floor(Math.random() * 3) == 1){
        console.log("paper")
        return "paper";
    }

    else{
        console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let choice;

    while (true) {
        choice = prompt("What are you picking: rock, paper, or scissors? ").toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            console.log(choice);
            return choice;
        } else {
            alert("Invalid choice! Please pick rock, paper, or scissors.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper Beats Rock")
    }

    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock Beats Scissors")
    }

    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors Beats Paper")
    }

    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Scissors does not beat Rock")
    }

    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Rock does not beat Paper")
    }

    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Paper does not beat Scissors")
    }

    else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("Its a tie")
    }

    else if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("Its a tie")
    }

    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Its a tie")
    }

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);