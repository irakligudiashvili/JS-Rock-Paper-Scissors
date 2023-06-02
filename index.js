const choiceBtns = document.querySelectorAll('.choiceBtn');
const resultText = document.querySelector('#resultText');
const playerChoiceIcon = document.querySelector('#playerChoiceIcon');
const computerChoiceIcon = document.querySelector('#computerChoiceIcon');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const audioControl = document.querySelector('#audioControl');
const song = document.querySelector('#song');


let player;
let computer;
let result;

let pScore = 0;
let cScore = 0;

let songPlaying = false;
song.volume = 0.1;


choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    console.log(player);
    computerTurn();
    playerChoiceIcon.src=`images/${player}.png`;
    computerChoiceIcon.src=`images/${computer}.png`;
    resultText.textContent = checkWinner();
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}))

function computerTurn(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum){
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    } else if (computer == 'Rock'){
        if(player == 'Paper'){
            pScore += 1;
            return 'You Win!';
        } else {
            cScore += 1;
            return 'You Lose!';
        }
    } else if (computer == 'Paper'){
        if(player == 'Scissors'){
            pScore += 1;
            return 'You Win!';
        } else {
            cScore += 1;
            return 'You Lose!';
        }
    } else if (computer == 'Scissors'){
        if(player == 'Rock'){
            pScore += 1;
            return 'You Win!';
        } else {
            cScore += 1;
            return 'You Lose!';
        }
    }
}

audioControl.addEventListener('click', () => {
    if(songPlaying){
        songPlaying = false;
        song.pause();
        audioControl.src='images/audioOff.png'
    } else {
        songPlaying = true;
        song.play();
        audioControl.src='images/audioOn.png'
    }
})