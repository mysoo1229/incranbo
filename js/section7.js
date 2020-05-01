$(function(){
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > $('#section6').offset().top-100){
			barFn();
		}else{
			$('.sc7-bar-active').stop().animate({width:0+'%'},0);
		}
	});

	function barFn(){
		$('.sc7-bar-active').eq(0).stop().animate({width:95+'%'},600);
		$('.sc7-bar-active').eq(1).stop().animate({width:85+'%'},900);
		$('.sc7-bar-active').eq(2).stop().animate({width:70+'%'},800);
		$('.sc7-bar-active').eq(3).stop().animate({width:80+'%'},1000);
	}

});//section7.js