function countIslands(a) {
	let numIslands = 0;
		for (let i = 0; i < a.length; i++){
			for (let j = 0; j < a[0].length; j++) {
				if (a[i][j] === 'x'){
					markIsland(a, i, j);
					numIslands++;
				}
			}
		}
	return numIslands;
}

function markIsland(a, i, j) {
	let queue = [[i, j]];
	while (queue.length > 0){
		let current = queue.shift();
		if (current[0] > 0){
			if (a[current[0] - 1][current[1]] === 'x'){
				a[current[0] - 1][current[1]] = 'z';
				queue.push([current[0] - 1, current[1]]);
			}
		}
  if (current[0] < a.length - 1){
  			if (a[current[0] + 1][current[1]] === 'x'){
  				a[current[0] + 1][current[1]] = 'z';
  				queue.push([current[0] + 1, current[1]]);
  			}
  		}
  		if (current[1] > 0){
  			if (a[current[0]][current[1] - 1] === 'x'){
  				a[current[0]][current[1] - 1] = 'z';
  				queue.push([current[0], current[1] - 1]);
  			}
  		}
  if (current[1] < a[0].length - 1){
  			if (a[current[0]][current[1] + 1] === 'x'){
  				a[current[0]][current[1] + 1] = 'z';
  				queue.push([current[0], current[1] + 1]);
  			}
  		}
  }
}

let example = [ ['0', '0', '0', '0', '0', '0'],
                ['0', '0', 'x', 'x', '0', '0'],
                ['0', '0', '0', '0', 'x', '0'],
                ['0', '0', '0', '0', '0', 'x']];

console.log(countIslands(example));
