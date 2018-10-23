// miniprogram/pages/manage/index.js
const db = require('../../tool/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    params:{
      pageSize:10,
      pageIndex:1,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    let skip = (this.data.params.pageIndex -1)*10
    let limit = 10
    db.collection('assets').skip(skip).limit(limit).get().then(data => {
      this.setData({
        list:[...this.data.list,...data.data]
      })
    }).catch(err => {

    })
  },
  loadMore(){
    let index = this.data.params.pageIndex + 1
    this.setData({
      params:{
        pageSize:10,
        pageIndex:index
      }
    })
    this.getData()
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