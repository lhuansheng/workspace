var name = 'xiaoli'
function showName(){
  var name2 = 'lihua'
  console.log(name)
  // add 也是个变量 变量是个函数  遵守作用域规则
  function add(){
    console.log('嵌套',name3)
  }
  add()
}
// 块级作用域
{
  var name1 = 'lilei'
  name = 'lihua'
}
console.log(name1)
// console.log(name2)

showName()