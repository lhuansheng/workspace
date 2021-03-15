// pages/newnote/newnote.js
const db = wx.cloud.database()
const {deleteItem, showLoading, hideLoading,imgUrlFun,zero,getTitle } = require('../../utils/util')
const weekday = {0:'周日',1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六'}
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
    compareChange:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    const myDate = new Date()
    this.setData({
       isIOS,
       noteId:options.noteId,
       showTime: `${zero(myDate.getMonth()+1)}月${zero(myDate.getDate())}日 ${zero(myDate.getHours())}:${zero(myDate.getMinutes())}`
      })
      // 有数据传进来
      if (this.data.noteId != null) {
        showLoading("加载笔记中")
        wx.cloud.callFunction({
          name:'getNoteItem',
          data: {
            id: this.data.noteId
          }
         }).then(res => {
         const {month,day,hour,minute,html,category} = res.result.data
         this.setData({
          showTime: `${month}月${day}日 ${hour}:${minute}`,
          pickerindex:category,
          compareChange:html,
         })
         hideLoading()
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
  
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  save() {
    showLoading('正在保存')
    this.editorCtx.getContents({
      success: res => {
        const myDate = new Date()
        hideLoading()
        if (this.data.noteId == null) {
         
          db.collection('cloudnotelist').add({
            data: {
              day: zero(myDate.getDate()),
              month: zero(myDate.getMonth()+1),
              year: myDate.getFullYear(),
              hour: zero(myDate.getHours()),
              minute: zero(myDate.getMinutes()),
              week: weekday[myDate.getDay()],
              html: res.html,
              preview:getTitle(res.text),
              date: myDate,
              category:parseInt(this.data.pickerindex) || 0,
              imgsrc: imgUrlFun(res.html)|| '../../images/book.jpeg',
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
              day: zero(myDate.getDate()),
              month: zero(myDate.getMonth()+1),
              year: myDate.getFullYear(),
              hour: zero(myDate.getHours()),
              minute: zero(myDate.getMinutes()),
              week: weekday[myDate.getDay()],
              html: res.html,
              preview: getTitle(res.text),
              date: myDate,
              category:parseInt(this.data.pickerindex) || 0,
              imgsrc: imgUrlFun(res.html)|| '../../images/book.jpeg',
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
  delete() {
    wx.showModal({
      title: '删除笔记',
      content: '确定要删除吗',
      success: (res)=> {
      if (res.confirm) {
      console.log('用户点击确定')
      // 如果是修改数据，有 id，不是修改，直接返回
      if(this.data.noteId){
        deleteItem([this.data.noteId])
      }
      wx.reLaunch({
        url: '/pages/index/index',
      })
      } 
      else if (res.cancel) {
      console.log('用户点击取消')
     
      }
      }})
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        const fileName = Date.now()+'_O'
        wx.cloud.uploadFile({
          cloudPath: fileName,
          filePath: res.tempFilePaths[0]
        })
        .then(res => {
          that.editorCtx.insertImage({
            src:  res.fileID,
            data: {
              id: 'abcd',
              role: 'god'
            },
            width: '80%',
            success: function () {
              console.log('insert image success')
            }
          })
        })
      }
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      pickerindex: e.detail.value
    })
  },
})