import { observable} from 'mobx'
class Auth {
  // 没有和页面绑定在一起
  // 加上 observer 可以实时监听修改，重新渲染
  @observable isLogin = false; 
  login() {
    this.isLogin = true
  }
  logout() {
    this.login = false
  }
}

export default new Auth();