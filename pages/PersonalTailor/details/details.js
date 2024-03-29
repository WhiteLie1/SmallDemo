const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introduction: '暂无商品描述',
    ingredient: '暂无成分信息'
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      method: 'GET',
      url: app.globalData.serverPath + `/database/commodity/detail?id=${options.id}`,
      success: (res) => { 
        console.log("这是商品详情页面的数据")
        console.log(res.data)
        this.setData({
           commodity: res.data 
          }) }
    })    
  },
  doBuy: () => {
    wx.navigateTo({ url: '/pages/pay/pay' })
  },
  doAddToCart: () => {
    wx.showToast({ title: '加入购物车成功', icon: 'success' })
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