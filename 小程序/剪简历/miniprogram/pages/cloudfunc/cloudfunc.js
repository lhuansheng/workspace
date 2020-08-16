// pages/cloudfunc/cloudfunc.js
const db = wx.cloud.database()
const demolist = db.collection('demolist')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },
  getData(num=5,page=0) {
    wx.cloud.callFunction({
      name:'getdemolist',
      data:{
        num:5,
        page
      }
    }).then(res => {
      let oldData = this.data.datalist
      let newData = oldData.concat(res.result.data)
      this.setData({
        datalist:newData
      })
    })
  },
  clickrow(e) {
    console.log(e.currentTarget.dataset.id)
    const {id,idx} = e.currentTarget.dataset
    wx.cloud.callFunction({
      name:"updatehints",
      data:{
        id:id
      }
    }).then(res=>{
      let newData = this.data.datalist
      newData[idx].hints += 1
      this.setData({
        datalist:newData
      })
     
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = this.data.datalist.length
    this.getData(5,page)
  },
  onLoad:function() {
    this.getData()
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})