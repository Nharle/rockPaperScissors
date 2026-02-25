
let humanScore = 0;
let computerScore = 0;
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
    //Human win conditions
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}! `);
    } 
    else {
        computerScore += 1;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

