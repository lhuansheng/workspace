// pages/demo4/demo4.js
let urlArr = []
let filePath = []
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  clickBtn() {
    wx.chooseImage({
      count: 9,
      success:res => {
        console.log(res)
        // 这是临时路径
        filePath = res.tempFilePaths
        filePath.forEach((item,idx) => {
          const filename = Date.now() + '_' + idx
          this.cloudFile(filename,item)
        })
        // 要上传到云端
        
      }
    })
    // wx.cloud.uploadFile({
    //   cloudPath: "demopic/123.jpg",
    //   filePath: "临时路径"
    // })
  },
  cloudFile(filename,path) {
    wx.cloud.uploadFile({
      cloudPath: filename + ".jpg",
      filePath: path
    }).then(res => {
      urlArr.push(res.fileID)
      if(filePath.length === urlArr.length) {
        this.setData({
          urlArr
        })
      }
    
    })
  },
  jumpBtn() {
    wx.reLaunch({
      url: '/pages/demo3/demo3?val=3',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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