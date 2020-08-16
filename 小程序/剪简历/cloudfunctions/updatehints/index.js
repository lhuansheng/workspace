// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const demolist = db.collection('demolist')
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const {id} = event
 return await demolist.doc(id).update({
  data: {
    hints: _.inc(1)
  }
 })
}