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
function compile(obj,str){
  let regName = /{name}/
  let regAge = /{age}/
  str =  str.replace(regName,obj.name)
  str =  str.replace(regAge,obj.age)
  return str
}
console.log(compile(state,str))