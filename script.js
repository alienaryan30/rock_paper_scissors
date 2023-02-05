//Write a code to get computer choice
let randomNumber = Math.random() * 3;
function getComputerChoice(x) {
    
    randomNumber = Number.parseInt(randomNumber);
    let computerSelection;

    if (randomNumber == 0) computerSelection = "ROCK";
    else if (randomNumber == 1) computerSelection = "PAPER";
    else if (randomNumber == 2) computerSelection = "SCISSORS";

    return computerSelection;
}


let userInput = prompt("Rock, Paper or Scissors");

function playerSelection(input) {
    input = input.toUpperCase();
    return input;
}

//Main game

/*
if p1 is rock and p2 is scissors then p1 wins
else if p1 is rock and p2 is paper then p2 wins
else if p1 is scissors and p2 is paper then p1 wins
 */

function mainGame(x, y) {
    if (y == "ROCK" || y == 'PAPER' || y == "SCISSORS") {
        if (x == y) return "It's a draw";
        else if (x == 'ROCK' && y == "PAPER") return "You win! Paper beats rock.";
        else if (x == "PAPER" && y == "ROCK") return "You lose. Paper beats rock.";
        else if (x == "PAPER" && y == "SCISSORS") return "You win! Scissors beat paper.";
        else if (x == "SCISSORS" && y == "PAPER") return "You lose. Scissors beat paper.";
        else if (x == "SCISSORS" && y == "ROCK") return "You win! Rock beat scissors.";
        else if (x == "ROCK" && y == "SCISSORS") return "You lose. Rock beat scissors.";
    } else {
        return "INVALID INPUT. PLEASE REFRESH AND ONLY ENTER 'ROCK', 'PAPER' OR 'SCISSORS'."
    }
}

console.log(mainGame(getComputerChoice(randomNumber),playerSelection(userInput)));

