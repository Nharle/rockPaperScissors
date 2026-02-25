
let humanScore = 0;
let globalScore = 0;
function getComputerChoice() {
    let choiceNum = Math.round(Math.random() * 2);
    console.log(choiceNum);
    if(choiceNum === 0) {
        return "rock";
    }
    else if(choiceNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors", "rock");
    return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {

}
console.log(getHumanChoice());
console.log(getComputerChoice());
