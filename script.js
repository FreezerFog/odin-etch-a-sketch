// Variables
const grid = document.querySelector('#grid-container');
const clearButton = document.querySelector('#clear-button');

// Event Listeners
clearButton.addEventListener('click', deleteGrid);

// Functions
function makeGrid(size) {
  const tileSize = (800 - (size*2)) / size;
  // Loops through ROW
  for (let i = 0; i < size; i++) {
    // Loops through COLUMN
    for (let x = 0; x < size; x++) {
      const tile = document.createElement('div');
      tile.classList.add("tile"); 
      tile.style.width = `${tileSize}px`;
      tile.style.height = `${tileSize}px`;
      tile.style.border = '1px solid black';
      tile.addEventListener("mouseover", changeColor);
      grid.appendChild(tile);
    }    
  }
}

function changeColor() {
  this.style.backgroundColor = 'black';
}

function deleteGrid() {
  let grid = document.getElementById('grid-container');

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  newGridPrompt();
}

function newGridPrompt() {
  let valid = false;

  while (!valid) {
    let newGrid = prompt("Please enter a new grid size");

    if (newGrid != null && newGrid != "" && newGrid <= 100 ) {
      makeGrid(Number(newGrid));
      valid = true;
    }
  }
}

// Running Program
makeGrid(16);