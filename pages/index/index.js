//aboutme.js
//获取应用实例
const app = getApp();

Page({
  data: {
    img: "../../images/indexban.jpg",
    cmpname: "深圳市酷达影视传媒有限公司",
    intro: "公司简介。。。。。。。。",
    addr: "地址: 深圳市龙岗区坂田街道中兴路15号",
    contact: "服务合作: rick.ng.c@hotmail.com",
    mobi: "18475525884",
    hotprds: [],
    item: [],
    array: [
      {
        id: '1',
        prd_name: '产品名称1',
        price: '180'
      },
      {
        id: '2',
        prd_name: '产品名称2',
        price: '190'
      },
      {
        id: '3',
        prd_name: '产品名称3',
        price: '200'
      },
      {
        id: '4',
        prd_name: '产品名称3',
        price: '200'
      },
      {
        id: '5',
        prd_name: '产品名称3',
        price: '200'
      },
      {
        id: '6',
        prd_name: '产品名称3',
        price: '200'
      }
    ],
  },
  ditiao2() {
    wx.switchTab({
      url: '../Consultation/Consultation'
    })
  },
  ditiao3() {
    wx.switchTab({
      url: '../Telephone/Telephone'
    })
  },
  bookinlist: function (event) {
    console.log(event.currentTarget.dataset.id);
    var prdid = JSON.stringify(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../details/details?prdid=' + prdid,
      success: function () { },    //成功后的回调；
      faile: function () { },          //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
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
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=listHot',
      method: 'get',
      dataType: 'text',
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
