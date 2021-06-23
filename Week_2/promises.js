console.clear();

//How a promise is constructed:
// var promise = new Promise(function(resolve, reject) {
//   /* Do something, possibly async, then... */

//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

//How the promise above is used:
// promise.then(
//   function (result) {
//     console.log(result); // "Success message!"
//   },
//   function (err) {
//     console.log(err); // "Error object + message!"
//   }
// );

//2 sec delay and then resolve with string
new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Resolved!"), 2000)
}).then((result) => {
  console.log(result);
})

//3 sec delay and then log 'ABCD' in order
new Promise(function (resolve, reject) {
  setTimeout(() => resolve('A'), 3000)
}).then((result) => {
  console.log('Result 1:', result);
  return `${result} B`;
}).then((result) => {
  console.log('Result 2:', result);
  return `${result} C`;
}).then((result) => {
  console.log('Result 3:', result);
  return `${result} D`;
}).then((result) => {
  console.log('Result 4:', result);
  return result;
})

console.log('Happening asynchronously!')

//Const x and y are not equal, causing an error that jumps to catch block
var promise = new Promise(function (resolve, reject) {
  const x = "Galvanize";
  const y = "galvanize";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success! You are a Galvanize student!");
  })
  .catch(function () {
    console.log("Some error has occured");
  });

//5 sec delay and then log both strings
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(5000)
  .then(() => console.log("Hello!"))
  .then(() => console.log("Goodbye!"));