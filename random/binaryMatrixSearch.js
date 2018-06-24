/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return searchSubMatrix(matrix, target, 0, 0, matrix.length - 1, matrix[0].length - 1);
};

function searchSubMatrix(matrix, target, minRow, minCol, maxRow, maxCol){
    if(minRow > maxRow && minCol > maxCol){ return false; }
    if (target === matrix[maxRow][maxCol]){ return true; }
    minRow = findMinRow(matrix, target, minCol, minRow, maxRow);
    minCol = findMinCol(matrix, target, minRow, minCol, maxCol);
    maxRow = findMaxRow(matrix, target, minCol, minRow, maxRow);
    maxCol = findMaxRow(matrix, target, minRow, minCol, maxCol);
    return searchSubMatrix(matrix, target, minRow, minCol, maxRow, maxCol);
}

function findMaxCol(matrix, target, row, start, end){
    let result = binarySearchRow(matrix[row], target, start, end);
    return result; //might find target
}

function findMaxRow(matrix, target, col, start, end){
    let result = binarySearchCol(matrix, col, target, start, end);
    return result; //might find target
}

function findMinCol(matrix, target, row, start, end){
    let result = binarySearchRow(matrix[row], target, start, end);
    return result;
}

function findMinRow(matrix, target, col, start, end){
    let result = binarySearchCol(matrix, col, target, start, end);
    return result;
}


function binarySearchRow(arr, target, start, end){
    if(start > end) { return start; }
    let mid = Math.floor((end+start) / 2);
    if (target === arr[mid]) { return mid; }
    if (target < arr[mid]) { return binarySearchRow(arr, target, start, mid - 1); }
    return binarySearchRow(arr, target, start + 1, end);

}

function binarySearchCol(matrix, col, target, start, end){
    if(start > end) { return start; }
    let mid = Math.floor((end+start) / 2);
    console.log("Mid: ", mid, "\n start: ", start, "\n col: ", col );
    if (target === matrix[col][mid]) { return mid; }
    if (target < matrix[col][mid]) { return binarySearchRow(matrix, col, target, start, mid - 1); }
    return binarySearchCol(matrix, col, target, start + 1, end);

}

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 5;

console.log(searchMatrix(matrix, target));
