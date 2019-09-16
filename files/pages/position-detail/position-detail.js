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