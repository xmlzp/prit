//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
			
       ],
       indicatorDots: false,
       autoplay: false,
       interval: 5000,
       duration: 1000,
	   travel:[] ,//旅游信息列表
	   tour_id:'' //详情页的id
   },
  onLoad:function(){
	  //旅游列表的信息
	  wx.request({
	           url: 'https://campus.jiandanst.com/index/wxapi/tour.html',
	           method: 'POST',
	           dataType: 'json',
	           header: {"Content-Type":"application/x-www-form-urlencoded"},
	             success: (res)=>{ 
	              console.log(res.data)
	              this.setData({
	  					travel:res.data
	               })
	          },
	  });
  },
  traveldetail:function(event) {
	let tour_id = event.currentTarget.dataset.id;//获取点击下拉id
	    this.setData({
	        tour_id:tour_id
	     })
  	wx.navigateTo({
  	    url: '../travel-detail/travel-detail?tour_id='+this.data.tour_id
  	});
  }
  //事件处理函数
})
