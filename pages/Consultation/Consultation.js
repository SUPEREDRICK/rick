// pages/Consultation/Consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[],
    prdid:'',
    prdtype:''
  },
  ditiao(event) {
    console.log('-------00000000>>>>>>' + event.currentTarget.dataset.id);
    var prdid = JSON.stringify(event.currentTarget.dataset.id);
    console.log('kanzheli1' + prdid);
    wx.navigateTo({
      url: '../details/details?prdid=' + prdid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  ditiao3() {
    wx.switchTab({
      url: '../Telephone/Telephone'
    })

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

  },

  /**
   * 生命周期函数--监听页面加载--页面加载时
   */
  onLoad: function (options) {
    var that = this

    var prdtype = JSON.parse(options.prdtype);
    console.log('---haha--' + prdtype);
    wx.request({
      url: 'http://www.zhaozibupin.com/qinxiApp/index.php?c=gedill&a=listByPrdtype',
      method: 'post',
      data: {
        prdtype: prdtype
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'text',
      success: function (res) { 
        var item = JSON.parse(res.data);
        console.log('^^^^^^^^' + item);
        that.setData({
          item:item
        });
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