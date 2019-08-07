// pages/person/person.js
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

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
  //事件处理函数
  toOrder: function() {
    wx.navigateTo({
      url: '../wode/qbdd/qbdd'
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
  onLoad: function(options) {
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
   *用户登录设置
   */
  /*doLogin(e){
    console.log(e)
    if(e.detail.userInfo){
      wx.showLoading({title:'登录中'})
      wx.login({
        success: (res) => {
          console.log(res.code)
          wx.request({
            method: 'POST',
            url: app.globalData.serverPath + '/database/oauth/login/weixin',
            data:{
              code: res.code,
              userInfo: e.detail.userInfo
            },
            success: (res) => {
              console.log(res)
              this.getUserInfo()
              
              wx.setStorage({
                key: app.globalData.storageKey,
                data: res.data.data
              })
              wx.showToast({title:'登录成功'})
            }
          })
        }
      })
    }
    else{
      wx.showToast({title: '授权失败',icon:'none'})
    }
  },
  getUserInfo(){
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          isLogged: true,
          userInfo: res.userInfo
        })
      }
    })
  },*/
 
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