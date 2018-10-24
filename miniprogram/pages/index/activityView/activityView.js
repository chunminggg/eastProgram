// pages/index/homeView/homeView.js
const db = require('../../../tool/db.js')
import {
  findLucyNumber
} from '../../../lib/service.js'
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
    code: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToActivityForm() {
      wx.navigateTo({
        url: '../../pages/milk/milk',
      })
    },
    codeChange(e) {
      this.setData({
        code: e.detail.detail.value
      })
    },
    search() {
      if (!this.data.code) {
        wx.showToast({
          title: '请输入资金账号',
          icon: 'none'
        })
        return;
      }
      findLucyNumber(this.data.code).then(res => {
        if (res.length) {
          wx.setStorageSync('luckyNumber', this.data.code)
          this.jumpToActivityForm();
        } else {
          wx.showToast({
            title: '很遗憾，您没能中奖，下次再接再厉',
            icon: 'none',
            duration: 2500
          })
        }

      })

    }
  }
})