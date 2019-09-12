// pages/position-detail/position-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		part_time_id:'' ,//详情页id
		detali :[] ,//数据的详情
		windowHeight:'' //屏幕的高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		//获取屏幕的高度
		var windowHeight = wx.getSystemInfoSync().windowHeight
		console.log(wx.getSystemInfoSync().windowHeight)
		//跳转详情页面
		let part_time_id = options.part_time_id         
		console.log(options.part_time_id)
		this.setData({
			part_time_id:options.part_time_id,
			windowHeight:windowHeight
		});
		//页面详情页数
		  wx.request({
		          url: 'https://campus.jiandanst.com/index/wxapi/parttime_info',
		          method: 'POST',
		          dataType: 'json',
		          data:{
		          "part_time_id":part_time_id
		           },
		            header: {"Content-Type":"application/x-www-form-urlencoded"},
		            success: (res)=>{ 
		             console.log(res.data)
		             this.setData({
							detali:res.data
		              })
		         },
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