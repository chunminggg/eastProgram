// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({})
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const res = await db.collection('lucky').get();
  console.log(111, res)
  const promiseList = res.data.map(v => {
    return db.collection('lucky').doc(v._id).remove();
  });
  return Promise.all(promiseList);
}