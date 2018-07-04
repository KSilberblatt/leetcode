/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) { return false; }
  return checkSpot(matrix, target, 0, matrix[0].length - 1);
};

function checkSpot (matrix, target, row, col){

  if (row === matrix.length - 1 && col === 0) {return matrix[row][col] === target; }
  if (matrix[row][col] > target && col > 0 ) {
    return checkSpot (matrix, target, row, col - 1);
  }
  if (matrix[row][col] < target && row < matrix.length - 1){
    return checkSpot (matrix, target, row + 1, col);
  }
  return matrix[row][col] === target;
}
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 5;
