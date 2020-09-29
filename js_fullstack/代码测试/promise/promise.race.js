const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.myAll = function (promises) {
  let ans = []
  return new Promise((resolve,reject) => {
    promises.forEach(e => {
      Promise
      .resolve(e).then((res) => {
        resolve(res)
      })
      .catch(err=> {
        reject(err)
      })
      
    });
  })
}

Promise.myAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

