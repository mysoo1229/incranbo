$(function(){

	//창높이를 섹션1의 높이로 설정하기
	var winH=0;

	winResizeFn();
	setTimeout(winResizeFn,100);

	function winResizeFn(){
		winH=$(window).innerHeight();
		$('.sc1-slide-content').css({height:winH});
	}

	obj.init();

});//section1.js


var cnt=0;
var obj = {
	init : function(){
		obj.mySwipeFn();
		obj.mySlideNavFn();
	},
	mySwipeFn : function(){
		$('.sc1-slide-content').swipe({
			swipeLeft: function(){
				cnt++;
				if(cnt>2){cnt=2;}
				obj.mySlideFn();
			},
			swipeRight: function(){
				cnt--;
				if(cnt<0){cnt=0;}
				obj.mySlideFn();
			}
		});
	},
	mySlideFn : function(){
		$('.sc1-slide-content').stop().animate({left:(-100*cnt)+'%'},1000);
		$('.slideNavBt').removeClass('slideNavBtActive');//active지우기
		$('.slideNavBt').eq(cnt).addClass('slideNavBtActive');//cnt일때만 active달기
	},
	mySlideNavFn : function(){
		$('.slideNavBt').each(function(i){
			$(this).on({
				click:function(){
					cnt=i;
					obj.mySlideFn();
				}
			});
		});
	}
}
