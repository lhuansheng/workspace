Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arrlist: [
      { title: "分享好友", openType: 'share' },
      { title: "文档识别", func: "identifyText", },
      { title: "隐私权限", func: "personal", },
      { title: "bug反馈", openType: "contact", },
      { title: "设置", func: "settingfunc", },
    ]
  },
  personal() {
    wx.navigateTo({
      url: '/pages/personal/personal',
    })
  },

  settingfunc() {
    wx.openSetting({
      success(res) {
        // console.log(res.authSetting)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo, 'aaa')
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    // console.log(e.detail.userInfo)
  },
  identifyText(e) {
    wx.chooseImage({
      count: 1,
      success: res => {
        const filePath = res.tempFilePaths[0]
        wx.cloud.uploadFile({
          cloudPath: Date.now() + '.png',
          filePath
        }).then(res => {
          wx.showLoading({
            title:'正在识别...'
          })
          // console.log('fileId: ', res.fileID)
          wx.cloud.getTempFileURL({
            fileList: [{ fileID: res.fileID }]
          }).then(res => {
            // console.log('url: ',res.fileList[0].tempFileURL)
            let imgurl = res.fileList[0].tempFileURL

            wx.cloud.callFunction({
              name: 'getImageText',
              data: {
                imgUrl: res.fileList[0].tempFileURL
              }
            }).then(imageres => {
              wx.hideLoading()
              // console.log('text:',imageres.result.items)
              let items = imageres.result.items
              // console.log(items)
              if (items) {
                wx.navigateTo({
                  url: '/pages/imageText/imageText' + '?imgurl=' + imgurl + '&items=' + JSON.stringify(items),
                })
              } else {
                wx.showToast({
                  title: '无法识别该图片',
                  icon: 'error',
                  duration: 500
                })
              }

            })
          })
        })




      }
    })
  }
})