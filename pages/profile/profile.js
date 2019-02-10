//aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "../../images/swiper1.png",
      "../../images/swiper2.png",
      "../../images/swiper3.png",
      "../../images/swiper4.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: ""
  },
  call:function() {
    wx.makePhoneCall({
      phoneNumber: '18475525884',
    })
  },
  guide:function() {
    wx.getLocation({
      type:'wgs84',
      success: function(res) {
        wx.openLocation({   //​使用微信内置地图查看位置。
          latitude: '22.5667955405',//要去的地址的纬度
          longitude: '113.8671702147',//要去的地址的经度
          name:"财富港",
          address:'财富港'
        })
      },
    })
  },
  ditiao2() {
    wx.switchTab({
      url: '../Consultation/Consultatio' + 'n'
    })
  },
  ditiao3() {
    wx.switchTab({
      url: '../Telephone/Telephone'
    })
  },
  bookinlist() {
    wx.switchTab({
      url: '../Telephone/Telephone'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  onLoad:function() {
    var that = this;
    wx.request({
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=listHot',
      method: 'get',
      dataType:'text',
      success: function (res) {
        console.log(res.data);
        var item = JSON.parse(res.data);
         that.setData({
           item: item
         })
        console.log(item);
        // console.log(app.globalData.hotPrds[1].id);
        // console.log(arr);
        // console.log(typeof(arr));
        
        // var arr = JSON.parse(res.data);
        // app.globalData.hotPrds = JSON.parse(res.data);
        // console.log(arr[0].prdname);
        // console.log(app.globalData.hotPrds[0].prdname);
        // console.log(res.data);
        // console.log(typeof(app.globalData.hotPrds));
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
