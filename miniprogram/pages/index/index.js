//index.js
const app = getApp()

Page({
  data: {
    current: 'index',
  },

  onLoad: function() {

  },
  handleChange({
    detail
  }) {
      this.setData({
        current: detail.key
      });
  },
})