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
    const directions = [
        [0, 1], // kiẻm tra chiều +x 
        [0, -1], // kiểm tra chiều -x 
        [1, 0], // kiểu tra chiều +y
        [-1, 0], // kiểu tra chiều -y
        [1, 1], // chéo x+, y+
        [-1, 1], // chéo x+,  y-, 
        [1, -1], // chéo x-, y+ 
        [-1, -1]  // chéo x-, y-  
    ];



    for (const direction of directions) {
        const [dy, dx] = direction;
        let count = 1;
       
        for (let i = 1; i < 10; i++) {
            const newX = row + i * dx;
            const newY = col + i * dy;
           
            const id = calculateCellNumber(newX, newY, 10)
            const item = document.getElementById(id);  
            
            console.log("item", item)


            if (item !== null) {
                const containsPlayer = item.firstChild?.classList.contains(player)
                
                if (containsPlayer) {
                    console.log("count", count)
                    count++;

                } else {
                    break
                }   
            } else {
                break;
            }


            if (count === 5) {
                for (let i = 0; i < 5; i++) {
                    const newX = row + i * dx;
                    const newY = col + i * dy;
                    const id = calculateCellNumber(newX, newY, 10)
                    const element = document.getElementById(id);    
                    element.classList.add("win")        
                }
    
                
                return true; 
                
            }
        }

     
    }

    return false; 
}




const DIRECTIONS = [
   [[0, 1], [0, -1]]
];


const NEW_DIRECTIONS = [
    [0, 1], // kiẻm tra chiều +x 
    [0, -1], // kiểm tra chiều -x 
    [1, 0], // kiểu tra chiều +y
    [-1, 0], // kiểu tra chiều -y
    [1, 1], // chéo x+, y+
    [-1, 1], // chéo x+,  y-, 
    [1, -1], // chéo x-, y+ 
    [-1, -1]  // chéo x-, y-  
];