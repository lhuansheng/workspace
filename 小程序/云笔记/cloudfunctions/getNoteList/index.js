// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const category = event.category
  const num = event.num
  const page = event.page
  if(category>=0)
 return await db.collection('cloudnotelist').where({
   category,
   _openid: wxContext.OPENID,
 }).skip(page).limit(num).orderBy('date', 'desc').get()
 else return await db.collection('cloudnotelist').where({
  _openid: wxContext.OPENID,
 }).skip(page).limit(num).orderBy('date', 'desc').get()
}