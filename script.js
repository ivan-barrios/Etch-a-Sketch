let color = "black";
let click = false;



//CREATES GRID
const container = document.getElementById('container');
function  makeGrid(value){
    let items = document.querySelectorAll('.grid-item');
    items.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    let amount = value * value;
    for (let i = 0; i < (amount); i++){
        let item = document.createElement('div');
        item.addEventListener('mouseover', colorGridItem)
        item.style.backgroundColor = "white"
        container.appendChild(item).className = "grid-item";
    }
}
makeGrid(16);



//Changes the size of the board
function changeSize(value){
    if (value >= 2 && value <= 100){
        makeGrid(value);
    }
}



//Changes the color of the pen
function colorGridItem(item){
    if (click){
        this.style.backgroundColor = color;
    }
}
function changeColor(choice){
    color = choice;
}



//If clicks, the pen works, if unclick, it does not (It can be improved for UI)
document.querySelector('#container').addEventListener('mousedown', () => {
    click = !click;
})



function clearBoard(){
    let board = document.querySelectorAll('.grid-item');
    board.forEach((board) => {
        board.style.backgroundColor = "white";
    })
}