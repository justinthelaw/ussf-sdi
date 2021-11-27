// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Example: Stop gninnipS My sdroW!

function spinWords(string) {
  let strArr = string.split(" ");
  let resultArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length < 5) {
      resultArr.push(strArr[i]);
    } else {
      let wordArr = strArr[i].split("");
      let revWordArr = [];
      for (let j = wordArr.length; j >= 0; j--) {
        revWordArr.push(wordArr[j]);
      }
      resultArr.push(revWordArr.join(""));
    }
  }
  return resultArr.join(" ").trim();
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));
