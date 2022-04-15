//----------
// Rock, Paper, Scissors game
//
//----------

const handRock = "Rock";
const handPaper = "Paper";
const handScissors = "Scissors";

let playerwin = 0;
let computerwin = 0;

//----------
// create buttons
//
const buttons = document.querySelectorAll('button');

//----------
// Click a button
//
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id, computerPlay());
    });
  });

//----------
// display score
//
const divplayerscore = document.querySelector('#playerscore');
const divcomputerscore = document.querySelector('#computerscore');

//----------
// display results
//
const divResults = document.querySelector('#result');
divResults.textContent = "";

//----------
// randomly return 'Rock', 'Paper' or 'Scissors'
//
function computerPlay () {

    // get a random number between 1 and 3
    let num = getRandomInt(1, 3);

    // 1=rock, 2=paper, 3=scissors
    let hand;
    if (num == 1) {
        hand = handRock;
    } else if (num == 2) {
        hand = handPaper;
    } else {
        hand = handScissors;
    }
    
    // return string
    return hand;
}

//----------
// return random number between x and y, include x and y
//
function getRandomInt (x, y) {
    x = Math.ceil(x);
    y = Math.floor(y);
    return Math.floor(Math.random() * (y - x + 1) + x);
}

//----------
// play a single round of Rock Paper Scissors
//
function playRound (playerSelection, computerSelection) {

    // capitalize player selection
    playerSelection = capitalize(playerSelection);

    // convert playerSelection to number
    let playernum = playerSelection.length;

    // convert computerSelection to number
    let computernum = computerSelection.length;

    // compare both selections
    let difference = playernum - computernum;
    let result;
    if (playernum == computernum) {
        result = "Even";
    } else {
        switch (playernum) {
            case 4:// Rock
                if (difference == -4) {
                    result = "Win";
                } else {
                    result = "Lose";
                }
                break;
            case 5:// Paper
            if (difference == 1) {
                result = "Win";
            } else {
                result = "Lose";
            }
            break;
        case 8:// Scissors
            if (difference == 3) {
                result = "Win";
            } else {
                result = "Lose";
            }
            break;
        default:
            result = "";
            break;
        }
    }
    // return declaration of winner
    if (result == 'Win') {
        result = `You ${result}! ${playerSelection} beats ${computerSelection}.`;
        if (playerwin < 4) {
            playerwin++;
        } else {
            playerwin = 0;
            computerwin = 0;
            result += 'You have 5 wins.'
        }
    } else if (result == 'Lose') {
        result = `You ${result}! ${computerSelection} beats ${playerSelection}.`;
        if (computerwin < 4) {
            computerwin++;
        } else {
            playerwin = 0;
            computerwin = 0;
            result += 'You lose 5 rounds.'
        }
    } else {
        result = `${result}.`;
    }

    divplayerscore.textContent = playerwin;
    divcomputerscore.textContent = computerwin;
    divResults.textContent = result;

}

//----------
// capitalize player selection like 'rock' -> 'Rock'
//
function capitalize(str1) {
    let str2 = str1[0].toUpperCase() + str1.substr(1, str1.length - 1).toLowerCase();
    return str2;
}

//---------- delete for implementing UI play mode
// play a 5 round game
//
/*
function game() {

    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Input your hand.');
        computerSelection = computerPlay();
        console.log(i + playRound(playerSelection, computerSelection));
    }
}
*/
