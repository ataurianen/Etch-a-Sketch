//Need to create a 16x16 squard of divs
const container = document.getElementById("container");

function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++){
        for (let columns = 0; columns < gridSize; columns++){
            let div = document.createElement('div');
            div.setAttribute('style', 'width:' + 960/gridSize + 'px; height:' + 960/gridSize + 'px');
            div.classList.add('grid');
            container.append(div);
        }
    }
    addEventListenerToGrid();   
}

function makeNewGrid () {
    let newGridSize = prompt("How many boxes per row? (no more than 100)");
    while (newGridSize > 100) {
        newGridSize = prompt("How many boxes per row? (no more than 100)");
    }
    clearGrid();
    createGrid(newGridSize);
}

function clearGrid () {
    const grid = container.getElementsByClassName('grid');
    while (grid.length > 0) {
        grid[0].parentNode.removeChild(grid[0]);
    }
}

function addEventListenerToGrid() {
    //adds event listener
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid => grid.addEventListener('mouseover', function(){
    grid.classList.add('hovered');
}));
}

//Makes the initial 16x16 grid when page loads
window.onload = createGrid(16);

document.getElementById('new-grid-btn').addEventListener('click', function() {
    makeNewGrid();
});
