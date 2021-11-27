function handleAsyncOps() {
  let promise1 = Promise.resolve(42),
      promise2 = 88,
      promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000)

        if(promise2 === 99) {
          resolve('promise2 is 88!');
        } else {
          reject()
        }
      })
  Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
  }).catch(console.log('promise2 is not 88!'))
}

handleAsyncOps();