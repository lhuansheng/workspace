// LHS RHS 变量查找， 就在哪一行相关
function foo(a){
  var b = a
  return a + b
}
var c = foo(2)
/* 
c=... lhs
foo(2) rhs
a=2 lhs
b=a lhs  a rhs
a b rhs
*/
