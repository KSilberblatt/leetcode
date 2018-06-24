function findShift(arr){
  return findShiftHelper(0, arr.length - 1, arr);
}

function findShiftHelper(start, end, arr){
  console.log("Start: " + arr[start] + " at pos " + start);
  console.log("End: " + arr[end] + " at pos " + end);

  if (start === end) {return start; }
  if (start + 1 === end) { return end; }
  let middle = Math.floor((end + start) / 2);
  if (isShifted(start, middle, arr)){
    return findShiftHelper(start, middle, arr);
  }
  return findShiftHelper(middle, end, arr);
}

function isShifted(start, end, arr){
  return arr[start] > arr[end];
}

function findInShiftedArr(arr, target){
  let shift = findShift(arr);
  if (arr[shift] <= target && arr[arr.length - 1] >= target){
    return binarySearch(shift, arr.length - 1, arr, target);
  }
  return binarySearch(0, shift, arr, target);

}

function binarySearch(start, end, arr, target){
  let middle = Math.floor((end + start) / 2);
  if (arr[middle] === target){ return middle; }
  if (end === start) { return -1; }
  if (arr[middle] < target){
    return binarySearch(middle, end, arr, target);
  }
  return binarySearch(start, middle, arr, target);
}

let example = [3.5,4,5,6,7,8,1,2,3];
console.log(findShift(example));
