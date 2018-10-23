// miniprogram/pages/home/home.js
const db = require('../../tool/db.js')
const options = require('./options.js')
const {
  $Message
} = require('../.././lib/iview/dist/base/index');
const {
  $Toast
} = require('../.././lib/iview/dist/base/index');
Component({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    money: '',
    phoneNumber: '',
    isShow1: false,
    isShow2: false,
    isShow3: false,
    isShow4: false,
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    index1: 1,
    index2: 2,
    index3: 3,
    index4: 4,
    actions1: options.one,
    actions2: options.two,
    actions3: options.three,
    actions4: options.four
  },
  methods: {
    commitForm() {
      if (this.data.value1 == '') {
        $Toast({
          type: 'warning',
          content: '第一题未选择'
        })
        return
      }
      if (this.data.value2 == '') {
        $Toast({
          type: 'warning',
          content: '第二题未选择'
        })
        return
      }
      if (this.data.value3 == '') {
        $Toast({
          type: 'warning',
          content: '第三题未选择'
        })
        return
      }
      if (this.data.value4 == '') {
        $Toast({
          type: 'warning',
          content: '第四题未选择'
        })
        return
      }
      this.saveUserOptions()
      wx.navigateTo({
        url: '../../pages/openForm/main',
      })
    },
    saveUserOptions() {
      wx.setStorage({
        key: 'answer',
        data: {
          'value1': this.data.value1,
          'value2': this.data.value2,
          'value3': this.data.value3,
          'value4': this.data.value4,
          'index1': this.data.index1,
          'index2': this.data.index2,
          'index3': this.data.index3,
          'index4': this.data.index4
        },
      })
    },
    clickFirst() {
      this.setData({
        isShow1: true
      });
    },
    handleCancel1() {
      this.setData({
        isShow1: false
      });
    },
    handleClickItem1({
      detail
    }) {
      const index = detail.index;

      this.setData({
        value1: this.data.actions1[index].name,
        index1: index + 1,
      })
      this.handleCancel1()
    },
    clickSecond() {
      this.setData({
        isShow2: true
      });
    },
    handleCancel2() {
      this.setData({
        isShow2: false
      });
    },
    handleClickItem2({
      detail
    }) {
      const index = detail.index;
      this.setData({
        value2: this.data.actions2[index].name,
        index2: index + 1,
      })
      this.handleCancel2()
    },
    clickThird() {
      this.setData({
        isShow3: true
      });
    },
    handleCancel3() {
      this.setData({
        isShow3: false
      });
    },
    handleClickItem3({
      detail
    }) {
      const index = detail.index;
      this.setData({
        value3: this.data.actions3[index].name,
        index3: index + 1,
      })
      this.handleCancel3()
    },
    clickForth() {
      this.setData({
        isShow4: true
      });
    },
    handleCancel4() {
      this.setData({
        isShow4: false
      });
    },
    handleClickItem4({
      detail
    }) {
      const index = detail.index;
      this.setData({
        value4: this.data.actions4[index].name,
        index4: index + 1,
      })
      this.handleCancel4()
    },
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