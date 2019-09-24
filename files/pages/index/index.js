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
	   tour_id:'' ,//详情页的id
	   navigation:[{'id':1,'name':'精选'},{'id':2,'name':'周边游'},{'id':3,'name':'情侣游'},{'id':4,'name':'游乐园'}],
	   idx:0, //默认下标为零为蓝色
	   index:''
   },
   //触发的下标
  pitch(event){
		  let index = event.currentTarget.dataset.index;
		  console.log(event.currentTarget.dataset.index)
		  let tour_type = event.currentTarget.dataset.id;//获取点击下拉id
		  //console.log(event.currentTarget.dataset.id)
	      this.setData({
	        idx:index
	      })
		  wx.request({
		           url: 'https://campus.jiandanst.com/index/wxapi/tour.html',
		           method: 'POST',
		           dataType: 'json',
		  			   data:{
		  			       "tour_type":tour_type
		  			   },
					 header: {"Content-Type":"application/x-www-form-urlencoded"},
		             success: (res)=>{ 
		              console.log(res.data)
		              this.setData({
		  					travel:res.data
		               })
		          },
		  });
  },
  onLoad:function(){
	  //旅游列表的信息
	  wx.request({
	           url: 'https://campus.jiandanst.com/index/wxapi/tour.html',
	           method: 'POST',
	           dataType: 'json',
			   data:{
			       "tour_type":1
			   },
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
