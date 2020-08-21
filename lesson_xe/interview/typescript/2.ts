const getInfo = (user:{name: string,age: number}): string => {
  return `name: ${user.name},age: ${user.age}`
}
console.log(getInfo({name:'koa',age:18}))