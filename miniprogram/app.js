//app.js
const AV = require('./lib/av-weapp-min.js')
let APP_KEY = 'XUuBfKY3isw0z9czhPpFIceu';
let APP_ID = '51eYIByrVRmLLzniuk6KNlDT-gzGzoHsz';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})