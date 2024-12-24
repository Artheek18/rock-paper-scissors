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