/* 

*/
let humanScore = 0;
let globalScore = 0;
function getComputerChoice() {
    let choiceNum = Math.round(Math.random() * 2);
    console.log(choiceNum);
    if(choiceNum === 0) {
        return "Rock";
    }
    else if(choiceNum === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors", "Rock");
    return choice;
}
console.log(getHumanChoice());
console.log(getComputerChoice());
