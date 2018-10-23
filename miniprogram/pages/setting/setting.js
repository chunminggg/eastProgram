// pages/setting/setting.js
const db = require('../../tool/db.js')
Page({
  /**
   * 页面的初始数据
   */
  handleClick() {
    wx.navigateTo({
      url: './addLucky'
    });
  },
  delAll() {
    wx.showModal({
      title: '提示',
      content: '确定清空？',
      success(res) {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: 'delAllLucky'
          }).then((data) => {
            console.log(data)
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  data: {
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    db.collection('lucky').get().then(res => {
      this.setData({
        list: res.data
      });
    }).catch(console.error)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})