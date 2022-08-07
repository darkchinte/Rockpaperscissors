// choices
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// display
const playerScore = document.querySelector('[data-user="player"]');
const computerScore = document.querySelector('[data-user="computer"]');
const choices = document.querySelector('.choices');
const win = document.querySelector('.win-gif');
const lose = document.querySelector('.lose-gif');

// scores
let pScore = 0, cScore = 0;

//play button
const result = document.querySelector('.result');
const playGame = document.getElementById('play');
playGame.addEventListener('click', game)

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
        result.textContent = `!LOSE | YOU [${playerSelection}] VS [${computerSelection}] ENEMY | LOSE!`;
        cScore++;
   } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = `!WIN | YOU [${playerSelection}] VS [${computerSelection}] ENEMY | WIN!`;
        pScore++;
   } else if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
        result.textContent = `!DRAW | YOU [${playerSelection}] VS [${computerSelection}] ENEMY | DRAW!`;
   }

   playerScore.textContent = `${pScore}`;
   computerScore.textContent = `${cScore}`;
}

function game() {
    audioStop();
    // reset score
    pScore = 0, cScore = 0;
    playerScore.textContent = `${pScore}`;
    computerScore.textContent = `${cScore}`;
    result.textContent = 'THE BATTLE BEGINS!';
    // display result
    win.style.display = 'none';
    lose.style.display = 'none';
    choices.setAttribute('style', 'visibility: visible; opacity: 1;')

    playGame.style.visibility = 'hidden';
}


function gameStop (pScore, cScore) {
    if (pScore === 5) {
        playGame.textContent = 'PlAY AGAIN!';
        choices.style.display = 'none';
        win.style.display = 'block';
        playGame.style.visibility = 'visible';
        audioPlay(1);
    } else if (cScore === 5) {
        playGame.textContent = 'PlAY AGAIN!';
        lose.style.display = 'block';
        choices.style.display = 'none';
        playGame.style.visibility = 'visible';
        audioPlay(2);
    }
}

function audioPlay(n) {
    if (n == 1) {
        const audio = document.querySelector(`[data-audio="${n}"]`);
        audio.play();
    } else if (n == 2) {
        const audio = document.querySelector(`[data-audio="${n}"]`);
        audio.play();
    }
}

function audioStop() {
    const audio1 = document.querySelector('[data-audio="1"]');
    const audio2 = document.querySelector('[data-audio="2"]');
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
}

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    gameStop(pScore, cScore);
})

paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
    gameStop(pScore, cScore);
})

scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    gameStop(pScore, cScore);
})


