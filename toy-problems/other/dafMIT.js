function func(a, b) {
  a += 1;
  b.push(1);
}

const a = 0;
const b = [];
func(a, b);
// console.log(a, b);

const f = (n) => (n <= 1 ? 1 : n * f(n - 1));
// console.log(f(4));

const promises = [3, 2, 1].map(
  (d) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(d);
      }, d * 1000);
    })
);

Promise.race(promises).then((val) => {
  console.log(val);
})
