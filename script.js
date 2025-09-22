function getComputerChoice() {
    let num = Math.random() * 3;

    if (num > 2) {
        return "scissors";
    } else if (num > 1) {
        return "paper";
    } else {
        return "rock";
    }
}

//console.log(getComputerChoice());


function getHumanChoice() {
    return prompt("What is your choice?");
}

//console.log(typeof getHumanChoice());

let humanScore = 0;
let coputerScore = 0;


