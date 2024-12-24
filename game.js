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
        return " scissors"
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


//getComputerChoice();
getHumanChoice();