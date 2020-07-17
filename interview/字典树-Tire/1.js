// let re= /(\d{4})-(1[0-2]|0[1-9])-(0[1-9]|[12]\d|3[01])/
// // console.log(re.test('2017-12-12'))
// console.log('2017-12-12'.match(re))
// let reg = /[a-z]/g
// let str = 'abc'
// console.log(reg.exec(str))
// console.log(reg.exec(str))
// console.log(reg.exec(str))
// console.log(reg.exec(str))
// [ 'a', index: 0, input: 'abc', groups: undefined ]
// [ 'b', index: 1, input: 'abc', groups: undefined ]
// [ 'c', index: 2, input: 'abc', groups: undefined ]
// null


let state = {
  name:'lilei',
  age:18
}
let str = 'my name is {name}, age is {age}'
function compile(obj,tql){
  // 正则里面加括号能够分组，exec 可以获取分组里面的内容
  // 没有g exec 每次都是匹配第一个，有 g 每次调用exec会查找后面一个
  let reg = /\{([0-9A-Z]+)\}/ig
  // 方法1
  // for(let item in obj){
  //   tql =  tql.replace(reg,obj[item])
  // }
  // 方法2
  let info = reg.exec(str)
  while(info){
    let key = info[1]
    tql = tql.replace(`${info[0]}`,obj[key])
    info = reg.exec(str)
  }
 console.log(tql)
  return tql
}
compile(state,str)
// console.log(compile(state,str))