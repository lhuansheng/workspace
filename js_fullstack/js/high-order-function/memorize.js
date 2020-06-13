// 递归：缓存
// 如果是纯函数：输入相同 输出也相同
// f(x) = x + 10
// f(10) = 20  // 10 -》 计算出来一个 结果 20，缓存一下 { 10: 20 }
// f(10) = 20  // 10 -》 没有必要计算了, 缓存里面取 
// f(10) = 20  // 10 -》 没有必要计算了, 缓存里面取 
// f(20)


let cache1 = {};
function add10(x) {
  if (cache1[x] !== undefined) {
    console.log('取出缓存')
    return cache1[x];
  }
  let res = x + 10;
  // k - v
  console.log('经过计算了')
  cache1[x] = res;
  return res;
}
console.log(add10(10))
console.log(add10(10))
console.log(add10(10))


// let ten = 10;
// function add10(x) {
//   return x + ten;
// }
// add10(10)  // 20  
// ten = 11
// add10(10)  // 21  


// 多个函数都要缓存呢？
let cache2 = {};
function buildurl(url, obj) {
  let k = url + JSON.stringify(obj)
  console.log(k);
  if (cache2[k] !== undefined) {
    console.log(1);
    return cache2[k];
  }
  let parts = []
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
  }
  let res = `${url}?${parts.join('&')}`
  cache2[k] = res;
  console.log(2);
  return res;
}
console.log(buildurl('api.com', {a: 1, b: 2}))
console.log(buildurl('api.com', {a: 1, b: 2}))
console.log(buildurl('api.com', {a: 1, b: 2, c: 3}))


// 雷同 ？封装
// 1. 不同 通过参数传进来, 功能不一样， 
// 2. 公用 内部: 缓存(2. 1 let cache; 2.2 if() {}  2.3 cache[] = res)
// 3. 过程： 上面提到的 2.1 2.2 2.3 这三个步骤， 完成缓存的一个过程
// 2.1 2.2 2.3 多个地方都需要这样一个逻辑 过程 (一段逻辑)
// 所以封装 2.1 2.2 2.3 
// 月影 函数式编程 是过程抽象

// 输入：是一个函数
function memorize(func){
  let cache = {}
  return function(...args){
    let k = JSON.stringify(args)
    if(cache[k] !== undefined) return cache[k]
    // 计算 缓存里面没有
    let res = func(...args)  // 函数调用 需要参数
    cache[k] = res
    return res
  }

}
// _add 1o 纯函数 
let memeo_add10 = memorize(_add10)
// memo_add10 变成了具有缓存功能的函数
memorize(_buildurl)
