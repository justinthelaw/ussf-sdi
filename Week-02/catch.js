console.clear();

// new Promise((resolve, reject) => {
//   console.log("Initial");
//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");
//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });

// new Promise(function (resolve, reject) {
//   var x = Math.random();
//   return x < 0.5 ? resolve() : reject([x, 1]);
// })
//   .then(function () {
//     return new Promise(function (resolve, reject) {
//       var y = Math.random();
//       return y < 0.5 ? resolve() : reject([y, 2]);
//     });
//   })
//   .then(function () {
//     console.log("Both promises sucessfully resolved!");
//   })
//   .catch(function (val) {
//     console.log("Promise #" + val[1] + " rejected, value was " + val[0]);
//   });

//Refactor the following to use promises and print 1,2,3 in order
function log(val) {
  console.log(val);
}

function randomDelay(log, val, resolve) {
  setTimeout(function () {
    log(val);
    if (resolve) resolve(val)
  }, Math.random() * 3000);
}

// function randomDelay(cb, val) {
//   setTimeout(function () {
//     cb(val);
//   }, Math.random() * 3000);
// }

// randomDelay(log, 1);
// randomDelay(log, 2);
// randomDelay(log, 3);

const randomDelayedPromise = (cb, val) => {
  return new Promise ( (resolve) => {
    randomDelay(cb, val, resolve);
    }
  )
}

//Method w/o Promise.all
// randomDelayedPromise(log, 1)
//   .then(resolve => randomDelayedPromise(log, 2))
//   .then(resolve => randomDelayedPromise(log, 3))

//Method w/ Promise.all
Promise.all([
             randomDelayedPromise(log, 1),
             randomDelayedPromise(log, 2),
             randomDelayedPromise(log, 3)
            ])
        .then((values) => {console.log(values);}
)

