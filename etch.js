let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
let width = 16;
let height = 16;

let clear = document.querySelector('.clearGrid')
clear.addEventListener('click', clearGrid());

let create = document.querySelector('.createGrid')
create.addEventListener('click', () => {
    let arrHeightWidth = getUserInput();
    height = arrHeightWidth[0];
    width = arrHeightWidth[1];
    
    if (Number.isInteger(height) === true && Number.isInteger(width) === true && height >= 1 && height <= 100 && width >= 1 && width <= 100){
        clearGrid();
        let errorMessage = "";
        document.getElementById("errorCode").textContent = errorMessage;
        createGrid(width, height);
        return arrHeightWidth;
    }
    else {
        let errorMessage = "Invalid Input. Please enter an integer between 1 and 100";
        document.getElementById("errorCode").textContent = errorMessage;
        return;
    }
})

function clearGrid(){
    document.querySelectorAll('.rowContainer').forEach(e => e.remove());
}

function getUserInput(){
    let arrayHeightWidth = [];
    inputHeight = document.querySelector('.width');
    let inputValueHeight = Number(inputHeight.value);
    arrayHeightWidth[0] = inputValueHeight;
    
    inputWidth = document.querySelector('.height');
    let inputValueWidth = Number(inputWidth.value);
    arrayHeightWidth[1] = inputValueWidth;
    return arrayHeightWidth;
}


function createGrid(WIDTH, HEIGHT){
    const container = document.querySelector('#container')
    for (i = 0; i < WIDTH; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');
        container.appendChild(rowContainer);
        for (j = 0; j < HEIGHT; j++){
            const miniContainer = document.querySelectorAll('.rowContainer');
            block = document.createElement('div');
            block.classList.add('block');
            miniContainer[i].appendChild(block);
        }
    }
    const allBlocks = document.querySelectorAll('.block')
    allBlocks.forEach((block) => {
        block.addEventListener('mouseover', draw);
        block.addEventListener('mousedown', draw);
    })
}

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.background = 'blue';
}

createGrid(width, height);