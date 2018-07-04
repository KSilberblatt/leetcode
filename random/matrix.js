/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let result = [];
    let unsolvedPositions = [];
    matrixInit();
    // let visited = [];
    // for (let i = 0; i < matrix.length; i++){
    //     result[i] = Array(matrix[i].length);
    //     visited[i] = Array(matrix[i].length);
    //     visited[i].fill(false);
    // }
    while(unsolvedPositions.length !== 0){

    }
    return result;
};

function matrixInit(matrix, result, unsolvedPositions){
  for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
          if(matrix[j][i] === 0){
            result[j][i] = 0;
          }
          else if(smallestNeighbor(matrix, j, i) === 0){
            result[j][i] = 1;
          }
          else {
            result[j][i] = 'x';
            unsolvedPositions.push([j,i]);
          }
      }
  }
}

function fillSpot(matrix, x, y, newMatrix, visited){
  if (matrix[y][x] === 0){
    newMatrix[y][x] = 0;
    visited[y][x] = true;
  }


}

function smallestNeighbor(matrix, x, y){
  let myArr = [];
  if (validPos(matrix, x - 1, y)){ myArr.push(matrix[y][x-1]); }
  if (validPos(matrix, x + 1, y)){ myArr.push(matrix[y][x+1]); }
  if (validPos(matrix, x, y - 1)){ myArr.push(matrix[y-1][x]); }
  if (validPos(matrix, x, y + 1)){ myArr.push(matrix[y+1][x]); }

  let min;
  for (let i = 0; i < myArr.length; i++){
    if (isNumber(myArr[i])){
      if (min){
        min = Math.min(min, myArr[i]);
      }
      else{ min = myArr[i]; }
    }
  }
  if (min){return min;}
  return -1;
}

function validPos(matrix, x, y){
  return x >= 0 && y >= 0 && y < matrix.length && x < matrix[y].length;
}
function isNumber(matrix, x, y){
  return typeof(matrix[x][y]) === "number";
}


let example = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(example));
