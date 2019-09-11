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
       duration: 1000
  },
  onLoad:function(){
  },
  traveldetail:function() {
  	wx.navigateTo({
  	    url: '../travel-detail/travel-detail'
  	});
  }
  //事件处理函数
})
