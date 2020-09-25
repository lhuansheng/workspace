module.exports = options =>{
  return async function adminauth(ctx,next){
    //   console.log(2,ctx.session.openId)
    // console.log('aaaaaaaaaaaaa')
      // console.log(1, process.openId)
      // 如果有session,才运行你执行操作
      // let openId = localStorage.getItem('openId')
      // console.log(openId,'111')
      if(process.openId){
          await next()
      }else{
          ctx.body={data:'没有登录'}
      }
  }
}
