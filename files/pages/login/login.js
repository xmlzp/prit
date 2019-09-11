// pages/login/login.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: null,
    password: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function() {},

  /**
   *手机号获取 
   */
  phoneBlur: function(res) {
    this.setData({
      phone: res.detail.value
    })
  },

  /**
   *密码获取 
   */
  passwordBlur: function(res) {
    this.setData({
      password: res.detail.value
    })
  },


  /**
   * 登录
   */
  getPhoneNumber: function(e) {
    var that = this;
    wx.login({
      success: res => {
        var iv = e.detail.iv;
        var encryptedData = e.detail.encryptedData;
        var code = res.code
        console.log(iv);
        console.log(encryptedData);
        console.log(res.code);
        wx.request({
          url: "",
          data: {
            code: code,
            encryptedData: encryptedData,
            iv: iv
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          success: function(res) {},
        })
      }
    })
  }
})