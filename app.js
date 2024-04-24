const area = document.getElementById('area');

const gamewidth = 5;
const gameHeigth = 6;

function createGameBoard() {
    let cellIndex = 1;
    for (let row = 0; row < gamewidth; row++) {
        for (let col = 0; col < gamewidth; col++) {
            area.innerHTML += "<div class='cell' pos=" + cellIndex + "></div>";
            cellIndex++;
        }
    }
}

createGameBoard()

const cells = document.getElementsByClassName('cell');

for(const cell of cells){
    cell.addEventListener("keydown", letterType)
}

