
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
    return 0;
   } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
    return 1;
   } else {
    return 2;
   }

}

function game() {
    let pScore = 0, cScore = 0;
    for (let i = 0; i <= Infinity; i++) {
        // Choosen weapon
        computerSelection = computerPlay();
        playerSelection = prompt("Choose: Rock, Paper, Scissors", "");
        round = playRound(playerSelection, computerSelection);

        // Round winner evaluator 
        if (round == 0) {
            console.log("You Lose!");
            cScore++;
        } else if (round == 1) {
            console.log("You Win!");
            pScore++;
        } else {
            console.log("It's a Draw");
        }    
        console.log(`Your current score is ${pScore} and enemy score is ${cScore}`);

        // break the loop if there is a WINNER
        if (pScore === 5 || cScore === 5) break;
    }
}