console.clear();

//Using the concept of callbacks, write the exercise function so that result will equal 42.

function exercise (value, f) {
 return f(value);
}

var a = exercise(10, function (x) {
  return x + 2;
});

var b = exercise(15, function (x) {
  return x * 2;
});

var result = a + b;
console.log(result)
