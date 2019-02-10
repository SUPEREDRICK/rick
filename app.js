//app.js
App({
  globalData: {
    appid:'wx56d27f902ec2fb66',
    secret:'f826606b129a64b56ab317c4ae4c0a29',
  },
  onLaunch: function () {
    var that = this
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                //console.log(objz);
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            });
            // var d = that.globalData; //这里存储了appid、secret、token串 
            var d = {
              appid: 'wx56d27f902ec2fb66',
              secret: '91888157c37f1c47101438c35f7f0154',
            };
            console.log('openid -- ' + d.appid);
            var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            
            wx.request({
              url: l,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
              // header: {}, // 设置请求的 header  
              success: function (res) {
                var obj = {};
                console.log('>>>>>>>>>' + res.data.openid)
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                console.log(obj);
                wx.setStorageSync('user', obj);//存储openid  
              }
            });
            that.checkLogin();
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },
  checkLogin:function() {
    var that = this;
      wx.request({
        url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=checklogin',
        data: {
          // oped: opid,
        },
        method: 'get',
        dataType: 'text',
        success: function (res) {
            // console.log(res.data);
          var resdata = JSON.parse(res.data);
          if(resdata[0].openid != null) {
            //不做任何处理,后期添加获取头像和昵称信息
            that.getOpenid();
          } else {
            //此处将会调用openid入库函数
            // that.getOpenid();
          }
        },
      })
  },
  getOpenid:function() {
    console.log('nihaonihaonihaonihao....');
    wx.request({
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=checklogin',
      data: {
        opid:opid,
      },
      method: 'post',
      dataType: 'text',
      success:function(res) {
        console.log('data is NAN?' + JSON.parse(res.data));
      }
    })
  },
  insertAccData:function() {
    console.log();
    wx.request({
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=checklogin',
      data: {
        opid: opid,
      },
      method: 'post',
      dataType: 'text',
      success: function (res) {
        console.log('data is NAN?' + JSON.parse(res.data));
      }
    })
  }
})