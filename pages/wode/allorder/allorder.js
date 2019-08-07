var sliderWidth = 100; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "待付款", "待发货", "待收货","待评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: 0,
    sliderWidth: 0,
    qbdd:[] //全部订单
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
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

  },
  tabClick: function (e) { //获取去每次点击事件的id
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    var id =e.currentTarget.id
    var category_id //定义一个商品类别的id来获值
    if(id==1){ //这里作一个判断来抽取商品的类别 把页面的id转换成我想要的类别数字
      category_id = 2 //护肤的类别
    }else if(id==2 ){
      category_id = 3 //洁面
    }else if(id == 3){
      category_id = 5 //乳液
    }
    //发送不同点击页面的不同请求
    /*wx.request({
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

    })*/
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