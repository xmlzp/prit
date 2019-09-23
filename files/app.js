//app.js
let { WeToast } = require('src/wetoast.js') 
App({
  WeToast,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  config:{
	  //接口host
	  // host: 'https://www.'
  },
  apiList:{ //接口管理
	  
  },
	// get接口封装
   apiGet: function (url, data, callback) {
          wx.request({
              url: this.config.host + url,
              data: data,
              method: 'GET',
              dataType: 'json',
              header: { 'content-type': 'application/json;charset=UTF-8' },
              success: function (res) {
                  callback(res.data)
              },
              fail: function (res) {
                  console.log(url + '请求失败')
              },
              complete: function (res) {
                  console.log(url + '请求完成')
                  console.log(res);
              }
          })
      },
	  // get接口封装
      apiPost: function (url, data, callback) {
          wx.request({
              url: this.config.host + url,
              data: data,
              method: 'POST',
              dataType: 'json',
              header: { "content-type": "application/x-www-form-urlencoded" },
              success: function (res) {
                  callback(res.data)
              },
              fail: function (res) {
                  console.log(url + '请求失败')
              },
              complete: function (res) {
                  console.log(url + '请求完成')
                  console.log(res);
              }
          })
      },
      alert: function (msg) { //接口请求成功
          wx.showModal({
              content: msg,
              showCancel: false,
          });
      },
})