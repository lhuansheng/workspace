// 类型 定义文件  React Fc
// 类型声明 和 业务分开来
interface IUser {
  name: string;
  age: number;
}

type IuserInfoFunc = (user: IUser) => string;

const getUserInfo: IuserInfoFunc = (user) => {
  return `name: ${user.name},age: ${user.age}`
}