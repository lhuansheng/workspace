// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const num = event.num
  const page = event.page
  // 当略过了11条就是0了
  return await db.collection("demolist").skip(page).limit(num).get()
}