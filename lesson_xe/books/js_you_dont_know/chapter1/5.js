// 'use strict'
// function init(a){
//   // 如果一个变量没有声明，会成为一个全局变量，可能会覆盖外面的变量
//   // b 不能跟 内部函数 ao 挂钩，只能作为全局变量
//   b = a + 3
//   console.log(b)
// }
// init(2)


var a = 1;
function b(){
    a = 10;
    
    function a(){
        console.log(a);
    }	
    
}
let c = b()
c()
console.log(a);



