// pages/my/my.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var value = wx.getStorageSync('id');
    setTimeout(function () {
    if (value == 0||value =="") {
          that.setData({
            flag: false
          })
        } else {
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/consumer',
            data: {
              consumer_id: value
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function(res) {
              that.setData({
                flag: true,
                name: res.data.consumer_name,
                id: res.data.consumer_id
              })
            }
          })
        }
    },10)
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
   * 操作
   */
  option: function() {
    if (this.data.id == "") {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../personal/personal?id=' + this.data.id,
      })
    }
  },

  /**
   * 常见问题
   */
  question: function() {
    var that = this;
    new app.WeToast();
    that.wetoast.toast({
      title: "暂未开放",
      duration: 1000
    })
  },

  /**
   * 我的收藏
   */
  collection: function() {
    new app.WeToast();
    this.wetoast.toast({
      title: "暂未开放",
      duration: 1000
    })
  },

  /**
   * 意见反馈
   */
  opinion: function() {
    new app.WeToast();
    this.wetoast.toast({
      title: "暂未开放",
      duration: 1000
    })
  },

  /**
   * 我的预定
   */
  reservation: function() {
    if (this.data.id == "" || this.data.id== null) {
      wx.showModal({
        title: '提示',
        content: '尊敬的用户，你未登录，请登录后查看我的预定',
        confirmText: "确定",
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login',
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../reservation/reservation',
      })
    }
  },

  /**
   * 我的报名
   */
  sign: function() {
    if (this.data.id == "" || this.data.id == null) {
      wx.showModal({
        title: '提示',
        content: '尊敬的用户，你未登录，请登录后查看我的报名',
        confirmText: "确定",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login',
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../sign/sign',
      })
    }
  },
})