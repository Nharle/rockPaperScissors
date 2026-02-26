
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let choiceNum = Math.round(Math.random() * 2);
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
    
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(humanChoice);
        console.log(computerChoice);
        humanScore += 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}! `);
    } 
    else if(humanChoice === computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);
        console.log("It's a tie!");
    }
    else {
        computerScore += 1;
        console.log(humanChoice);
        console.log(computerChoice);
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        
    }
}
function playGame(hScore,cScore) {
    let c = 0;

    while (c < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        hScore = humanScore;
        cScore = computerScore;
        c++;
    }
    if(hScore > cScore) {
        console.log(`You won the game ${hScore}-${cScore}!`);
    }
    else if (hScore === cScore) {
        console.log(`You tied with the computer ${hScore}-${cScore}!`)
    }
    else {
        console.log(`You lost to the computer ${hScore}-${cScore}!`);
    }
}
playGame(humanScore,computerScore);