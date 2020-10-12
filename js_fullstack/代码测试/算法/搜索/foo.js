// const foo = (function() {
//   let count = 1
//   function help() {
//     console.log(count)
//    return count++
//   }
//   help.reset = function() {
//     count = 1
//   }
//   return help
// })()
const foo = (function() {
  let count = 1
  function incre() {
    console.log(count)
    return count++
  }
  incre.reset = function() {
    count = 1
  }
  return incre
})()


// 实现一个foo函数, 返回自身被调用的次数 可以这么使用:
a = foo();

b = foo();
c = foo();
// 此时  a 的值是1;b的值是2;c的值是3;
// foo.reset();
// d = foo(); // d的值是1, 说明foo重新开始计数;