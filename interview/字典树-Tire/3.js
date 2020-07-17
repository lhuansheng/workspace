

let state = {
  name:'lilei',
  age:18
}
let str = 'my name is {name}, age is {age}'

function compile(obj,tql){
  let reg = /\{(\w+)\}/i
  // ...arg可以把匹配到的信息列出来
  tql = tql.replace(reg,(...arg) => {
    console.log(arg)
    let key = arg[1]
    return obj[key]
  })


 console.log(tql)
  return tql
}
compile(state,str)
// console.log(compile(state,str))