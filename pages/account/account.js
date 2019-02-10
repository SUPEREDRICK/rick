//aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {
      code:'',
      headprait:'',
  },
  call:function() {
    wx.makePhoneCall({
      phoneNumber: '18475525884',
    })
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
    success: function (res) {
      console.log(1111);
      console.log(res.userInfo.nickName);
      console.log(res.userInfo.avatarUrl);
      that.setData({
        headprait: res.userInfo.nickName
      })
    },
  })
  },
  mybook:function() {
    wx.navigateTo({
      url: '../book/book'
    })
  }
})

// wx.getUserInfo({
//   success: function (res) {
//     console.log(res.userInfo.nickName);
//     console.log(res.userInfo.avatarUrl);
//   },
// })
//获取用户头像信息和用户名,此方法不能获取用户openid，注意