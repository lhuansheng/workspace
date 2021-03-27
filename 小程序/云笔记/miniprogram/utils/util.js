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
export async function getUrlById() {
  await wx.cloud.getTempFileURL({
    
  })
}



