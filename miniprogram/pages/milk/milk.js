// miniprogram/pages/milk/milk.js
const db = require('../../tool/db.js')
const {
  $Message
} = require('../../lib/iview/dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    address: '',
    phoneNumber: ''
  },
  commitForm() {
    if (this.validate()) {
      db.collection('milkData').add({
        data: {
          name: this.data.name,
          address: this.data.address,
          phoneNumber: this.data.phoneNumber
        }
      }).then(res => {
        $Message({
          type: 'success',
          content: '恭喜您中奖了'
        });
        setTimeout(() => {
          wx.navigateBack({
            url: '../../pages/index/index',
          })
        }, 2000)
      }).catch(console.error)
    }
  },
  validate() {
    if (!this.data.name || !this.data.address) {
      wx.showToast({
        title: '表单填写不完整',
        icon: 'none'
      })
      return false
    }
    //  else if (!(/^1[34578]\d{9}$/.test(this.data.phoneNumber))) {
    //   wx.showToast({
    //     title: '手机号输入有误',
    //     icon: 'none'
    //   })
    //   return false;
    // } 
    else {
      return true
    }
  },
  changeInput(e) {
    const obj = {};
    obj[e.target.dataset.str] = e.detail.detail.value;
    this.setData(obj);
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