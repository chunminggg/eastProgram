// pages/index/homeView/homeView.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToActivityForm() {
      wx.navigateTo({
        url: '../../pages/home/home',
      })
    },
    jumpToManage(){
        wx.navigateTo({
          url: '../../pages/manage/index',
        })
    },
    jumpToLucky(){
      wx.navigateTo({
        url: '../../pages/lucky/index',
      })
  },
    jumpToSetting() {
      wx.navigateTo({
        url: '../../pages/setting/setting',
      })
    }
  }
})