const db = require('../../tool/db.js')
const {
  $Message
} = require('../../lib/iview/dist/base/index');
Component({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    money: '',
    phoneNumber: '',
    visible1:false,

  },
  methods: {
    commitForm() {
      let validate = this.validateData()
      if (validate) {
        let params = {
          data: {
            name: this.data.name,
            money: this.data.money,
            phoneNumber: this.data.phoneNumber
          }
        }
        db.collection('assets').add(params).then(res => {
            this.setData({
              visible1:true,
            })
        
        }).catch(console.error)
      }
    },
    handleClose1(){
      wx.redirectTo({
        url: '../../pages/index/index',
      })
    },
    handleClose2(){
      this.setData({
        visible1:false,
      })
    },
    validateData() {
      return true
    },
    nameChange(e) {
      this.setData({
        name: e.detail.detail.value
      })
    },
    phoneNumberChange(e) {
      this.setData({
        phoneNumber: e.detail.detail.value
      })
    },
    moneyChange(e) {
      this.setData({
        money: e.detail.detail.value
      })
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})