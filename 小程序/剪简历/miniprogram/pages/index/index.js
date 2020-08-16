// 连接数据库
const db = wx.cloud.database()
const demolistdb =  db.collection("demolist")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objData:''
  },
  btnSub(e){
console.log(e)
    console.log(e.detail.value.author)
    let {title,content,author} = e.detail.value

    this.insertData(title,content,[],author,'')
  },
  getData(){
    // demolistdb.get()
    // .then(res=>{
    //   this.setData({
    //     objData:res.data
    //   })
    // })
    // 查询数据
    demolistdb.where({author:'小明'}).get()
    .then(res=>{
      console.log(res)
    })
  },
  // 封装 插入
  insertData(title='',content='',labels='[]',author='',time='') {
    wx.showLoading({
      title: '数据插入中',
      mask:true
    })
    demolistdb.add(
      {data:{
        title,
        content,
        labels,
        author,
        time
      }})
      .then(res=>{
        wx.hideLoading()
      })
  },
  addData(){
    this.insertData('数据插入中','打发了阿里扩大解放了垃圾啊劳动法离开的浪费垃圾啊来对抗肌肤',['fruit','apple'],'青蛙',231413412)
    // wx.showLoading({
    //   title: '数据插入中',
    //   mask:true
    // })
    // demolistdb.add(
    //   {data:{
    //     title:'测试标题1',
    //     content:'打发了阿里扩大解放了垃圾啊劳动法离开的浪费垃圾啊来对抗肌肤',
    //     labels:['fruit','apple'],
    //     author:'青蛙',
    //     time:231413412
    //   }})
    //   .then(res=>{
    //     console.log(res)
    //     wx.hideLoading()
    //   })
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