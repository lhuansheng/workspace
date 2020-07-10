(function () {
  'use strict';

  const add = (a,b)=>{
    return a + b
  };

  // 只用到了 add, 为了优化代码体积，可以直接删除 divide
  // rollup(打包工具)
  console.log(add(3, 4));

}());
