function solution(S, T) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length < T.length){
      return false;
    }
    let newString = S;
    let placeCounter = 0;
    while (newString.length >= T.length && placeCounter < T.length){
      if (newString.charAt(placeCounter) === T.charAt(placeCounter)){
        placeCounter++;
      }
      else {
        newString = newString.substring(0, placeCounter) + newString.substring(placeCounter + 1);
      }
      if (newString.startsWith(T)){
        return 1;
      }
    }
    if (newString === T){
      return 1;
    }
    return 0;
}

let T ="abcd";
let S ="abd";
console.log(solution(S,T));
