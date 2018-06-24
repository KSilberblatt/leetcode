function overlappingIntervals(i1, i2) {
	return (i1[0] >= i2[0] && i1[0] < i2[1]) || (i1[1] <= i2[1] && i1[1] > i2[0]) || (i2[0] >= i1[0] && i2[0] < i1[1]);
}

function mergeIntervals(i1, i2) {
	let min = Math.min(i1[0], i2[0]);
	let max = Math.max(i1[1], i2[1]);
	return [min, max];
}

function insertInterval (arr, newInterval){
	let overlap = false;
	let overlapIdx = 0;
  if (newInterval[1] <= arr[0][0]){
    return [newInterval].concat(arr);
  }
  if (newInterval[0] >= arr[arr.length - 1][1]){
    arr.push(newInterval);
    return arr;
  }
	for (let i = 0; i < arr.length; i++) {
		if (overlappingIntervals(arr[i], newInterval)){
			arr[i] = mergeIntervals(arr[i], newInterval);
			overlap = true;
			overlapIdx = i;
			break;
		}
		else if (i !== 0 && arr[i - 1][1] <= newInterval[0] && newInterval[1] <= arr[i][0]){
			let temp = arr.slice(0, i);
      temp.push(newInterval);
      arr = temp.concat(arr.slice(i));
			break;
		}
}
if (overlap){
	return compressIntervals(arr, overlapIdx);
}
return arr;
}

function compressIntervals(arr, overlapIdx){
	for (let i = overlapIdx; i < arr.length - 2; i++){
		if (overlappingIntervals(arr[i], arr[i + 1])){
			arr[i] = mergeIntervals(arr[i], arr[i + 1]);
			return compressIntervals(arr.slice(0, i+1).concat(arr.slice(i+2)), i);
}
	}
	if (overlappingIntervals(arr[arr.length - 2], arr[arr.length  - 1])){
		arr[arr.length - 2] = mergeIntervals(arr[arr.length - 2], arr[arr.length  - 1]);
		return arr.slice(0, arr.length - 1);
  }
return arr;
}

let testArr = [[1,2],[3,5],[6,7],[8,10],[12,16]];

console.log(insertInterval(testArr, [12, 15]));
