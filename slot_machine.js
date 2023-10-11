const reels = document.getElementById('reels');
const symbols = ['💰', '💶', '💣', '👱', '🍉', '🍓','😺','☺'];

function createSlotElements() {
    for (let i = 0; i < symbols.length; i++) {
        const symbol = document.createElement('div');
        symbol.classList.add('symbol');
        symbol.textContent = symbols[i];
        reels.appendChild(symbol);
    }
}

createSlotElements();
const spinButton = document.getElementById('spin');

function spin() {
    const randomSymbols = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        randomSymbols.push(symbols[randomIndex]);
    }
    return randomSymbols;
}

spinButton.addEventListener('click', () => {
    const result = spin();
    for (let i = 0; i < reels.children.length; i++) {
        reels.children[i].textContent = result[i];
    }
});
const resultElement = document.getElementById('result');

function checkResult(spinResult) {
    if (spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2]) {
        return true;
    } else {
        return false;
    }
}

function displayResult(isWin) {
    if (isWin) {
        resultElement.textContent = 'おめでとう！あなたの勝ちです！';
    } else {
        resultElement.textContent = '残念！もう一度挑戦してください。';
    }
}

spinButton.addEventListener('click', () => {
    const result = spin();
    for (let i = 0; i < reels.children.length; i++) {
        reels.children[i].textContent = result[i];
    }
    const isWin = checkResult(result);
    displayResult(isWin);
});
