window.onload = function() {
	var oOut = document.getElementById("out");
	var oOut_item = oOut.getElementsByTagName("img");
	var oLeft = document.getElementById("left");
	var oRight = document.getElementById("right");
	var aLi = document.getElementsByTagName("li");
	var x = 0; //轮播的第x张图片
	var marginleft_length = 0;
	var timer = null;
	run();
	var isclick = true; //防止点击速度过快

	function selected(x) { //选到某张图片的li会有固定样式
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].className = "";
			oOut_item[i].className = "";
			if (i == x) {
				aLi[x].className = "select";
				oOut_item[i].className = "haveopacity";
			}
		}
	}

	function run() { //每个一定事件自动切换图片
		timer = setInterval(function() {
			marginleft_length -= oOut_item[0].width;
			x++;
			if (x >= 5) {
				x = 0;
				marginleft_length = 0;
			}
			oOut.style.marginLeft = marginleft_length + "px";
			selected(x);
		}, 100);
	}

	oRight.onclick = function() { //点击oRight切换图片
		if (isclick) {
			isclick = false;
			clearInterval(timer);
			x++;
			if (x >= 5) {
				x = 0;
			}
			marginleft_length = -x * oOut_item[0].width;
			oOut.style.marginLeft = marginleft_length + "px";
			selected(x);
			setTimeout(function() {
				run();
				isclick = true;
			}, 1000);
		}


	}
	oLeft.onclick = function() { //点击oLeft切换图片
		if (isclick) {
			isclick = false;
			clearInterval(timer);
			x--;
			if (x < 0) {
				x = oOut_item.length - 1;
			}
			marginleft_length = -x * oOut_item[0].width;
			oOut.style.marginLeft = marginleft_length + "px";
			selected(x);
			setTimeout(function() {
				run();
				isclick = true;
			}, 1000);
		}
	}

	for (var i = 0; i < 5; i++) {
		(function(num) {
			aLi[num].onclick = function() {
				if (isclick) {
					isclick = false;
					clearInterval(timer);
					marginleft_length = -num * oOut_item[0].width;
					oOut.style.marginLeft = marginleft_length + "px";
					selected(num);
					x = num;
					setTimeout(function() {
						run();
						isclick = true;
					}, 1000);
				}
			}
		})(i);
	}

}
