
/* 
AO {a: 1}  Active Object
JS 基于原型的面向对象
变量查找？ 冒泡，首先查询当前作用域

*/
function func(){
  var a = 2;
  var a = 1;
  console.log(a)
}
func();