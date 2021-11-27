//Given a string, replace every letter with its position in the alphabet - if anything in the text isn't a letter, ignore it and don't return it

function alphabetPosition(text) {
  text = text.toLowerCase();
  let alphaNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let numArr = [];
  for (let i = 0; i < text.length; i++) {
    if (alphaNum[text[i]]) {
      numArr.push(alphaNum[text[i]]);
    } else {
      continue;
    }
  }
  return numArr.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
