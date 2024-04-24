const area = document.getElementById('area');
const gamewidth = 5;
const gameHeight = 6;

function createGameBoard() {
    let cellIndex = 1;
    for (let row = 0; row < gameHeight; row++) {
        for (let col = 0; col < gamewidth; col++) {
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

function letterType(event) {
    const letter = event.key.toUpperCase();
    event.target.innerText = letter;
}