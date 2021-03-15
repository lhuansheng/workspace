let startTime = 0, endTime = 0
let deleteArr = []
const { deleteItem, showLoading, hideLoading } = require('../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    datalist: [],
    value: '2018-11-11',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    lastMonth: 'lastMonth',
    nextMonth: 'nextMonth',
    selectVal: '',
    arrpicker: ['未分类', '学习', '生活', '工作', '摄影', '旅游', '交友',],
    arrColor: ['#ffffff', '#ed5b18', '#dff233', '#3bf71e', '#f71e1e', '#1e49f7', '#bf1cf5'],
    pickerindex: -1,
    ischange: false,
    isLongTap: false,
    modify: 'modify',
    deletebtn: ''
  },

  modify(e) {
    // 定位到对应的 笔记
    if (endTime - startTime < 350)
      wx.navigateTo({
        url: '/pages/newnote/newnote?noteId=' + e.currentTarget.dataset.id,
      })
  },
  add() {
    if (this.data.isLongTap) {
      wx.showModal({
        title: '删除笔记',
        content: '确定要删除吗',
        success: (res) => {
          if (res.confirm) {
            deleteItem(deleteArr).then(res => {
              this.setData({
                isLongTap: false,
                deletebtn: '',
                datalist: [],
                modify: 'modify'
              })
              // 删除了数据之后要重新渲染
              const len = this.data.datalist.length
              this.getDataList(-1, 20, len)
            })
          }
          else if (res.cancel) {
            console.log('用户点击取消')
            this.setData({
              isLongTap: false,
              deletebtn: '',
              modify: 'modify'
            })
          }
        }
      })

    }
    else
      wx.navigateTo({
        url: '/pages/newnote/newnote',
      })
  },
  checkboxChange(e) {
    deleteArr = e.detail.value
  },


  getDataList(category, num = 20, page = 0) {
    showLoading()
    return wx.cloud.callFunction({
      name: "getNoteList",
      data: {
        category: parseInt(category),
        num,
        page
      }
    }).then(res => {
      hideLoading()
      let oldData = this.data.datalist
      const newData = oldData.concat(res.result.data)
      this.setData({
        datalist: newData,
      })
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      pickerindex: parseInt(e.detail.value),
      datalist: [],
      ischange: true,
    })
    const len = this.data.datalist.length
    this.getDataList(this.data.pickerindex, 20, len)
  },
  clickall() {
    // 如果点过 分类，那么 oldData得清空
    if (this.data.ischange) {
      this.setData({
        datalist: [],
        pickerindex: -1
      })
    }
    const len = this.data.datalist.length
    this.getDataList(-1, 20, len).then(res => {
      this.setData({
        ischange: false
      })
    })

  },
  touchstart(e) {
    startTime = e.timeStamp
  },
  touchend(e) {
    endTime = e.timeStamp
  },
  longclickDelete(e) {
    this.setData({
      isLongTap: !this.data.isLongTap,
      modify: !this.data.isLongTap ? '' : 'modify',
      deletebtn: this.data.isLongTap ? '' : '../../images/delete.png',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    this.getDataList(-1)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const len = this.data.datalist.length
    this.getDataList(this.data.pickerindex || -1, 20, len)
  },
})