//index.js
const app = getApp()

Page({
  data: {
    current: 'index',
  },

  onLoad: function() {
    // wx.navigateTo({
    //   url: '../../pages/milk/milk',
    // })
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
})