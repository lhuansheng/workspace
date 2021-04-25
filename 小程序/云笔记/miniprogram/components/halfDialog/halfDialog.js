// components/halfDialog.js
const {deleteItem} = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isOpen:{
      type:Boolean,
      value: false,
      observer(newval,oldval,change) {
        wx.cloud.callFunction({
          name: "getMusicList",
        }).then(res =>{
          this.setData({
            musicList:res.result.data,
          })
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    musicList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
  onMyEvent() {
  this.triggerEvent('kkk')
  this.setData({
    isOpen:true
  })

},
btnMask() {
  this.setData({
    isOpen:false
  })
  let ids = []
  // 删除数据
  this.data.musicList.forEach(res => {
   if(res.isDelete){
    ids.push(res._id)
   }
  })
  deleteItem(ids,'deleteMusicItem')

  
},
btnItem(e) {
  // console.log(e.currentTarget.dataset.id,e)
  const {idx,name,id,hash} = e.target.dataset
  // console.log(idx,name,id)
  if(name=='del'){
    this.setData({
      ["musicList["+idx+"].isDelete"]:true
    })
  }
  else {
    this.triggerEvent('play',{hash,album_audio_id:id})
    // console.log(hash,id)
  }
},
  }
})
