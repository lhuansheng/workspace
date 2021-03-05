// pages/demo1/demo1.js
const db = wx.cloud.database();
const demolist = db.collection("demolist")
let myVal = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 更新数据
  updateData() {
    // 小程序端只能用 doc,不能用where等，权限比较低
    demolist.doc("3adec2825f39500e00d3310764f49faa").update({
      data: {
        author:"dd",
        posttime:'12'
      }
    })
  },
  // 删除数据
  delData() {
    demolist.doc("79550af2603de18b07e33f047d158359")
    .remove()
  },
  // 获取输入的内容
  myIpt(res) {
    const val = res.detail.value
    console.log(val)
    myVal = val
  },
  btnNum() {
    demolist.count()
    .then(res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 监听页面变化，当对数据进行增删改，都能监听到
    // 能够监听到改变的数据
    demolist.watch({
      onChange: res => {
        console.log(res)
      },
      onError: res => {
        console.log(res)
      }
    })
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