/* 

*/
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

console.log(getComputerChoice());
