module.exports = app => {
  const {router,controller} = app
  var adminauth = app.middleware.adminauth()
  // 前台可以访问到这些路由地址  (它似乎是把这个接口给了后端的登陆页面，给他验证，如果正确，则通过)
  router.get('/admin/index',controller.admin.main.index)
  router.post('/admin/checkOpenId',controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo',adminauth,controller.admin.main.getTypeInfo)
}