
// Randomly picks between 3 choices //

function computerPlay () {
    let random = Math.floor(Math.random() * 3);

    if (random <= 0) {
        return console.log("Paper");
    } else if (random == 1) {
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}
