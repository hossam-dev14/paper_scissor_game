
// Diclaring Variables
const user = document.querySelector('.userChoise'),
    machine = document.querySelector('.machineChoise'),
    result = document.querySelector('.showResult'),
    userP =document.querySelector('.userScore>span'),
    machineP =document.querySelector('.machineScore>span'),
    modalScore =document.querySelector("#modalScore"),
    userImg = document.querySelector('#userChoise'),
    machineImg = document.querySelector('#machineChoise'),
    tryAgain = document.querySelector("#tryAgain"),
    exit = document.querySelector("#exit");

// Declaring array with 3 elemetns
const arr = ['Rock', 'Paper', 'Scissor'];
let userScore = 0,
    machineScore = 0;

// Show Score
const showScore = () => {
    userP.textContent = userScore;
    machineP.textContent = machineScore;
}

showScore();

function playGame(btnVal) {
    // Random number
    const randomNum = Math.floor(Math.random() * arr.length);
    let userVal = btnVal,
        machineVal = arr[randomNum];

    // Update img source
    userImg.setAttribute('src', `./img/${userVal.toLowerCase()}.png`);
    userImg.setAttribute('alt', `${userVal}`);
    machineImg.setAttribute('src', `./img/${machineVal.toLowerCase()}.png`);
    machineImg.setAttribute('alt', `${machineVal}`);

    userImg.style.transform = 'rotate(0deg)';
    machineImg.style.transform = 'rotate(0deg)';

    userVal ===  machineVal ? (result.innerHTML = 'Draw') : 
    userVal == 'Rock' && machineVal == 'Paper'  ? (result.innerHTML = 'Machine Win!') && machineScore++ : 
    userVal == 'Rock' && machineVal == 'Scissor'  ? (result.innerHTML = 'User Win!') && userScore++ :
    userVal == 'Paper' && machineVal == 'Rock'  ? (result.innerHTML = 'User Win!') && userScore++ : 
    userVal == 'Paper' && machineVal == 'Scissor'  ? (result.innerHTML = 'Machine Win!') && machineScore++ :  
    userVal == 'Scissor' && machineVal == 'Rock'  ? (result.innerHTML = 'Machine Win!') && machineScore++ : 
    userVal == 'Scissor' && machineVal == 'Paper'  ? (result.innerHTML = 'User Win!') && userScore++ : 
    result.innerHTML = 'Upsss !!';

    showScore();
    gameOver();
}

// who Won the score
function gameOver() {
    let whoWon = modalScore.querySelector('.score');
 
    // if the user or won or lose
    if(userScore === 3 || machineScore === 3){

        // display modal
        modalScore.style.visibility = 'visible';
        whoWon.style.transform = 'scale(1.5)';

        // Who won the game
        userScore > machineScore ? whoWon.innerHTML = 'You Won!' :
        userScore < machineScore ? whoWon.innerHTML = 'You Lose!':
        whoWon.innerHTML = 'Draw';

        // Reset Score
        userScore = 0,
        machineScore = 0;
    } else { 
        whoWon.style.transform = 'scale(0.3)';}
        
    showScore();
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

