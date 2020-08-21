
'use strict';

const Controller = require('egg').Controller

class MainController extends Controller {
  // 这些是路由中台从服务器获取的数据分配给路由，前台从路由地址可以获取这些数据
  async index() {
    // 首页的文章列表数据
    this.ctx.body = 'hihihi api'
  }
  async checkLogin(){
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    console.log(this.ctx.request.body,userName,password)
    // 从数据库匹配后端登陆页面的密码，如果正确，则传 {'data':'登录成功','openId':openId}给它
    const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName +
                "' AND password = '"+password+"'"

    const res = await this.app.mysql.query(sql)
    if(res.length>0){
        //登录成功,进行session缓存
        let openId=new Date().getTime()
        // this.ctx.session.openId= openId
        // console.log(this.ctx.openId)
        process.openId = openId
        this.ctx.body={data:'登录成功',openId:openId}

    }else{
        this.ctx.body={data:'登录失败'}
    } 
  }
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {data: resType}
  }
}
module.exports = MainController