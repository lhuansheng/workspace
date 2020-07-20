// Promise.resolve(1).then(console.log);  // ??
//   let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//      // ??
//      console.log('=========')
//   console.log( arr.map(parseInt))
//   console.log(parseInt( 2 , 11 ))
// https://juejin.im/post/5e0337d1f265da33e82bccaa  parseInt 解法



// Promise.all 当所有的 promise 都完成的时候才认为 resolve
  // 有一个 为 reject 就为 reject
  let p1 = Promise.resolve(1);
  let p2 = Promise.resolve(2);
  let p3 = Promise.reject(32)
  const  promises = [p1,p2,p3]
  // Promise.all(promises).then(console.log)
  Promise.allSettled(promises)
  .then((results) => { results.forEach(element => {console.log(element)})})
  // 要你完成：不管最终的他们是resolve，还是 reject。
  // 我只想要最终的，状态变化完的结果(成功/失败)，都要拿到，怎么办。
  // allSellted es10
 