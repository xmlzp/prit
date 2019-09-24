// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      icon: 'loading',
      title: '加载中',
      duration: 1000,
      success: function () {
        setTimeout(function () {
          var value = wx.getStorageSync('id');
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/tour_collect_list',
            data: {
              consumer_id: value
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function (res) {
              if (res.data.length == 0) {
                that.setData({
                  flagTour: false
                })
              } else {
                that.setData({
                  reservation: res.data,
                   tour:true
                })
              }
            }
          })
          wx.request({
            url: 'https://campus.jiandanst.com/index/wxapi/job_collect',
            data: {
              consumer_id: value
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function (res) {
              if (res.data.length == 0) {
                that.setData({
                  flagJob: false
                })
              } else {
                that.setData({
                  job: res.data,
                  rookie:true,
                })
              }
            }
          })
        }, 1000)
      },
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

  //兼职详情页面的跳转
  positionDetailTap: function (event) {
    let part_time_id = event.currentTarget.dataset.id; //获取点击下拉id 
    wx.navigateTo({
      url: '../position-detail/position-detail?part_time_id=' + part_time_id
    });
  },

  //旅游详情页面的跳转
   travelDetailTap: function (event) {
     let tour_id = event.currentTarget.dataset.id;//获取点击下拉id
     wx.navigateTo({
       url: '../travel-detail/travel-detail?tour_id=' + tour_id
     });
  },
})