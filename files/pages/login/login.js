// pages/login/login.js
let app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: null,
    password: null,
    code: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.login({
      success: res => {
        this.setData({
          code: res.code
        })
      }
    })
    wx.getUserInfo({
      success: res => {
        console.log(res);
      }
    })
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
  getPhoneNumber: function(e) {
    var that = this;
    var iv = e.detail.iv;
    var encryptedData = e.detail.encryptedData;
    wx.request({
      url: "https://campus.jiandanst.com/index/wxapi/weixinlogin",
      data: {
        code: that.data.code,
        encryptedData: encodeURIComponent(encryptedData),
        iv: iv,
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST', 
      success: function (res) {
        console.log(res.data);
        if(res.statusCode == 500){
              return false;
        }
        if (res.data == "获取session_key失败！"){
          return false;
        }
        if (res.data !=0){
          that.register(res.data.consumer_id)
          wx.setStorage({
            key: "id",
            data: res.data.consumer_id
          })  
        }
      }
    })
  },
register: function(id) {
wx.showModal({
  title: '提示',
  content: '尊敬的用户，你尚未完善所有信息，请完善个人信息',
  confirmText: "确定",
  showCancel: false,
  success: function(res) {
    if (res.confirm) {
      wx.navigateTo({
        url: '../register/register?id=' + id
      })
    }
  }
})
}
})