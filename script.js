
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
   } else if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
    return 2;
   }

}

function game() {
    const result = document.querySelector('.result');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const playerScore = document.querySelector('[data-user="player"]');
    const computerScore = document.querySelector('[data-user="computer"]');
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    result.textContent = 'THE BATTLE BEGINS!';
    let pScore = 0, cScore = 0;

    rock.addEventListener('click', () => {
        round = playRound('rock', computerPlay());
        if (round == 0) {
            result.textContent = 'You lose!';
            cScore++;
        } else if (round == 1) {
            result.textContent = 'You win!';
            pScore++;
        } else if (round == 2) {
            result.textContent = 'It\'s a draw!';
        }
        playerScore.textContent = `${pScore}`;
        computerScore.textContent = `${cScore}`;

        // Stops the function when winner score is reached
        if (pScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU WON THE BATTLE!!!';
            return;
        } else if (cScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU LOST THE BATTLE!!!';
            return;
        }
    })

    paper.addEventListener('click', () => {
        round = playRound('paper', computerPlay());
        if (round == 0) {
            result.textContent = 'You lose!';
            cScore++;
        } else if (round == 1) {
            result.textContent = 'You win!';
            pScore++;
        } else if (round == 2) {
            result.textContent = 'It\'s a draw!';
        }
        playerScore.textContent = `${pScore}`;
        computerScore.textContent = `${cScore}`;

        // Stops the function when winner score is reached
        if (pScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU WON THE BATTLE!!!';
            return;
        } else if (cScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU LOST THE BATTLE!!!';
            return;
        }
    })

    scissors.addEventListener('click', () => {
        round = playRound('scissors', computerPlay());
        if (round == 0) {
            result.textContent = 'You lose!';
            cScore++;
        } else if (round == 1) {
            result.textContent = 'You win!';
            pScore++;
        } else if (round == 2) {
            result.textContent = 'It\'s a draw!';
        }
        playerScore.textContent = `${pScore}`;
        computerScore.textContent = `${cScore}`;

        // Stops the function when winner score is reached
        if (pScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU WON THE BATTLE!!!';
            return;
        } else if (cScore === 5) {
            playGame.textContent = 'PlAY AGAIN!';
            result.textContent = 'YOU LOST THE BATTLE!!!';
            return;
        }
    })

    
}


const playGame = document.getElementById('play');
playGame.addEventListener('click', game)