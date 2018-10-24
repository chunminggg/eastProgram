const AV = require('./av-weapp-min.js')
var APP_ID = '51eYIByrVRmLLzniuk6KNlDT-gzGzoHsz';
var APP_KEY = 'XUuBfKY3isw0z9czhPpFIceu';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
export const saveUserAnser = (params) => {
  let row = params.data
  let Answer = AV.Object.extend('Answer')
  let answer = new Answer()
  answer.set('phoneNumber', row.phoneNumber)
  answer.set('name', row.name)
  answer.set('address', row.address)
  answer.set('answer1', row.value1)
  answer.set('answer2', row.value2)
  answer.set('answer3', row.value3)
  answer.set('answer4', row.value4)
  return answer.save()
}
export const saveOrder = (params) => {
  let row = params.data
  let Order = AV.Object.extend('Order') 
  let order = new Order()
  order.set('phoneNumber', row.phoneNumber)
  order.set('address', row.address)
  order.set('name', row.name)
  order.set('luckyNumber', row.luckyNumber)
  return order.save()
}
export const findLucyNumber = (numberId) => {
  let query = new AV.Query('Lucky')
  query.equalTo('luckyNumber',numberId)
  return query.find()
}