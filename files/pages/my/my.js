// pages/my/my.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
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
    wx.getStorage({
      key: 'id',
      success: function(res) {
        console.log(res)
        if (res.data == 0) {
          that.setData({
            flag: false
          })
        } else {
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/consumer',
            data: {
              consumer_id: res.data
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function(res) {
              that.setData({
                flag: true,
                name: res.data.consumer_name,
                 id:res.data.consumer_id
              })
            }
          })

        }
      },
    })
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
        url: '../personal/personal?id='+this.data.id,
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
    wx.navigateTo({
      url: '../reservation/reservation',
    })
  },

  /**
   * 我的报名
   */
  sign: function() {
    wx.navigateTo({
      url: '../sign/sign',
    })
  },
})