

let state = {
  name:'lilei',
  age:18
}
let str = 'my name is {name}, age is {age}'

function compile(obj,tql){
  let reg = /\{(\w+)\}/i
  // 方法1
  // 正则里面如果有 (),按照顺序，$1 $2 ,, 可以按顺序匹配所有括号里面的值
  for(let item in obj){
    tql =  tql.replace(reg,obj[item])
  }


 console.log(tql)
  return tql
}
compile(state,str)
// console.log(compile(state,str))