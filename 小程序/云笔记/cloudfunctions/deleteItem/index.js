// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 const ids = event.ids || []
 const len = ids.length
 return await ids.forEach(id => {
    db.collection('cloudnotelist').doc(id).remove()
  });
}