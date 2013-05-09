$(function(){
			$("#prince").click(function(){
				var computerChoice = Math.random();
				if (computerChoice < 0.11) {
					computerChoice = "1.png";
				}
				else if(computerChoice <= 0.22) {
					computerChoice = "2.png";
				}
				else if(computerChoice <= 0.33) {
					computerChoice = "3.png";
				}
				else if(computerChoice <= 0.44) {
					computerChoice = "4.png";
				}
				else if(computerChoice <= 0.55) {
					computerChoice = "5.png";
				}
				else if(computerChoice <= 0.66) {
					computerChoice = "6.png";
				}
				else if(computerChoice <= 0.77) {
					computerChoice = "7.png";
				}
				else if(computerChoice <= 0.88) {
					computerChoice = "8.png";
				}
				else {
					computerChoice = "9.png";
				}
				//alert(computerChoice);
				$(this).css('backgroundImage', 'url(img/'+computerChoice+')');
			});	

			//边栏导航显示
			$('.showme').mouseover(function(){
				$('#about').css('left', '0');
			})
			$('#about').mouseleave(function(){
				$(this).css('left', '-91px');
			})

			//去过的地方，颜色和北京
			$("#place li").each(function(i){
				var a = Math.random();
				//alert(equRandom(a));
				var ranClass = equRandom(a);
				$(this).addClass(ranClass);
			 });
			//判断随机数大小的函数
			
			function equRandom(placeChoice){				
				if (placeChoice <= 0.25) {
					return "suc";
				}
				else if(placeChoice <= 0.5) {
					return "warning";
				}
				else if(placeChoice <= 0.75) {
					return "alert";
				}
				else {
					return "alert-info";
				}
			}
		});
			setInterval("showAuto()", 5000);
			//自动轮播
			function showAuto(){
				$("#prince").trigger('click');
			};