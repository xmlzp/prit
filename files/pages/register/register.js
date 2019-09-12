// pages/register/register.js
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

    sexArray: ['男', '女'],
    name: null,
    code: null,
    sex: null,
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
  onShareAppMessage: function() {

  },
  /**
   * 姓名获取
   */
  nameBlur: function(res) {
    this.setData({
      name: res.detail.value
    })
  },
  /**
   * 学号获取
   */
  codeBlur: function(res) {
    this.setData({
      code: res.detail.value
    })
  },

  /**
   * 性别下拉框
   */
  bindSexChange: function(e) {
      this.setData({
        reply: false
      })
    this.setData({
      sex: e.detail.value,
      flat: true
    })
  },

  /**
   * 注册
   */
  register: function() {
    var that = this
    console.log(this.data.sex);
    new app.WeToast();
    if (this.data.name == null) {
      that.wetoast.toast({
        title: "请输入姓名",
        duration: 1000
      })
      return false
    }
    if (this.data.code == null) {
      that.wetoast.toast({
        title: "请输入学号",
        duration: 1000
      })
      return false
    }
    if (this.data.sex == null) {
      that.wetoast.toast({
        title: "请选择性别",
        duration: 1000
      })
      return false
    }
    wx.showToast({
       title: '提交成功',
       icon: 'success',
       duration: 2000,
        success: function () {
         setTimeout(function () {
           wx.switchTab({
             url: '../index/index',
           })
         }, 2000)
        }
     })
    //  wx.request({
    //       url: "https://campus.jiandanst.com/index/wxapi/weixinlogin",
    //       data: {
    //         code: code,
    //         encryptedData: encryptedData,
    //         iv: iv
    //       },
    //       header: {
    //         'content-type': 'application/json'
    //       },
    //       method: 'POST',
    //       success: function(data) {
    //         console.log(data);
    //       }
    //     })
  

  },


})