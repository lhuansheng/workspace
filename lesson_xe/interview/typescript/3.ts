// 面向接口的的编程时一切高级编程范式的开端 使用设计模式 
interface IUser {
  name: string;
  age: number;
}

const getUser = (user: IUser): string => {
  return `name: ${user.name},age: ${user.age}` 
}
console.log(getUser({name:'koa',age:18}))
