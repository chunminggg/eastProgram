// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('lucky').where({
      name: 'hello'
    }).remove()
  } catch (e) {
    console.error(e)
  }
}