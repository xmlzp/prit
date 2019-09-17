// pages/personal/personal.js
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
        var that = this;
        var id = options.id;
        var sexOption;
        wx.showToast({
              icon: 'loading',
              title: '加载中',
              duration: 1000,
              success: function() {
                setTimeout(function() {
                    wx.request({
                      url: 'https://campus.jiandanst.com/index/wxapi/consumer',
                      data: {
                        consumer_id: id
                      },
                      header: {
                        'content-type': 'application/json'
                      },
                      method: 'POST',
                      success: function(res) {
                        if (res.data.consumer_sex =="0"){
                          sexOption = "男"
                        } else if (res.data.consumer_sex == "1"){
                          sexOption = "女"
                        }
                        that.setData({
                          name: res.data.consumer_name,
                          number: res.data.consumer_student_id,
                          sex: sexOption,
                          phone: res.data.consumer_phone
                        })
                      }
                    })
                  },1000)
                }
              })
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

          }
      })