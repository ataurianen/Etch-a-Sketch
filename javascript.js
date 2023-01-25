const container = document.getElementById("container");
container.setAttribute('style', 'display:flex')
gridSize = 16;

//Need to create a 16x16 squard of divs



count = 0;
while (count <= gridSize) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border:solid; border-width:1px; height:20px; width:20px')
    container.appendChild(div);
    count++;
}
