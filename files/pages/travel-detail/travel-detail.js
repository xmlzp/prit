// pages/travel-detail/travel-detail.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: '',
    tour_id: '', //旅游详情页面的id
    detalis: '' //详情页面的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let tour_id = options.tour_id;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var that = this;
    wx.showToast({
      icon: 'loading',
      title: '加载中',
      duration: 1000,
      success: function() {
        setTimeout(function() {
          //跳转详情页面
          that.setData({
            windowHeight: windowHeight,
            tour_id: tour_id
          });
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/tour_info',
            method: 'POST',
            dataType: 'json',
            data: {
              "tour_id": tour_id
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
              that.setData({
                detalis: res.data
              })
            }
          })
        }, 20)
      }
    });
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
   * 立即预定
   */
  reservation: function() {
    var that = this;
    var value = wx.getStorageSync('id');
    if (value == 0 || value == "") {
      wx.showModal({
        title: '提示',
        content: '尊敬的用户，你未登录，请登录后立即预定',
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
      wx.request({
        url: 'https://campus.jiandanst.com/index/wxapi/tour_reserve',
        data: {
          consumer_id: value,
          tour_id: that.data.tour_id
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function(res) {
          if (res.data == 1) {
            wx.showToast({
              title: '预订成功',
              icon: 'success',
              duration: 2000,
            })
            return true;
          } else if (res.data == 3) {
            new app.WeToast();
            that.wetoast.toast({
              title: "已预订",
              duration: 1000
            })
            return false;
          }
        }
      })
    }
  }
})