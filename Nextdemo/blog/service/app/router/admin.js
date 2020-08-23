module.exports = app => {
  const {router,controller} = app
  var adminauth = app.middleware.adminauth()
  // 前台可以访问到这些路由地址  (它似乎是把这个接口给了后端的登陆页面，给他验证，如果正确，则通过)
  router.get('/admin/index',controller.admin.main.index)
  router.post('/admin/checkOpenId',controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo',adminauth,controller.admin.main.getTypeInfo)
  router.post('/admin/addArticle',adminauth,controller.admin.main.addArticle)
  router.post('/admin/updateArticle',adminauth,controller.admin.main.updateArticle)
  router.get('/admin/getArticleList',adminauth,controller.admin.main.getArticleList)
  router.get('/admin/delArticle/:id',adminauth,controller.admin.main.delArticle)
  router.get('/admin/getArticleById/:id',adminauth,controller.admin.main.getArticleById)
}