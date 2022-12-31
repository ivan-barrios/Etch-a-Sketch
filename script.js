let color = "black";
let click = false;

//CREATES GRID
const board = document.getElementById('board');
function  makeGrid(value){
    let items = document.querySelectorAll('.grid-item');
    items.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    let amount = value * value;
    for (let i = 0; i < (amount); i++){
        let item = document.createElement('div');
        item.addEventListener('mouseover', colorGridItem)
        item.style.backgroundColor = "white"
        board.appendChild(item).className = "grid-item";
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
document.querySelector('#board').addEventListener('mousedown', () => {
    click = !click;
})


//Clears the board
function clearBoard(){
    let board = document.querySelectorAll('.grid-item');
    board.forEach((board) => {
        board.style.backgroundColor = "white";
    })
}