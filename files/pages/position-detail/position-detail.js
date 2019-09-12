// pages/position-detail/position-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //跳转详情页面
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
   * 立即报名
   */
  sign: function() {;
    wx.getStorage({
      key: 'phone',
      success(res) {
        console.log(res.data);
         if(res.data =="" || res.data == null){
           wx.showModal({
             title: '提示',
             content: '尊敬的用户，你未登录，请登录后立即报名',
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
           wx.showToast({
             title: '报名成功',
             icon: 'success',
             duration: 2000,
           })
         }
      }
    })
  }
})