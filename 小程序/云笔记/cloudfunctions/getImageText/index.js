// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const imgUrl = event.imgUrl
  try {
    const result = await cloud.openapi.ocr.printedText({
        type: 'photo',
        imgUrl
      })
    return result
  } catch (err) {
    return err
  }
}