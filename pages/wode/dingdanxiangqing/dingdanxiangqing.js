const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dingdanxiangqing:{},
    wuliu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { //这个options是怎么搞得，跳转到别的页面就要用options
    wx.request({
      method:'POST',
      data:{
        order_id:options.id, //post请求要把id 放在data里面
      },
     url: app.globalData.serverPath + '/database/order/viewDetail',
      
      success:(res)=>{
        console.log("这是订单详情页面的数据")
        console.log(res.data)
        this.setData({
          
          dingdanxiangqing:res.data
          
          })
      }
    })
  },
  CheckPost: function(e) {
    console.log(e) //这里定义一个e
    wx.request({
      method:'POST',
      data:{
        shipping_id: e.currentTarget.dataset.shippingId, //post请求要把id 放在data里面
      },
     url: app.globalData.serverPath + '/database/shipping/viewDetail',
      
      success:(res)=>{
        console.log("这是物流详情页面的数据")
        console.log(res.data)
        this.setData({
          
          wuliu:res.data
          
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