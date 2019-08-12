// pages/wode/youhui/youhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    lunboUrls: [
      'https://img.alicdn.com/imgextra/i2/725677994/O1CN01kfrVbt28vIhXJolD0_!!0-item_pic.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i3/725677994/O1CN01DHAJi028vIhZlSsJs_!!0-item_pic.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i3/725677994/O1CN01ZQq8vL28vIhRiNrSl_!!725677994-0-sm.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i2/725677994/O1CN0152uhEj28vIhY0so0F_!!0-item_pic.jpg_430x430q90.jpg'
      
    ],
  },
   //点击事件
   bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
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