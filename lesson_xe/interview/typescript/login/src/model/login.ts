// entity 
export interface LoginEntity {
  login: string
  password: string
}
// 返回值满足 下面两个字段
export const createEmptyLogin = (): LoginEntity => ({
  login:"",
  password:""
})