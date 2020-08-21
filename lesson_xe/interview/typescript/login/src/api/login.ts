import { LoginEntity,createEmptyLogin } from './../model/login';
// 泛型，泛指里面props等类型，   promise被解决之后的boolean类型     React.Fc<>
export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> => {
 return new Promise((resolve) => {
   setTimeout(() => {
     resolve(loginInfo.login === 'admin'&& loginInfo.password === 'test')
   }, 500);
 })
}
