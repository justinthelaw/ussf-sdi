//Count every vowel (a, e, i, o, u) in a sentence (lower case, spaces)

function getCount(str) {
  var vowelsCount = 0;

  let strArr = str.split("");
  strArr.forEach((element) => {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

console.log(getCount("abracadabra"));
console.log(getCount("wylan lawbringer"));
