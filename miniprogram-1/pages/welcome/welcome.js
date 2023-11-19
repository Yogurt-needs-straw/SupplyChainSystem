// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seconds:3
  },

  doJump(e){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var instance = setInterval(()=>{
      if(this.data.seconds <= 0){
        // 定时器清除
        clearInterval(instance)
        // 跳转到项目页面 + 配置tabBar
        wx.switchTab({
          url: '/pages/index/index',
        })
      }else{
        this.setData({
          seconds:this.data.seconds - 1
        })
      }
    },1000)
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