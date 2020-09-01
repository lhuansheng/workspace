  // 根据网页真实结构 生成骨架屏
  // 1.找到有内容的 加一个 bgc
  // <img /> 文字 文本节点 有 background-image
  const bone = document.getElementsByClassName('bone')[0]
  function draw() {
  document.querySelectorAll('*').forEach(ele => {
    // 背景图片
    const hasBg = getStyle(ele,'background-image')
    if(hasBg && hasBg !== 'none') {
      ele.style.backgroundColor = '#666'
    }
    const hasBgc = getStyle(ele,'background-image')
    if(hasBgc && hasBgc !== 'rgba(0, 0, 0, 0)') {
      ele.style.backgroundColor = '#ccc'
    }
    if(ele.nodeName = 'IMG') {
      ele.src = 'data:image/gif;base64,R0lGODlhAQABAPAAAPT09AAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAIf8LWE1QIERhdGFYTVA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAA7'
    }
    if(ele.childNodes && ele.childNodes.length === 1 && ele.childNodes[0].nodeType=== Node.TEXT_NODE) {
      ele.style.backgroundColor = '#666'
      ele.style.color = '#666'
    }
  })
  let newEle = document.createElement('div',{is:1})
  bone.appendChild(newEle)
  }
  function getStyle(ele,prop) {
    // getComputedStyle可以拿到所有属性，不仅仅是行内的样式
    const styles = getComputedStyle(ele)
    return styles[prop]
  }
  draw()