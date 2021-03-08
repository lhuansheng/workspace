
const weekday = {0:'周日',1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六'}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    value: '2018-11-11',
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        lastMonth: 'lastMonth',
        nextMonth:'nextMonth',
        selectVal: '',
        arrpicker:['未分类','学习','生活','工作','摄影','旅游','交友',],
        arrColor:['#ffffff','#ed5b18','#dff233','#3bf71e','#f71e1e','#1e49f7','#bf1cf5'],
        pickerindex:0,
  },

modify(e) {
  // 定位到对应的 笔记
  wx.navigateTo({
    url: '/pages/newnote/newnote?noteId='+e.currentTarget.dataset.id,
  })
},
add() {
  wx.navigateTo({
    url: '/pages/newnote/newnote',
  })
},
imgUrlFun(str){
  var data = '';
      str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
            data =  capture;
      });
  return data
},
bindPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  console.log(typeof e.detail.value)
 
  this.setData({
    pickerindex: e.detail.value
  })
  this.getDataList(this.data.pickerindex)
},
getDataList(category,num=10,page=0) {
  wx.cloud.callFunction({
    name:"getNoteList",
    data:{
      category: parseInt(category),
      num,
      page
    }
  }).then(res => {
    const arr = res.result.data
    const list = []
    arr.forEach(item => {
      const {day,month,preview,week,year,_id,html,hour,minute,category} = item
     list.push({
      day,
      month,
      preview,
      week: weekday[week],
      year,
      hour,
      minute,
      _id,
      html,
      imgsrc: this.imgUrlFun(html)|| '../../images/book.jpeg',
      category,
      all:1
     })
    });
    this.setData({
      datalist: list
    })
  })
},
clickall() {
  this.getDataList(-1)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList(-1)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const len = this.data.datalist.length
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})