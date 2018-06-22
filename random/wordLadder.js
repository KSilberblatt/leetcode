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
