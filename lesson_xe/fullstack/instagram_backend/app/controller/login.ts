import {Controller} from 'egg'

class LoginController extends Controller {  //面向对象 阿里让新手去做开发
  public async index() {
    // JSON
    this.ctx.body = JSON.stringify({
      msg:'登陆成功'
    })
  }
  
}

export default LoginController