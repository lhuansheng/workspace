// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 const id = event.id
 return await db.collection('cloudnotelist').doc(id).get()
}