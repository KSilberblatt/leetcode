/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

function findLadders(beginWord, endWord, wordList) {
    if (!wordList.includes(beginWord)){
      wordList.push(beginWord);
    }

    let visited = visitedInit(wordList);
    let tempVisited = visitedInit(wordList);
    let oneAwayHash = oneAwayHashF(wordList);
    // console.log(oneAwayHash);
    if (!wordList.includes(endWord)){
        return [];
    }
    let solutions = [];
    let solutionFound = [false, 0];
    let queue = [[beginWord, [beginWord]]];
    let moveLength = 1;
    while (queue.length > 0){
        let current = queue.shift();
        if (current[1].length > moveLength) {
          console.log("trying solutions of length " + current[1].length);
          moveLength = current[1].length;
          visited = Object.assign({}, tempVisited);
        }
        if (current[0] === endWord){
            solutionFound = [true, current[1].length];
            solutions.push(current[1]);
        }
        else {
            if (oneAwayHash[current[0]]){
              for (let i = 0; i < oneAwayHash[current[0]].length; i++){
                if (!visited[oneAwayHash[current[0]][i]]){
                  queue.push([oneAwayHash[current[0]][i],
                  current[1].concat([oneAwayHash[current[0]][i]])]);
                  tempVisited[oneAwayHash[current[0]][i]] = true;
                }
              }
            }
            if(solutionFound[0] && solutionFound[1] < current[1].length ){
                return solutions;
            }
        }
        // console.log(oneAwayHash[current[0]], current[0]);
    }
    return solutions;
}

function oneAwayHashF(wordList){
    let myHash = {};
    for (let i = 0; i < wordList.length; i++){
        for (let j = 0; j < wordList.length; j++){
            if (i !== j && wordDif(wordList[i], wordList[j]) === 1){
                if (!myHash[wordList[i]]){
                    myHash[wordList[i]] = [wordList[j]];
                }
                else {
                    myHash[wordList[i]].push(wordList[j]);
                }
            }
        }
    }
    return myHash;
}

function wordDif(word1, word2){
    let difference = 0;
    for (let i = 0; i < word1.length; i++){
        if (word1.charAt(i) !== word2.charAt(i)){
            difference++;
        }
    }
    return difference;
}

function visitedInit(wordList){
  let myHash = {};
  for (let i = 0; i < wordList.length; i++){
    myHash[wordList[i]] = false;
  }
  return myHash;
}
let beginWord = "a";
let endWord = "c";
let wordList = ["a", "b", "c"];

let beginWord2 = "qa";
let endWord2 = "sq";
let wordList2 = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];

console.log(findLadders(beginWord, endWord, wordList));
console.log(findLadders(beginWord2, endWord2, wordList2));
