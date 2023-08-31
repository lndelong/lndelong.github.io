// variables for players 1 & 2
const playerX = ('X');
const playerO = ('O');

// array with all winning combinations
const winningCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

// variables for all needed DOM elements
const cellElements = Array.from(document.querySelectorAll(`[class*="cell"]`, 'id'));
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
const xImage = document.getElementById('xImage');
const oImage = document.getElementById('oImage');
let isPlayerOTurn = Boolean
let currentClass = '';
let cellsWithXO = [];

const cellZero = document.getElementById('0')
const cellOne = document.getElementById('1')
const cellTwo = document.getElementById('2')
const cellThree = document.getElementById('3')
const cellFour = document.getElementById('4')
const cellFive = document.getElementById('5')
const cellSix = document.getElementById('6')
const cellSeven = document.getElementById('7')
const cellEight = document.getElementById('8')


start();

function start() {
		isPlayerOTurn = false
        cellElements.forEach(cell => {
            cell.classList.remove('X');
            cell.classList.remove('O');
		cellZero.addEventListener('click', clickCell);
		cellOne.addEventListener('click', clickCell);
		cellTwo.addEventListener('click', clickCell);
		cellThree.addEventListener('click', clickCell);
		cellFour.addEventListener('click', clickCell);
		cellFive.addEventListener('click', clickCell);
		cellSix.addEventListener('click', clickCell);
		cellSeven.addEventListener('click', clickCell);
		cellEight.addEventListener('click', clickCell);
	})
}


function clickCell(e) {
	const cell = e.target
	let currentClass = isPlayerOTurn ? playerO : playerX
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
	}
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
	addImage(cell);

}

function checkWin(currentClass) {
	return winningCombo.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass);
		})
	})
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "It's a draw!";
    } else {
        winningMessageTextElement.innerText = `The ${isPlayerOTurn ? "O's" : "X's"} win!`;
    }
    winningMessageElement.classList.add('show')
}

function swapTurns() {
    isPlayerOTurn = !isPlayerOTurn
}

function addImage(cell) {
if (cell.classList.contains('X')) {
	cell.firstChild.style.display = "block";
 }	else if  (cell.classList.contains('O')) {
	cell.lastChild.style.display = "block";
 }
}

function isDraw() {
	let playedCells = cellElements.filter(cell => cell.classList.contains('X') || cell.classList.contains('O'));
	return playedCells.length === 9;
}

function restart() {
    cellElements.forEach(cell => {
        cell.classList.remove(playerX);
        cell.classList.remove(playerO);
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell);
        cell.firstChild.style.display = "none";
        cell.lastChild.style.display = "none";
    });
    winningMessageElement.classList.remove('show');
    start();
}

restartButton.addEventListener('click', restart)

