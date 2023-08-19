const actionWords = [
    "Kiss", "Suck", "Lick", "Rub", "Tickle",
    "Tease", "Touch", "Spank", "Bite",
    "Nibble", "Blindfold", "Massage", "Caress", "Stroke", "Blow", "Taste", 
];

const modeWords = [
    "Boobs", "Thighs", "Inner thighs", "Feet", "Neck",
    "Ear", "Hands", "Back", "Ass", "Dick", "Navel", "Lips", "Pussy", "Toes", "Finger"
];

let currentPlayer = 1;
let timer;

function rollDices() {
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;
    const resultElement = document.getElementById('result');
    const timerElement = document.getElementById('timer');

    if (currentPlayer === 1) {
        const randomAction = getRandomAction();
        const randomMode = getRandomMode();
        resultElement.textContent = `${player1Name}: ${randomAction} ${randomMode}`;
        currentPlayer = 2;
        // timerElement.textContent = `${player1Name}'s Turn`;
        startTimer(30);
    } else {
        const randomAction = getRandomAction();
        const randomMode = getRandomMode();
        resultElement.textContent = `${player2Name}: ${randomAction} ${randomMode}`;
        currentPlayer = 1;
        // timerElement.textContent = `${player2Name}'s Turn`;
        startTimer(30);
    }
}

function getRandomAction() {
    const randomIndex = Math.floor(Math.random() * actionWords.length);
    return actionWords[randomIndex];
}

function getRandomMode() {
    const randomIndex = Math.floor(Math.random() * modeWords.length);
    return modeWords[randomIndex];
}

function startTimer(seconds) {
    clearInterval(timer);
    const timerElement = document.getElementById('timer');
    let remainingTime = seconds;

    timer = setInterval(() => {
        if (remainingTime === 0) {
            clearInterval(timer);
            timerElement.textContent = 'Time\'s Up!';
            document.getElementById('bellSound').play();
            setTimeout(() => {
                timerElement.textContent = '';
                document.getElementById('result').textContent = '';
            }, 2000);
        } else {
            timerElement.textContent = `${remainingTime} seconds left`;
            remainingTime--;
        }
    }, 1000);
}