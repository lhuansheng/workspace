
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
  async addArticle() {
    let tempArticle = this.ctx.request.body
    
    const result = await this.app.mysql.insert('article',tempArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId
    console.log(insertId,'id')
    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId:insertId
    }
  }
  async updateArticle() {
    let tempArticle = this.ctx.request.body
    const result = await this.app.mysql.update('article',tempArticle)
    const updateSuccess = result.affectedRows === 1
    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }
  async getArticleList() {
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.addTime as addTime, '+
    'article.view_count as view_count ,'+
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'ORDER BY article.id DESC '

const resList = await this.app.mysql.query(sql)
this.ctx.body={list:resList}
  }
  async delArticle() {
    // params是重 路由上获取的id
    let id = this.ctx.params.id
    const res = await this.app.mysql.delete('article',{'id':id})
    this.ctx.body={data:res}
  }

  
//根据文章ID得到文章详情，用于修改文章
async getArticleById(){
  let id = this.ctx.params.id

  let sql = 'SELECT article.id as id,'+
  'article.title as title,'+
  'article.introduce as introduce,'+
  'article.article_content as article_content,'+
  'article.addTime as addTime, '+
  'article.view_count as view_count ,'+
  'type.typeName as typeName ,'+
  'type.id as typeId '+
  'FROM article LEFT JOIN type ON article.type_id = type.Id '+
  'WHERE article.id='+id
  const result = await this.app.mysql.query(sql)
  this.ctx.body={data:result}
}
}
module.exports = MainController