// pages/setting/addLucky.js
const db = require('../../tool/db.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    vaule: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeInput(e) {
      this.setData({
        value: e.detail.detail.value
      });
    },
    sure() {
      if (!this.data.value) {
        wx.showToast({
          title: '账号不能为空',
          icon: 'none'
        })
        return;
      }
      db.collection('lucky').add({
        data: {
          id: this.data.value,
          name:'hello'
        }
      }).then(res => {
        wx.showToast({
          title: '添加成功',
        })
        wx.navigateBack();
      }).catch(console.error)
    }
  }
})