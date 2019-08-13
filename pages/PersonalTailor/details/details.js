// page/component/details/details.js
const app = getApp() //全局的一个调用
Page({
    data: {
      /*goods: {
        id: 1,
        image: '/images/8.jpg',
        title: 'commodity_name',
        price: 30,
        stock: '库存量：200',
      },*/
      num: 1,//数量的初始值
      totalNum: 0,
      hasCarts: false,
      curIndex: 0,
      show: false,
      scaleCart: false,
      commodity:{} //定义一个单个的商品，因为这边取到的就是单个的商品
    },
  
    addCount() {
      let num = this.data.num;
      num++;
      this.setData({
        num: num
      })
    },
    subtraction() {
      let num = this.data.num;
      if (num == 1) {
        wx.showToast({ title: '不能再少了', icon: 'none' })
      }
      else {
        num--;
      }
      this.setData({
        num: num
      })
    },
  
    addToCart() {
      const self = this;
      const num = this.data.num;
      let total = this.data.totalNum;
  
      self.setData({
        show: true
      })
      setTimeout(function () {
        self.setData({
          show: false,
          scaleCart: true
        })
        setTimeout(function () {
          self.setData({
            scaleCart: false,
            hasCarts: true,
            totalNum: num + total
          })
        }, 200)
      }, 300)
  
    },
  
    bindTap(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      this.setData({
        curIndex: index
      })
    },
    onLoad(options) {
      wx.request({
        method:'GET',
        url: app.globalData.serverPath + '/database/commodity/detail?id=' + options.id,
        success:(res)=>{
          console.log("这是详细界面的数据")
          console.log(res.data)
          this.setData({
            //goods:res.data
           commodity:res.data
            
            })
        }
      })
    }
  })