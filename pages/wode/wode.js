// pages/person/person.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    commandList:[],//推荐列表
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
    //我的工具
    orderItems1: [{
      typeId: 0,
      name: '优惠券',
      url: 'bill',
      imageurl: '../../images/person/personal_card.png',
    },
    {
      typeId: 1,
      name: '客服小蜜',
      url: 'bill',
      imageurl: '../../images/person/wodeshoucang.png',
    },
    {
      typeId: 2,
      name: '我的收藏',
      url: 'bill',
      imageurl: '../../images/person/personal_favorite.png'
    },
    {
      typeId: 3,
      name: '地址管理',
      url: 'bill',
      imageurl: '../../images/person/wodeshouhuodizhi.png'
    },
    {
      typeId: 4,
      name: '售后记录',
      url: 'bill',
      imageurl: '../../images/person/personal_sale_record.png'
    },
    {
      typeId: 5,
      name: '我的评价',
      url: 'bill',
      imageurl: '../../images/person/personal_evaluated.png'
    },
    {
      typeId: 6,
      name: '主题换肤',
      url: 'bill',
      imageurl: '../../images/person/zhuti.png'
    },
    {
      typeId: 7,
      name: '闲置换钱',
      url: 'bill',
      imageurl: '../../images/person/huanqian.png'
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
  toOrder: function() { //所有订单的设置
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
  /**工具栏的设定 */
  CtoOrder3(){
    wx.navigateTo({
      url: '/pages/wode/addressList/addressList'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取推荐商品的详情
    console.log(options)
    // this.getCommodity(options.id)
    //在这里实现前后端的交互和对接功能
    const requestTask = wx.request({
      //这个url是本机的IP地址 会出现不合法域名，在 >>这里设置忽略不校验合法域名
     url: 'https://whatdoyoudo.club/api/database/recommend', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => { //这边要用 res => 来记录历史
        console.log("这是商城页面的数据")
        console.log(res.data)
        this.setData({
          //src: '../../image/goo1.png',
          //src: res.data,
          commandList: res.data //返回数据
        })
      }

    })
    //登录的设置
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