/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    let visited = [].fill(0, wordList.length, false);
    if (!wordList.includes(endWord)){
        return 0;
    }
    let queue = [[beginWord, 1]];
    while (queue.length > 0){
        let current = queue.shift();
        if (current[0] === endWord){
            return current[1];
        }
        for (let i = 0; i < wordList.length; i++){
            if (wordDif(current[0], wordList[i]) === 1 && !visited[i]){
                queue.push([wordList[i], current[1] + 1]);
                visited[i] = true;
            }
        }
    }
    return 0;
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

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
let beginWord2 = "qa";
let endWord2 = "sq";
let wordList2 = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
console.log(ladderLength(beginWord2, endWord2, wordList2));
