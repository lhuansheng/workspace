window.onload = function() {

	var aCheck = document.getElementsByClassName("check");

	var aPrice = document.getElementsByClassName("price");
	var aReduce = document.getElementsByClassName("reduce");
	var aCount_input = document.getElementsByClassName("count-input");
	var aAdd = document.getElementsByClassName("add");
	var aSubtotal = document.getElementsByClassName("subtotal");

	var priceTotal = document.getElementById("priceTotal");
	var selectTotal = document.getElementById("selectedTotal");
	var aDelete = document.getElementsByClassName("delete");
	
	var closing = document.getElementById("closing");
	updateTotal(); //初始化

	function updateTotal() { //更新
		selectTotal.innerHTML = 0;
		priceTotal.innerHTML = 0;
		for (var i = 0; i < aReduce.length; i++) {
			if(aCheck[i+1].checked){
				selectTotal.innerHTML = parseInt(selectTotal.innerHTML) + parseInt(aCount_input[i].value);
				priceTotal.innerHTML = parseInt(priceTotal.innerHTML) + parseInt(aPrice[i].innerHTML) * parseInt(aCount_input[i].value);
			}
		}
	}

	aCheck[0].onclick = function() { //全选
			for (var i = 1; i < aCheck.length; i++) {
				aCheck[i].checked = aCheck[0].checked;
				aCheck[i].onclick=function(){
					updateTotal();
				}
		} 
		updateTotal();
	}


	for (var i = 0; i < aReduce.length; i++) {
		(function(i) {
			aReduce[i].onclick = function() { //某个商品数量减少按钮
				if (aCount_input[i].value > 0 && aCheck[i + 1].checked) {
					aCount_input[i].value = aCount_input[i].value - 1;
					aSubtotal[i].innerHTML = parseInt(aSubtotal[i].innerHTML) - parseInt(aPrice[i].innerHTML);
					updateTotal();
				}
			}
			aAdd[i].onclick = function() { //某个商品数量增加按钮
				if (aCheck[i + 1].checked) {
					aCount_input[i].value = parseInt(aCount_input[i].value) + 1;
					aSubtotal[i].innerHTML = parseInt(aSubtotal[i].innerHTML) + parseInt(aPrice[i].innerHTML);
					updateTotal();
				}
			}
			aDelete[i].onclick = function() { //清空某个商品按钮
				if (aCheck[i + 1].checked) {
					if (confirm("您确定要删除吗？") == true) {
						aCount_input[i].value = 0;
						aSubtotal[i].innerHTML = 0;
						updateTotal();
					}
				}
			}
		})(i);
	}
	closing.onclick = function() {
		alert("您总共花了" + priceTotal.innerHTML + "大洋");
	}

}
