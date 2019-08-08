// pages/person/person.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    motto:'hello world',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // orderItems
    orderItems: [{
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/person/daifukuan.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../../images/person/daifahuo.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../../images/person/daishouhuo.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '../../images/person/daipinjia.png'
      }
    ],
  },
  //点击头像跳转到个人中心
  person:function(){
    wx.navigateTo({
      url: '../wode/person/person'
    })
  },
  //事件处理函数
  toOrder: function() {
    wx.navigateTo({
      url: '../wode/allorder/allorder'
    })
    
  },
  toOrder0(e){
    wx.navigateTo({
      url: '/pages/wode/fukuan/fukuan'
    })
  },
  toOrder1(e){
    wx.navigateTo({
      url: '/pages/wode/fahuo/fahuo'
    })
  },
  toOrder2(e){
    wx.navigateTo({
      url: '/pages/wode/wuliu/wuliu'
    })
  },
  //待收货的跳转
  toOrder3(e){
    wx.navigateTo({
      url: '/pages/wode/dengpinjia/dengpinjia'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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