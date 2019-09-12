// pages/rookie/rookie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		formation:[], //兼职信息列表
		part_time_id:'' //兼职列表的id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	 //兼职列表的信息
	  wx.request({
	           url: 'https://campus.jiandanst.com/index/wxapi/parttime',
	           method: 'POST',
	           dataType: 'json',
	             header: {"Content-Type":"application/x-www-form-urlencoded"}, 
	             success: (res)=>{ 
	              // console.log(res.data)
	              this.setData({
					formation:res.data
	             })
	           },
	    });
    wx.setStorage({
      key: "phone",
      data: "13321232123"
    })  
  },
  //详情页面的跳转
  positionDetailTap: function (event) {
		  let part_time_id = event.currentTarget.dataset.id;//获取点击下拉id 
		      this.setData({
		        part_time_id:part_time_id
		      })
          wx.navigateTo({
              url: '../position-detail/position-detail?part_time_id='+this.data.part_time_id
          });
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

  }
})