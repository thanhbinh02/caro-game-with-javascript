const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')

const x = 10;
const y = 10
const total = x * y;

const startCells = new Array(total).fill(null).map((_, i) => {
    return ""; 
}); 


let go = "circle"
infoDisplay.textContent = "Circle goes first"


function createBoard() {
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener('click',addGo)
        gameBoard.append(cellElement)
    }) 
}

createBoard()

function addGo(e) {
    const goDisplay =  document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'circle' ? "cross" : "circle"
    infoDisplay.textContent = "It is now" + go + "'s go."
    e.target.removeEventListener("click", addGo)
    
    const id = e.target.id
    const item = e.target.firstChild?.classList.value
    const [x, y] = calculateCoordinates(id, 10)

    checkWin(10, item, x, y)
}  

function checkScore() {
    // const allSquares = document.querySelectorAll(".square")
    
    // const winingCombos = [
    //     [0,1,2], [3,4,5], [6,7,8],
    //     [0,3,6], [1,4,7], [2,5,8],
    //     [0,4,8], [2,4,6]
    // ]
    
    // winingCombos.forEach(array => {
        
    // } )
}

function calculateCoordinates(cellNumber, columns) {
    const row = Math.floor(cellNumber / columns);
    const col = cellNumber % columns;
    return [col, row];
}

function calculateCellNumber(x, y, columns) {
    return x + y * columns;
}

function checkWin(board, player, row, col) {
    const DIRECTIONS = [
        [[0, 1], [0, -1]]
     ];

    for (const directions of DIRECTIONS) {
        
        let count = 1;
     
        
        for (let k = 0; k < 2; k++) {
            const [dy, dx] = directions[k]

            let x = 0;  
            let y = 0; 


            for (let i = 1; i < 5; i++) {
                const newX = row + i * dx;
                const newY = col + i * dy;
        
                const id = calculateCellNumber(newX, newY, 10)
                const item = document.getElementById(id);  
    
                console.log("item", item)
                console.log("item", item)
                
            }
        }    
        if (count === 5) {
            console.log("x", x)
            console.log("y", y)


            const [dy1, dx1] = directions[0]
            const [dy2, dx2] = directions[1]
            


            
            for (let n = 1; n < x + 1; n++) {
                const newX = row + n * dx1;
                const newY = col + n * dy1;
                const id = calculateCellNumber(newX, newY, 10)
                const item1 = document.getElementById(id);  
                item1.classList.add("win")      
            }

            for (let m = 1; m < y+1; m++) {
                const newX = row + m * dx2;
                const newY = col + m * dy2;
                const id = calculateCellNumber(newX, newY, 10)
                const item2= document.getElementById(id);  
                item2.classList.add("win")      
            }

            const point = calculateCellNumber(row, col, 10)
            const itemPoint = document.getElementById(point);  
            itemPoint.classList.add("win")      
            console.log("itemPoint", itemPoint)

            return true;        
        }
    }

    return false; 
}





