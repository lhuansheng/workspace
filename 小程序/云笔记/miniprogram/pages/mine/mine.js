Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arrlist: [
      { title: "分享好友", openType: 'share' },
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
})