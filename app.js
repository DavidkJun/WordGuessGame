const area = document.getElementById('area');
const collums = 5;
const rows = 6;

const wordGuesses = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
}

function createGameBoard() {
    let cellIndex = 1;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < collums; col++) {
            area.innerHTML += "<div class='cell' id='cell_" + cellIndex + "' contenteditable='true'></div>";
            cellIndex++;
        }
    }
}

createGameBoard();

const cells = document.getElementsByClassName('cell');

for (const cell of cells) {
    cell.addEventListener("keyup", letterType);
}
console.log(wordGuesses)
function letterType(event) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= collums; j++) {
            const key = event.key.toUpperCase();
            if (key.length === 1 && key.match(/[A-Z]/i)) { // Перевірка чи введено букву
                wordGuesses[i].push(key.toString())
                event.target.innerText = key;
            }
        }
    }
}