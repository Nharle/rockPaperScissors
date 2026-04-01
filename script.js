
let btns = document.querySelector(".buttons");
let scores = document.querySelector("#scores");
let reset = document.querySelector("#reset");
let resetBtn = document.createElement("button");
let roundResult = document.createElement("p");
let scoreResult = document.createElement("p");
let finalResult = document.createElement("p");
let humanScore = 0;
let computerScore = 0;

scores.classList.add("scores");
scoreResult.textContent = `Score: ${humanScore} - ${computerScore}`;
scores.append(roundResult, scoreResult, finalResult);


function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
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
function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        scoreResult.textContent = `Score: ${humanScore} - ${computerScore}`;
        roundResult.textContent = `You win the round! ${humanChoice} beats ${computerChoice}! `;
    } 
    else if(humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! ${humanChoice} ties with ${computerChoice}`;
    }
    else {
        computerScore += 1;
        scoreResult.textContent = `Score: ${humanScore} - ${computerScore}`;
        roundResult.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}!`;
        
    }
}
function buttonClick(event) {
    let target = event.target;
    let computerChoice = getComputerChoice();
    let humanChoice = target.id;
    playRound(humanChoice,computerChoice);
    if(humanScore === 5) {
        finalResult.textContent = `Human player wins with score ${humanScore} - ${computerScore}`;
        btns.removeEventListener("click", buttonClick);
        resetBtn.classList.add("reset");
        resetBtn.textContent = "Reset game";
        resetBtn.addEventListener("click", resetClick);
        reset.append(resetBtn);
    }
    else if(computerScore === 5) {
        finalResult.textContent = `Computer wins with score ${computerScore} - ${humanScore}`;
        btns.removeEventListener("click", buttonClick);
        resetBtn.classList.add("reset");
        resetBtn.textContent = "Reset game";
        resetBtn.addEventListener("click", resetClick);
        reset.append(resetBtn);
    }
}
function resetClick() {
    computerScore = 0;
    humanScore = 0;
    scoreResult.textContent = `Score: ${humanScore} - ${computerScore}`;
    roundResult.textContent = "";
    finalResult.textContent = "";
    reset.removeChild(resetBtn);
    playGame();
}
function playGame() {
    
   
    btns.addEventListener("click", buttonClick);
    
    
    
}
playGame();

