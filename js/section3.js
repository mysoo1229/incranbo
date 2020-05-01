$(function(){
	var myVar=[0,0,0,0];
	var cnt=[0,0,0,0];//arbitrary num

	$(window).scroll(function(){
		if($(window).scrollTop() > $('#section2').offset().top+100){
			myVar[0] = setInterval(sc3Fn0,230.810);
			myVar[1] = setInterval(sc3Fn1,110.407);
			myVar[2] = setInterval(sc3Fn2,50.405);
			myVar[3] = setInterval(sc3Fn3,850.714);
		}else{
			cnt[0]=0;
			cnt[1]=0;
			cnt[2]=0;
			cnt[3]=0;
		}
	});
	
	function sc3Fn0(){
		cnt[0]++;
		if(cnt[0]<=126){
			$('.sc3-count').eq(0).text(cnt[0]);
		}else{clearInterval(myVar[0]);}
	}
	function sc3Fn1(){
		cnt[1]++;
		if(cnt[1]<=263){
			$('.sc3-count').eq(1).text(cnt[1]);
		}else{clearInterval(myVar[1]);}
	}
	function sc3Fn2(){
		cnt[2]++;
		if(cnt[2]<=555){
			$('.sc3-count').eq(2).text(cnt[2]);
		}else{clearInterval(myVar[2]);}
	}
	function sc3Fn3(){
		cnt[3]++;
		if(cnt[3]<=35){
			$('.sc3-count').eq(3).text(cnt[3]);
		}else{clearInterval(myVar[3]);}
	}


});
