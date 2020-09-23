var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow //窗口引用
var mainWindow = null //声明要打开的主窗口
app.on('ready',()=>{
  mainWindow = new BrowserWindow({width:800,height:500})
  mainWindow.loadFile('./index.html')
  mainWindow.on('closed',() => {
    mainWindow = null
  })
})