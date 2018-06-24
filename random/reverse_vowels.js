function reverseVowels(word){
  let leftPointer = 0;
  let rightPointer = word.length;
  let wordArr = word.split("");
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  while (leftPointer < rightPointer){
    while(leftPointer < rightPointer &&
      !vowels.includes(word.charAt(leftPointer))){
        leftPointer++;
    }
    while(leftPointer < rightPointer &&
      !vowels.includes(word.charAt(rightPointer))){
        rightPointer--;
    }
    let temp = wordArr[leftPointer];
    wordArr[leftPointer] = wordArr[rightPointer];
    wordArr[rightPointer] = temp;
    leftPointer++;
    rightPointer++;
  }
  return wordArr.join("");
}

console.log(reverseVowels("united state"));
