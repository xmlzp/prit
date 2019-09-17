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
   * 登录
   */
  getPhoneNumber: function (e) {
    var that = this;
    wx.login({
      success: res => {
        console.log(res);
        // var iv = e.detail.iv;
        // var encryptedData = e.detail.encryptedData;
        // var code = res.code
        // console.log(iv);
        // console.log(encryptedData);
        //  console.log(res.code);
        // that.register()
        // wx.getSetting({
        //   success: res => {
        //     if (res.authSetting['scope.userInfo']) {
        //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //       wx.getUserInfo({
        //         success: res => {
        //           console.log(res)
        //         }
        //       })
        //     }
        //   }
        // }) 
        wx.request({
          url: "https://campus.jiandanst.com/index/wxapi/ce_weixinlogin",
          data: {
            // code: code,
            // encryptedData: encryptedData,
            // iv: iv,
            consumer_phone: "15587876527"
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          success: function (res) {
            if(res.data != 0){
              that.register(res.data.consumer_id)
              wx.setStorage({
                key: "id",
                data: res.data.consumer_id
              })  
            }
          }
        })
      }
    })
  },
  register: function (id) {
    wx.showModal({
      title: '提示',
      content: '尊敬的用户，你尚未完善所有信息，请完善个人信息',
      confirmText: "确定",
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../register/register?id='+id
          })
        }
      }
    })
  }
})