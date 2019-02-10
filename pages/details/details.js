//import the compontent
var WxParse = require('../../wxParse/wxParse.js');

// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:'',
    prdid:'',
    intro:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    
    var prdid = JSON.parse(options.prdid);
    that.setData({
      prdid: options.prdid
    })
    console.log('---jaiyou--' + prdid);
    
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=getdtl',
      data: {
        prdno: prdid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res) {
        var data = JSON.parse(res.data);
        console.log(data[0].prdname);
        that.setData({
          item: data[0]
        });
        console.log("---->>>>------" + that.data.item.prdname);
        console.log('你好卖家');
      }
    });

    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
    });
    
  //   var article = `<div style="margin-top:10px;">
  //     <h3 style = "color: #000;">支持的标签ul / li</h3>
  //       <blockquote>带有内联的li</blockquote>
  //       <div style="margin-top:10px;">
  //         <ul>
  //           <li style="color: red;">我是li 红色</li>
  //           <li style="color: blue;">我是li 蓝色</li>
  //           <li style="color: yelloe;">我是li 黄色</li>
  //         </ul>
  //       </div>
	// </div >`;

    var that = this
    console.log('********' + that.data.prdid);

    wx.request({
      method:'post',
      dataType: 'text',
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=getHTML',
      data: {
        // prdno: that.data.prdid
        prdno:'kd2019-01-01iqL&/|'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        console.log('++++++' + data[0].prdcontent);
        that.setData({
          intro: data[0].prdcontent
        });
        // var data = JSON.parse(res.data);
        // console.log(data[0].prdname);
        // that.setData({
        //   item: data[0]
        // });
        // console.log("----" + that.data.item.prdname);
        // console.log('++++++' + data);
        console.log('########' + that.data.intro);
        var article = that.data.intro;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    });

    // var article = that.data.intro;
    // console.log('%%%%%');
    

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