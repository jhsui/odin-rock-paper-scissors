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
    return input = prompt("What is your choice?");

}

console.log(getHumanChoice());