var kugouPlayer = requirePlugin("kugouPlayer")
const db = wx.cloud.database()
//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList: [{ songName: "怎么办我爱你", albumAudioId: "54513410", fileHash: "017E8945DDE67928288EFCF56F071A36", singerName: "本兮" }],
    isPlay: false,
    songName: '怎么办我爱你',
    singer: '本兮',
    singerImg: 'https://p3fx.kgimg.com/stdmusic/120/20200620/20200620060922742572.jpg',
    isOpen: false,
  },
  btnPlay() {
    // 0代表初始化状态 1代表暂停，2播放
    if (kugouPlayer.player.getPlayStatus() == 0) {
      kugouPlayer.player.playSong(0)
    }
    this.data.isPlay ? kugouPlayer.player.pause() : kugouPlayer.player.play()

    // this.data.isPlay?kugouPlayer.player.pause():kugouPlayer.player.playSong(this.data.musicList)
    this.setData({
      isPlay: !this.data.isPlay
    })
  },
  btnListener(){  kugouPlayer.player.addEventPlaySongResultCallBack(res => {
    // console.log(res)
    const { title, singer, singerImgUrl } = res.data
    singerImgUrl ? singerImgUrl : 'https://636c-cloudserver-exy4x-1302852641.tcb.qcloud.la/note/musicbackground.jpg?sign=ae74050e2835b452d0b7c8647df88c0c&t=1619164553'
    if (this.data.songName !== title) {
      this.setData({
        songName: title,
        singer: singer,
        singerImg: singerImgUrl,
      })
    }
  }, )},
  btnPre() { kugouPlayer.player.playPre();this.btnListener() },
  btnNext() {
    kugouPlayer.player.playNext()
    this.btnListener()
  },
  getMusicList() {
    wx.cloud.callFunction({
      name: "getMusicList",
    }).then(res => {
      // console.log(res,'musiclist')
      const musicList = res.result.data || []
      if(res.length===0){
        kugouPlayer.player.updateSongList([{ songName: "怎么办我爱你", albumAudioId: "54513410", fileHash: "017E8945DDE67928288EFCF56F071A36", singerName: "本兮" }])
      }
     else {
       this.setData({singerImg:musicList[0].singerImgUrl,musicList})
      kugouPlayer.player.updateSongList(musicList)
     }
    })
  },
  btnDialog() {this.setData({isOpen:true})},
  btnplay(obj) {
    // 组件传过来的值
    // console.log(obj)
    kugouPlayer.player.playSong(obj.detail)

    this.setData({isPlay:true})
    // console.log(kugouPlayer.player.getPlayStatus())
    this.btnListener()

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取云端音乐列表
    // console.log('onload')
    this.getMusicList()
    kugouPlayer.player.addEventPlaySongResultCallBack(res => {
      const { title, albumAudioId, hash, singer,singerImgUrl } = res.data
      let id = Date.now()+'song'
      // let isExit = this.data.musicList.find(res => res.fileHash==hash)
      let isExit = this.data.musicList[0].fileHash==hash
      if(!isExit) {
        db.collection('cloudnotemusic').add({data:{
          songName:title, albumAudioId, fileHash:hash, singerName:singer,id,singerImgUrl
        }})
        this.setData({
          isPlay:true,
          musicList: [{
            songName:title, albumAudioId, fileHash:hash, singerName:singer,id,singerImgUrl
          }].concat(this.data.musicList)
        })
      };
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
   
   
 
  },

  
})