function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = S.toUpperCase().split("-");
    let myString = "";
    for (let i = 0; i < arr.length; i++) {
      myString += arr[i];
    }
    let newString = "";
    let counter = 1;
    for (let i = myString.length - 1; i >= 0; i--) {
      newString = myString[i] + newString;
      if (counter % K === 0 && i !== 0){
        newString = "-" + newString;
      }
      counter++;
    }
    return newString;
}

console.log(solution("2-4A0r7-4k", 4));
