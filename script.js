
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

   if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
    return "You lose!";
   } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
    return "You win!";
   } else {
    return "Draw!";
   }

}

function game() {

    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("choose - rock, paper, scissors", "");
        playRound(playerSelection, computerSelection);
        round = playRound(playerSelection, computerSelection);
        let playerScore = 0;
        let computerScore = 0;
        if (round == "You win!") {
            console.log(round);
            ++playerScore;
            report = `Your current score is ${playerScore}.`;
            console.log(report);
        } else if (round == "You lose!") {
            console.log(round);
            ++computerScore;
            report = `Computer score is ${computerScore}.`;
            console.log(report);
        } else {
            console.log(round);
            --i;
        }
        console.log(i);
    }
}
