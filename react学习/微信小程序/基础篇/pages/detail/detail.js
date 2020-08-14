// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [
      {
        date:'06月27日',
        items: [
          {
          id: "1",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "2",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "3",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "4",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "5",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "6",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "7",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },
          {
          id: "8",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
          },

        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: '',
      success(data) {
        this.setData({
          articles: data.result
        })
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

  },
  showDetail(e) {
    console.log(e.currentTarget.dataset.item.id)
    wx.navigateTo({
      url: `/pages/logs/logs?id=${e.currentTarget.dataset.item.id}`,
    })
  }
})