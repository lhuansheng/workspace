// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const category = event.category
  const num = event.num
  const page = event.page
  const coll = db.collection('cloudnotelist')
  if(category>=0)
 return await coll.where({
   category
 }).skip(num).limit(page).orderBy('date', 'desc').get()
 else return await coll.skip(num).limit(page).orderBy('date', 'desc').get()
}