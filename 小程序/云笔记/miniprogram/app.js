//app.js
var kugouPlayer = requirePlugin("kugouPlayer")
kugouPlayer.player.initPlayer({
 noClimax: false, //默认是播放歌曲的高潮片段，传true则播放前60秒
 playMode: 'cycle', //cycle列表循环（默认）  loop 顺序播放  once单曲播放  random随机播放
 positionTop: '80rpx', //挂件距离顶部的距离，默认80rpx
 positionRight: '24rpx', //挂件距离侧边的距离，默认24rpx
});
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    player: kugouPlayer.player, //这样设置之后，在各页面就能通过getApp().player拿到全局播放器对象
    this.globalData = {}
  }
})
