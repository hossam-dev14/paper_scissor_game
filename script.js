
// Diclaring Variables
const user = document.querySelector('.userChoise'),
    machine = document.querySelector('.machineChoise'),
    result = document.querySelector('.showResult'),
    userP =document.querySelector('.userPoints>span'),
    machineP =document.querySelector('.machinePoints>span'),
    modalScore =document.querySelector("#modalScore"),
    userImg = document.querySelector('#userChoise'),
    machineImg = document.querySelector('#machineChoise'),
    tryAgain = document.querySelector("#tryAgain"),
    exit = document.querySelector("#exit");

// Declaring array with 3 elemetns
const arr = ['Rock', 'Paper', 'Scissor'];
let userPoints = 0,
    machinePoints = 0;

// Show Points
const showPoints = () => {
    userP.textContent = userPoints;
    machineP.textContent = machinePoints;
}

showPoints();

function getValues(btnVal) {
    // Random number
    const randomNum = Math.floor(Math.random() * arr.length);
    let userVal = btnVal,
        machineVal = arr[randomNum];

    // Update img source
    userImg.setAttribute('src', `./img/${userVal}.png`);
    userImg.setAttribute('alt', `${userVal}`);
    machineImg.setAttribute('src', `./img/${machineVal}.png`);
    machineImg.setAttribute('alt', `${machineVal}`);

    userImg.style.transform = 'rotate(0deg)';
    machineImg.style.transform = 'rotate(0deg)';

    userVal ===  machineVal ? (result.innerHTML = 'Draw') : 
    userVal == 'Rock' && machineVal == 'Paper'  ? (result.innerHTML = 'Machine Win!') && machinePoints++ : 
    userVal == 'Rock' && machineVal == 'Scissor'  ? (result.innerHTML = 'User Win!') && userPoints++ :
    userVal == 'Paper' && machineVal == 'Rock'  ? (result.innerHTML = 'User Win!') && userPoints++ : 
    userVal == 'Paper' && machineVal == 'Scissor'  ? (result.innerHTML = 'Machine Win!') && machinePoints++ :  
    userVal == 'Scissor' && machineVal == 'Rock'  ? (result.innerHTML = 'Machine Win!') && machinePoints++ : 
    userVal == 'Scissor' && machineVal == 'Paper'  ? (result.innerHTML = 'User Win!') && userPoints++ : 
    result.innerHTML = 'Somthing wrong!!';

    showPoints();
    scoreEnd();
}

// who Won the score
function scoreEnd() {
    let whoWon = modalScore.querySelector('.score');
 
    // if the user or won or lose
    if(userPoints === 3 || machinePoints === 3){

        // display modal
        modalScore.style.visibility = 'visible';
        whoWon.style.transform = 'scale(1.5)';

        // Who won the game
        userPoints > machinePoints ? whoWon.innerHTML = 'You Won!' :
        userPoints < machinePoints ? whoWon.innerHTML = 'You Lose!':
        whoWon.innerHTML = 'Draw';

        // Reset points
        userPoints = 0,
        machinePoints = 0;
    } else { 
        whoWon.style.transform = 'scale(0.3)';}
        
    showPoints();
}

// Try to play again 
tryAgain.addEventListener('click', () => {
    // Hide modal
    modalScore.style.visibility = 'hidden';

    // Change user shape
    userImg.setAttribute('src', './img/rock.png');
    userImg.style.transform = 'rotate(90deg)';

    // Change machine shape
    machineImg.setAttribute('src', './img/rock.png');
    machineImg.style.transform = 'rotate(269deg)';
})

// Exit button
exit.addEventListener('click', () => {
    // Go to the home page
    window.location.href = 'https://hossam-dev14.github.io/paper_scissor_game/';
})

