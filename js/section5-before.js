jQuery(function(){
	
	var imgW=imgH=z=cols=0;
	
	//갤러리 이미비 박스 li 포지션 함수
	
	galleryFn(z); //최초실행
	
	setTimeout(galleryFn,100); //1초뒤에 실행
	
	$(window).resize(function(){
		galleryFn(z); //여기서 z를 안보내면 바꿀때마다 초기화가 되기 때문에 z를 넣어서 그 버튼 eq를 보내줘야함.
	});
	
	function galleryFn(z){ //galleryFn(index)해도 되지만 다른거 써주자
		
		//1200px 초과면 한줄에 4개
		//901-1200 3개
		//601-900 2개
		//0-600 1개
		
		if($(window).innerWidth()>1200){cols=4;}
		else if($(window).innerWidth()>900){cols=3;}
		else if($(window).innerWidth()>600){cols=2;}
		else{cols=1;}
		
		imgW = $(window).innerWidth()/cols;
		imgH = imgW;
		
		if(z==0){ //all
			rows = parseInt(8/cols+0.9); //그냥 8/3 = 2.2 무조건 자리 올림해야함. 2.2+0.9 = 3  // 8/4=2 + 0.9=2.9
			
			$('.section5-gallery ul').css({height:(imgH*rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			
			if(cols==4){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*0},200);
				
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*1},200);
			}else if(cols==3){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*1},200);
				
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*2},200);
			}else if(cols==2){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*2},200);
				
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*3},200);
			}else if(cols==1){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*4},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*5},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*6},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*7},200);
			}
			
			$('.section5-gallery div').addClass('addClassZoom');
		}else if(z==1){ //magento
			rows = parseInt(5/cols+0.9);
			
			$('.section5-gallery ul').css({height:(imgH*rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			
			$('.section5-gallery li').eq(1).stop().hide();
			$('.section5-gallery li').eq(5).stop().hide();
			$('.section5-gallery li').eq(7).stop().hide();
			
			if(cols==4){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
			}else if(cols==3){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
			}else if(cols==2){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
			}else if(cols==1){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*4},200);
			}
			
			$('.section5-gallery div').addClass('addClassZoom');
		}else if(z==2){ //jquery
			rows = parseInt(4/cols+0.9);
			
			$('.section5-gallery ul').css({height:(imgH*rows)});
		
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			
			$('.section5-gallery li').eq(2).stop().hide();
			$('.section5-gallery li').eq(5).stop().hide();
			$('.section5-gallery li').eq(6).stop().hide();
			$('.section5-gallery li').eq(7).stop().hide();
			
			if(cols==4){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*0},200);
			}else if(cols==3){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
			}else if(cols==2){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				
			}else if(cols==1){
				$('.section5-gallery li').eq(0).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
			}
			$('.section5-gallery div').addClass('addClassZoom');
		}else if(z==3){ //wordpress
			rows = parseInt(5/cols+0.9);
			
			$('.section5-gallery ul').css({height:(imgH*rows)});
		
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(3).stop().hide();
			$('.section5-gallery li').eq(6).stop().hide();
			
			if(cols==4){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
			}else if(cols==3){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
			}else if(cols==2){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
			}else if(cols==1){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(2).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*4},200);
			}
			
			$('.section5-gallery div').addClass('addClassZoom');
		}else if(z==4){ //html
			rows = parseInt(6/cols+0.9);
			
			$('.section5-gallery ul').css({height:(imgH*rows)});
		
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(2).stop().hide();
			
			if(cols==4){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*3),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
			}else if(cols==3){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*2),height:imgH,top:imgH*1},200);
			}else if(cols==2){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*1),height:imgH,top:imgH*2},200);
			}else if(cols==1){
				$('.section5-gallery li').eq(1).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*0},200);
				$('.section5-gallery li').eq(3).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*1},200);
				$('.section5-gallery li').eq(4).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*2},200);
				$('.section5-gallery li').eq(5).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*3},200);
				$('.section5-gallery li').eq(6).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*4},200);
				$('.section5-gallery li').eq(7).stop().show().animate({width:imgW,left:(imgW*0),height:imgH,top:imgH*5},200);
			}
			$('.section5-gallery div').addClass('addClassZoom');
		}
		
	}
	
	//갤러리 버튼 클릭 이벤트
	
	$('.sec5Bt').each(function(index){ //배열처리
		$(this).on({
			click: function(){
				$('.sec5Bt').removeClass('addGalBt');
				$(this).addClass('addGalBt');
				galleryFn(index);
				z = index; //밖으로 전달하려고. index는 이 안에서만 사용됨.
			}
		});
	});

	
	
}); //section5.js