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
    visible1: false,

  },
  methods: {
    commitForm() {
      let that = this
      let validate = this.validateData()
      if (validate) {
        let params = {
          data: {
            name: this.data.name,
            "address": this.data.money,
            phoneNumber: this.data.phoneNumber
          }
        }
        wx.getStorage({
          key: 'answer',
          success: function (res) {
            let info = res.data
            params.data["value1"] = res.data["value1"]
            params.data["value2"] = res.data["value2"]
            params.data["value3"] = res.data["value3"]
            params.data["value4"] = res.data["value4"]
            params.data["index1"] = res.data["index1"]
            params.data["index2"] = res.data["index2"]
            params.data["index3"] = res.data["index3"]
            params.data["index4"] = res.data["index4"]
            db.collection('assets').add(params).then(res => {
              that.setData({
                visible1: true,
              })

            }).catch(console.error)
          },
        })
      }
    },
    handleClose1() {
      wx.redirectTo({
        url: '../../pages/index/index',
      })
    },
    handleClose2() {
      this.setData({
        visible1: false,
      })
    },
    validateData() {
      if (this.data.name == '') {
        $Message({
          content: '姓名不能为空',
          type: "warning"
        })
        return false
      }
      else if (this.data.phoneNumber == '') {
        $Message({
          content: '手机号不能为空',
          type: "warning"
        })
        return false
      }
      else if (this.data.money == '') {
        $Message({
          content: '地址不能为空',
          type: "warning"
        })
        return false
      }
      else {
        return true
      }
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