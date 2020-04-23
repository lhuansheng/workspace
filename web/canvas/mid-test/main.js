//定义画布
var canvas;
//定义画笔
var context;

canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
		
var myGrid = new Grid();//网格对象初始化
myGrid.initGrid();//图片预加载
window.onload = function(){
	myGrid.drawGrid();//图片绘制
}

function Grid(){
	this.xNumber = 10;
	this.yNumber = 10;
	
	this.allImgInfo = new Array();//1-4 对象数组
	
	
	this.initGrid = function(){
		for(var i = 0;i<this.xNumber;i++){
			for(var j = 0;j<this.yNumber;j++){
				var fru = new fruit();
				fru.setPos(i,j);
				
				this.allImgInfo.push(fru);
			}
		}
		
	}
	
	this.drawGrid = function(){
		for(var i = 0;i<this.allImgInfo.length;i++){
			this.allImgInfo[i].drawFru();
		}
	}
}
function fruit(){
	this.imgInfo = Math.floor(Math.random()*4+1);//图片
	this.img = getImage("img/"+this.imgInfo+".png");
	
	this.x = 0;
	this.y = 0;
	
	this.setPos = function (xx,yy){
		this.x = xx;
		this.y = yy;
	}
	this.drawFru = function(){
		console.log(this.img);
		context.drawImage(this.img,this.x*32,this.y*32);
	}
}

function getImage(obj){
	var img = new Image();
	img.src = obj;
	
	return img;
}