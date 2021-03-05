// 连接数据库
const db = wx.cloud.database()
// 获取 demolist表 里面的数据
const demolist = db.collection('demolist')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: ""
  },
  // 查询数据
  getData() {
    // 获取数据库里面 id 为 9ffb2a485f35ebd80083e31170f9410d 的一条数据
    demolist.get({
      success: res => {
        console.log(res)
        this.setData({
          dataObj: res.data
        })
      }
    })
  },
  // 提交表单添加进数据库
  btnSub(res) {
    // console.log(res) 解构
    const {title, author, content} = res.detail.value
    // console.log(title,author,content)
    demolist.add({
      data: {
        title,
        author,
        content
      }
    }).then(res => {
      console.log(res)
    })
    
  },
  // 添加数据
  addData() {
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    demolist.add({
      data: {
        title: "测试标题",
        author: "张三",
        content: "测试的内容"
      }
    }).then(res => {
      wx.hideLoading({
        success: (res) => {},
        
      })
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