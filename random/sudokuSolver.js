/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      if (board[i][j] === "."){
        let squarePosablities = squarePastabilities(board, [i,j]);
        if (squarePosablities.length === 0) { return; }
        for (let k =0; k < squarePosablities.length; k++){
          board[i][j] = squarePosablities[k].toString();
          solveSudoku(board);
          if (filledBoard(board)) { return; }

        }
        board[i][j] = ".";
        return;
      }
    }
  }
};

function filledBoard(board){
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      if (board[i][j] === "."){ return false;}
    }
  }
  return true;
}


function posToString(pos){
    return pos[0]+","+pos[1];
}
function posStrToArr(pos){
    return [pos.charAt(0), pos.charAt(1)];
}

function pastabilities(board){
    let pastabilitiesHash = {};
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (board[i][j] === "."){
                pastabilitiesHash[i + "," + j] = squarePastabilities(board, [i, j]);
            }
        }
    }
    return pastabilitiesHash;
}

function squarePastabilities(board, pos){
    let pastabilitiesArr = [];
    for(let i = 1; i < 10; i++){
        board[pos[0]][pos[1]] = i;
        if (validPos(board, pos)){
            pastabilitiesArr.push(i);
        }
    }
    board[pos[0]][pos[1]] = ".";
    return pastabilitiesArr;
}

function validPos(board, pos){
    if (!validRow(board, pos[0])){ return false; }
    if (!validCol(board, pos[1])){ return false; }
    if (!validSquare(board, [Math.floor(pos[0] / 3), Math.floor(pos[1] / 3)])){
        return false;
    }
    return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++){
        if (!validRow(board, i)){
            return false;
        }
        if (!validCol(board, i)){
            return false;
        }
    }
    return validSquares(board);
};

function validRow(board, row) {
    let counterHash = {};
    for (let i = 0; i < 9; i++){
        if(numberChecker(board[row][i], counterHash)){
            return false;
        }
    }
    return true;
}

function validCol(board, col){
    let counterHash = {};
    for (let i = 0; i < 9; i++){
        if(numberChecker(board[i][col], counterHash)){
            return false;
        }
    }
    return true;
}

function validSquares(board){
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (!validSquare(board, [i, j])){
                return false;
            }
        }
    }
    return true;
}

function validSquare(board, square){
    let counterHash = {};
    for (let i = square[0] * 3; i < square[0] * 3 + 3; i++){
        for (let j = square[1] * 3; j < square[1]* 3 + 3; j++){
            if (numberChecker(board[i][j], counterHash)){
                return false;
            }
        }
    }
    return true;
}

function numberChecker(number, counterHash){
    if (counterHash[number]) { return true;}
    if (number === ".") { return false; }
    counterHash[number] = true;
    return false;
}

function prettyPrint(board){
  let line = "";
  for(let i = 0; i < 9; i++){
    if (i % 3 === 0){ console.log("\t-------------------------");}
    for(let j = 0; j < 9; j++){
      if (j === 0) { line += "\t| " + board[i][j];}
      else if (j % 3 === 2) { line += " " + board[i][j] + " |";}
      else { line += " " + board[i][j];}
    }
    console.log(line);
    line = "";
  }
  console.log("\t-------------------------");
}

// let example = [["5","3",".",".","7",".",".",".","."], ["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

let example2 = [["7","3",".",".",".",".",".",".","2"],
                [".","6",".","5",".",".",".",".","."],
                [".",".",".",".","3","1",".",".","4"],
                [".",".",".",".",".","6",".","9","."],
                ["5","1",".","8",".","3",".","7","6"],
                [".","8",".","7",".",".",".",".","."],
                ["8",".",".","3","1",".",".",".","."],
                [".",".",".",".",".","5",".","3","."],
                ["4",".",".",".",".",".",".","2","7"]];
solveSudoku(example2);
console.log(example2);

console.log("\n");
prettyPrint(example2);
