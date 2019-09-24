// pages/position-detail/position-detail.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job_collect_st:'',
    part_time_id: '', //详情页id
    detali: [], //数据的详情
    windowHeight: '', //屏幕的高度
    userId:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取屏幕的高度
    var windowHeight = wx.getSystemInfoSync().windowHeight
    //跳转详情页面
    let part_time_id = options.part_time_id
    var value = wx.getStorageSync('id');
    var that = this;
    wx.showToast({
      icon: 'loading',
      title: '加载中',
      duration: 1000,
      success: function() {
        setTimeout(function() {
          that.setData({
            part_time_id: options.part_time_id,
            windowHeight: windowHeight
          });
          //页面详情页数
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/parttime_info',
            method: 'POST',
            dataType: 'json',
            data: {
              "part_time_id": part_time_id,
              "consumer_id":value,
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: (res) => {
              that.setData({
                detali: res.data,
                userId:value,
                job_collect_st:res.data.job_collect_st
              })
            },
          });
        }, 1000)
      }
    })
  },

  /**
   * 收藏 
   */
  collection: function () {
    var that = this;
    if (that.data.userId == 0 || that.data.userId == "") {
      wx.showModal({
        title: '提示',
        content: '尊敬的用户，你未登录，请登录后收藏',
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
      wx.request({
        url: 'https://campus.jiandanst.com/index/wxapi/parttime_collect',
        data: {
          consumer_id: that.data.userId,
          part_time_id: that.data.part_time_id
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function (res) {
          if (res.data == 1) {
            wx.showToast({
              title: '收藏成功',
              icon: 'success',
              duration: 2000,
            })
            that.setData({
              job_collect_st: 1
            })
            return true;
          } else if (res.data == 3) {
            new app.WeToast();
            that.wetoast.toast({
              title: "已收藏",
              duration: 1000
            })
            return false;
          }
        }
      })
    }
  },

  /**
   * 立即报名
   */
  sign: function() {
    var that = this;
    if (that.data.userId == 0 || that.data.userId == "") {
      wx.showModal({
        title: '提示',
        content: '尊敬的用户，你未登录，请登录后立即报名',
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
        url: 'https://campus.jiandanst.com/index/wxapi/parttime_reg',
        data: {
          consumer_id: that.data.userId,
          part_time_id: that.data.part_time_id
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function(res) {
          if (res.data == 1) {
            wx.showToast({
              title: '报名成功',
              icon: 'success',
              duration: 2000,
            })
            return true;
          } else if (res.data == 3) {
            new app.WeToast();
            that.wetoast.toast({
              title: "已报名",
              duration: 1000
            })
            return false;
          }
        }
      })
    }
  }
})