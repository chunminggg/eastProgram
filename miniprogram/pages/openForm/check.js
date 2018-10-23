const checkState = function (params){
  let moneyIndex = params["index1"]
  let formIndex = params["index2"]
  let condition = false
  // 开通融资账户
  if (formIndex == 1 || formIndex == 2) {
     condition = true
  }
  if(moneyIndex == 1){
    return {
      "percent":"1.3",
      "conditon":condition,
      "secondPercent":"暂无"
    }
  }
  else if(moneyIndex == 2){
    return {
      "percent": "1.3",
      "conditon": condition,
      "secondPercent": "暂无"
    }
  }
  else if (moneyIndex == 3) {
    return {
      "percent": "1",
      "conditon": condition,
      "secondPercent": "7.2%"
    }
  }
  else if (moneyIndex == 4) {
    return {
      "percent": "0.8",
      "conditon": condition,
      "secondPercent": "7%"
    }
  }
  else{
    return {
      "percent": "0.5",
      "conditon": condition,
      "secondPercent": "6.8%"
    }
  }
}
module.exports = checkState