Page({

  /**
   * 页面的初始数据
   */
  data: {
    qbdd:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取推荐商品的详情
    console.log(options)
    // this.getCommodity(options.id)
    //在这里实现前后端的交互和对接功能
    const requestTask = wx.request({
      //这个url是本机的IP地址 会出现不合法域名，在 >>这里设置忽略不校验合法域名
      url: 'https://whatdoyoudo.club/api/database/order/listAll', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
        user_id: 1, 
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => { //这边要用 res => 来记录历史
        console.log("快递页面的数据")
        console.log(res.data)
        this.setData({
          qbdd: res.data //返回数据
        })
      }

    })
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