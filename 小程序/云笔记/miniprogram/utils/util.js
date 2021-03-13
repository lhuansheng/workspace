// 删除笔记 ids 是数组
export function deleteItem(ids) {
  return wx.cloud.callFunction({
    name: 'deleteItem',
    data: {
      ids
    }
  })
}
// 加载
export function showLoading(title = "加载中") {
  wx.showLoading({
    title
  })
}
// 隐藏加载
export function hideLoading() {
  wx.hideLoading()
}
// 在html中提取第一个 图片的url
export function imgUrlFun(str) {
  var data = '';
  str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
    data = capture;
  });
  return data
}
// 补0
export function zero(str) {
  str = str + ''
  return str.length < 2 ? `0${str}` : str
}
// 提取 text 中的title
export function getTitle(str) {
  str = str.trim()
  if (str.length == 0) {
    return '无标题'
  }
  str = str.split(" ")[0];
  // 标题长度不能过长
  if (str.length > 13) {
    str = str.slice(0, 14) + '...'
  }
  return str
}

// 上传图片到云数据库
export function updateFiles(){
  wx.chooseImage({
    count: 9,
    success: res => {
      let files = res.tempFilePaths
      files.forEach((path,idx) => {
        const fileName = Date.now() + '_' +idx
        this.cloudFile(fileName,path)
      });
    }
  })
}
export async function cloudFile(fileName,path){
  let imgsrc = ''
 return await wx.cloud.uploadFile({
    cloudPath: 'expam.png',
    filePath: path, // 文件路径
    // success: res=>{
    // //  this.setData({
    // //    filePath:res.fileID
    // //  })
    // // console.log('fileID ',res.fileID)
    // // imgsrc = res.fileID
    // //  console.log(this.data.filePath)
    // },
    
  }).then(res => {
    return  res.fileID
  })
 
}
