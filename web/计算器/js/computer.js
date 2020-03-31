window.onload = function(){
				var aNum = document.getElementsByClassName("num");
				var oScr = document.getElementsByClassName("screen")[0];
				for(var i=0;i< aNum.length;i++){
					aNum[i].onclick = function(){
						//如果为AC，则清屏,或者当屏幕为空时按加减乘除，都不允许显示
						if(this.value == "AC"||(oScr.value ==""&&(this.value == "+"||this.value == "-"||this.value == "*"||this.value == "/"))){
							oScr.value="";
						}
						
						else if(this.value == "Del" && oScr.value!=""){//如果为Del且屏幕不为空，则删除一位
							oScr.value=oScr.value.substr(0,oScr.value.length-1);
						}
						else if(this.value =="Del"){//不然，如果屏幕什么都没有，不执行操作（如果这一步不写当屏幕为空按del会出问题）
							oScr.value="";
						}
						else if(this.value == "."&& oScr.value==""){//如果为小数点，且屏幕为空,则在小数点前加0
							oScr.value="0.";
						}
						/*不知道为什么没有用，代码感觉没有问题，代码功能是当出现了其中一个运算符，再按下一个只会替换原来的那个
						 else if((oScr.value.charAt(oScr.length-1)=="+"||
						oScr.value.charAt(oScr.length-1)=="-"||
						oScr.value.charAt(oScr.length-1)=="*"||
						oScr.value.charAt(oScr.length-1)=="/")&&
						(this.value == "+"||this.value == "-"||this.value == "*"||this.value == "/")){
							oScr.value=oScr.value.substr(0,oScr.value.length-1)+this.value;
						} */
						else if(this.value =="="){
							oScr.value=eval(oScr.value);
						}
						
						else{
							oScr.value+=this.value;
						}
					}
				}
			}