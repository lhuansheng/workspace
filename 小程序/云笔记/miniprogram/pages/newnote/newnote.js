// pages/newnote/newnote.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formats: {},
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    noteId: null,
    showTime: '',
    arrpicker:['未分类','学习','生活','工作','摄影','旅游','交友'],
    arrColor:['#ffffff','#ed5b18','#dff233','#3bf71e','#f71e1e','#1e49f7','#bf1cf5'],
    pickerindex:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    // console.log(options)
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    const myDate = new Date()
    this.setData({
       isIOS,
       noteId:options.noteId,
       showTime: `${this.zero(myDate.getMonth()+1)}月${this.zero(myDate.getDate())}日 ${myDate.getHours()}:${myDate.getMinutes()}`
      })
      // console.log(this.data.noteId)
      // 有数据传进来
      
      if (this.data.noteId != null) {
        wx.cloud.callFunction({
          name:'getNoteItem',
          data: {
            id: this.data.noteId
          }
         }).then(res => {
         console.log(res.result)
         const {month,day,hour,minute,html,category} = res.result.data
         this.setData({
          showTime: `${month}月${day}日 ${hour}:${minute}`,
          pickerindex:category
         })
         this.editorCtx.setContents({
              html
            })
         })
      }

    const that = this
    this.updatePosition(1)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
   
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({ editorHeight, keyboardHeight })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  save() {
    wx.showLoading({
      title: '正在保存',
    })
    this.editorCtx.getContents({
      
      success: res => {
        const myDate = new Date()
        wx.hideLoading()
        console.log(this.data.pickerindex)
        if (this.data.noteId == null) {
         
          db.collection('cloudnotelist').add({
            data: {
              day: this.zero(myDate.getDate()),
              month: this.zero(myDate.getMonth()+1),
              year: myDate.getFullYear(),
              hour: myDate.getHours(),
              minute: myDate.getMinutes(),
              week: myDate.getDay(),
              html: res.html,
              preview: this.getTitle(res.text),
              date: myDate,
              category:parseInt(this.data.pickerindex)
            },
            success() {
              console.log("上传成功")
            },
            fail(res) {
              console.log("上传失败", res)
            }
          })
        }
        else {
          console.log("处理更新")
          db.collection('cloudnotelist').doc(this.data.noteId).update({
            data:{
              day: this.zero(myDate.getDate()),
              month: this.zero(myDate.getMonth()+1),
              year: myDate.getFullYear(),
              hour: myDate.getHours(),
              minute: myDate.getMinutes(),
              week: myDate.getDay(),
              html: res.html,
              preview: this.getTitle(res.text),
              date: myDate,
              category:parseInt(this.data.pickerindex) || 0
            }
          }).then(res=>{
            console.log(res,'update success')
          })
        }
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  },
  zero(str){
    str = str + ''
    return str.length<2?`0${str}`:str
  },
  getTitle(str) {
    str = str.trim()
    str = str.split(" ")[0];
    // 标题长度不能过长
    if(str.length >13) {
      str = str.slice(0,14)+ '...'
    }
    return str
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pickerindex: e.detail.value
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
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.enableAlertBeforeUnload({
      success:res => {
        console.log(1)
      },
      fail: res => {
        console.log(2)
      }
    })

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