// 编译阶段 首先 讲 形参 age 放入ao, 第5行忽略声明， 第7行 函数age 会将 普通变量 覆盖，第一次打印为function
// 执行阶段 将值赋给 function，第二个为20, 
function demo(age){
  console.log(age)
  var age = 20;
  console.log(age)
  function age() {
  }
  console.log(age())
}
demo(18)