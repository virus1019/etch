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