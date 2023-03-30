let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid(){
    const WIDTH = 16;
    const HEIGHT = 16;
    const container = document.querySelector('.container')
    for (i = 0; i < WIDTH; i++){
        for (j = 0; j < HEIGHT; j++){
            const grid = document.createElement('div');
            grid.classList.add('block');
            container.appendChild(grid);
        }
        const lineBreak = document.createElement('div');
        lineBreak.classList.add('break');
        container.appendChild(lineBreak);
    }
    const gridBlock = document.querySelectorAll('.block')
    gridBlock.forEach((block) => {
        block.addEventListener('mouseover', draw);
        block.addEventListener('mousedown', draw);
    })
}

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.background = 'blue';
}

createGrid();
//mouseover && mousedown
//if (e.type === 'mouseover' && !mouseDown) return