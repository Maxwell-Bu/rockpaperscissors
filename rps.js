function getComputerChoice(){
    randint = Math.random()
    if (randint >= 0 && randint <= 1/3){
        return "Rock";
    } else if (randint > 1/3 && randint <= 2/3){
        return "Paper";
    } else {
        return "Scissors"; }
}

function getHumanChoice(){
    input = prompt("Rock, Paper, or Scissors?")
    return input.at(0).toUpperCase() + input.slice(1).toLowerCase();
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    playGame()

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        humanScore--;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        humanScore--;
        return "You lose! Scissors beats Paper";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        humanScore--;
        return "You lose! Rock beats Scissors";
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        return "Tie!!!"
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        return "Tie!!!"
    }   else {
        return "Tie!!!"
    }
}

function playGame() {
    if (humanScore === 5) {
        alert("You Win!!!")
    } else if (computerScore === 5) {
        alert("Loser")
    }
    
    }

let humanScore = 0;
let computerScore = 0;

/*
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
*/

const result = document.querySelector("#result");

const words = document.createElement("p");
words.classList.add("words")
words.textContent = "Hi"
result.appendChild(words);

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        var humanChoice = e.target.dataset.choice;
        var result = playRound(humanChoice);
        console.log(result);
        words.textContent = result;
    })
})

