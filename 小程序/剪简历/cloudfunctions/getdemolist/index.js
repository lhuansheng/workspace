// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const demolist = db.collection('demolist')
// 云函数入口函数
exports.main = async (event, context) => {
  const {num, page} = event
  return await demolist.skip(page).limit(num).get()
}