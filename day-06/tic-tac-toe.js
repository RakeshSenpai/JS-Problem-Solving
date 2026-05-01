const prompt = require("prompt-sync")()

function makeMove(turn, baord){
    while(true){
    const row = prompt("Enter row: ")
    const col = prompt("Enter col: ")

    if(isNaN(row) || row < 1 || row > 3)console.log("Invalid row")
    else if(isNaN(col) || col < 1 || col > 3)console.log("Invalid column")
    else if(baord[row - 1][col - 1] !== " ")console.log("Invalid Position")
        else{
            baord[row - 1][col - 1] = turn
            break;
    }

    }
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

makeMove("X" , board)
console.log(board)
makeMove("0", board)
console.log(board)