function binarySearch (arr, target) {
  let lower = 0;
  let upper = arr.length - 1;
  let middle = Math.floor((lower + upper) / 2);

  while (arr[middle] !== target && lower < upper) {
    if (target < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
    middle = Math.floor((lower + upper) / 2);
  }

  if ((arr[middle] === target)) {
    return middle;
  }
  return -1;
}

let testArr = [0, 1,2,4,5,6,7,8,9,10,16,20,100];

console.log(binarySearch(testArr, 3));
console.log(binarySearch(testArr, 2));
console.log(binarySearch(testArr, 7));
console.log(binarySearch(testArr, 17));
console.log(binarySearch(testArr, 1));
console.log(binarySearch(testArr, 0));
console.log(binarySearch(testArr, 100));
console.log(binarySearch(testArr, 101));
