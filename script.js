
// Randomly picks between 3 choices //

function computerPlay () {
    let random = Math.floor(Math.random() * 3);

    if (random <= 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {

   if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "You lose! rock is absorbed by the paper!";
   } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "You win! rock can break the scissors!";
   } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "You lost! paper is weak against scissors!";
   } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "You win! paper absorbed the rock!";
   } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "You lost! scissors do nothing against rocks";
   } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "You win! scissors cutted the paper";
   } else {
    return "Its a draw";
   }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));