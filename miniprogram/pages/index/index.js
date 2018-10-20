//index.js
const app = getApp()

Page({
  data: {
    current:'index',

  },

  onLoad: function() {

  },
  handleChange({detail}){
    if (detail.key == 'activity') {
      wx.redirectTo({
        url: '../../pages/activity/activity',
      })
    }
  },
  jumpToActivityForm(){
    wx.navigateTo({
      url: '../../pages/home/home',
    })
  },

})
