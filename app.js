const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');

const gamewidth = 5;
const gameHeigth = 6;

function createGameBoard() {
    let cellIndex = 1;
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 5; col++) {
            area.innerHTML += "<div class='cell' pos=" + cellIndex + "></div>";
            cellIndex++;
        }
    }
}

createGameBoard()