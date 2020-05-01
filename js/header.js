$(function(){

	var headerH = 60;
	var c=winW=0;

	$(window).scroll(function(){
		if($(window).scrollTop()>=30){
			$('header').addClass('headerScroll');
		}else{
			$('header').removeClass('headerScroll');
		}

		//headerH = $('#header').innerHeight();
	});

	$('.mainBtn').on({
		click: function(){
			anchor = $(this).attr('href');
			$('html,body').stop().animate({scrollTop:$(anchor).offset().top},600);

			winW=$(window).innerWidth();
			if(winW<992){
				$('.mNavBar').removeClass('mNavActive');
				$('.header-left-menu').stop().animate({right:'-100%'},500);
				c=0;
			}
		}
	});

	$('.startNowBtn').on({
		click:	function(){
			$('html,body').stop().animate({scrollTop:$('#section10').offset().top},600);
		}
	});

	$('.topBtn').on({
		click: function(){
			anchor = $(this).attr('href');
			$('html,body').stop().animate({scrollTop:0},600);
		}
	});

	$('.mNavBtn').on({
		click: function(){
			if(c==0){
				$('.mNavBar').addClass('mNavActive');
				$('.header-left-menu').stop().animate({right:0},500);
				c=1;
			}else{
				$('.mNavBar').removeClass('mNavActive');
				$('.header-left-menu').stop().animate({right:'-100%'},500);
				c=0;
			}
		}
	});


});//header.js