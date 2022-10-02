//  Declare all variables (like player, rock, paper, sizz, round, scores for player and comp)
var playerScore = 0;
var computerScore = 0;
var round = 0;

document.getElementById("win-msg").textContent = 'First to 5 wins';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

//  Choose rps randomly for computer
function computerPlay() {
    var computerOptions = ['rock', 'paper', 'sizz'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

//  Plays a round, iterates round counter, assigns point to winner
function playRound(playerHand, computerHand) {
    var playerWin = 'Win';
    var gameTie = 'Draw';
    var computerWin = 'Lose';
    round++;
    if (playerHand === computerHand) {
        return gameTie;
    } else {
        if (playerHand === 'rock') {
            if (computerHand === 'sizz') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerHand === 'paper') {
            if (computerHand === 'rock') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerHand === 'sizz') {
            if (computerHand === 'paper') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
    }
}
//  Loop the round until somebody wins 5 times
function game(player) {
    if (playerScore < 5 && computerScore < 5) {
        var playerSelection = player;
        const computerSelection = computerPlay();
        var roundText = playRound(playerSelection, computerSelection);
        document.getElementById("win-msg").textContent = roundText;
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }
    if (playerScore == 5) {
        document.getElementById('win-msg').textContent = 'You beat the computer!';
        document.getElementById('win-msg').setAttribute('style', 'color:blue;');
    }
    if (computerScore == 5) {
        document.getElementById('win-msg').textContent = 'Computer wins the game!';
        document.getElementById('win-msg').setAttribute('style', 'color:red;');
    }
}

//  buttons
var rockBtn = document.querySelector('#rock-btn');
var paperBtn = document.querySelector('#paper-btn');
var sizzBtn = document.querySelector('#sizz-btn');
var resetBtn = document.querySelector('#reset-btn');

//  Accepting click input to buttons
rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

sizzBtn.addEventListener('click', () => {
    game('sizz');
});


//  Reset game button
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('win-msg').setAttribute('style', 'color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("win-msg").textContent = 'First to 5 wins';
})