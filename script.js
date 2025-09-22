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

/*
let s = 0;
let p = 0;
let r = 0;

let i = 1000000000;
const total = i;
while (i > 0) {
    const computerChoice = getComputerChoice();
    if (computerChoice === "scissors") {
        s++;
    } else if (computerChoice === "paper") {
        p++;
    } else if (computerChoice === "rock") {
        r++;
    }
    i--;
}
console.log(s / total);
console.log(p / total);
console.log(r / total);

*/


//console.log(getComputerChoice());


function getHumanChoice() {
    return prompt("What is your choice?");
}

//console.log(typeof getHumanChoice());

let humanScore = 0;
let coputerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let message;
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            message = "You lose! Rock beats Scissors.";
            coputerScore++;
        } else if (computerChoice === "paper") {
            message = "You win! Scissors beats Paper.";
            humanScore++;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            message = "You lose! Scissors beats Paper.";
            coputerScore++;
        } else if (computerChoice === "rock") {
            message = "You win! Paper beats Rock.";
            humanScore++;
        }
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            message = "You lose! Paper beats Rock.";
            coputerScore++;
        } else if (computerChoice === "scissors") {
            message = "You win! Rock beats Scissors.";
            humanScore++;
        }
    }
    console.log(message);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
