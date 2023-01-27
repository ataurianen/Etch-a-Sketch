const container = document.getElementById("container");
var gridSize = 16;

//Need to create a 16x16 squard of divs

for (let rows = 0; rows < gridSize; rows++){
    for (let columns = 0; columns < gridSize; columns++){
        let div = document.createElement('div');
        div.classList.add('grid');
        container.append(div);
    }
    document.getElementsByClassName('grid')
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => grid.addEventListener('mouseover', function(){
    grid.classList.add('hovered');
}));

