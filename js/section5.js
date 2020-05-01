$(function(){
	
	var imgW=imgH=row=col=idx=0;
	var imgS=arrayS=[];

	galleryFn(idx);

	$(window).resize(function (){
		galleryFn(idx);
	});


	function galleryFn(idx){

		//1200=4개 / 992=3개 / 768=2개 /576=1개

		if($(window).innerWidth()>1024){col=4;}
		else if($(window).innerWidth()>768){col=3;}
		else if($(window).innerWidth()>576){col=2;}
		else{col=1;}

		imgW = $(window).innerWidth()/col;
		imgH = imgW;

		if(idx==0){
			row = parseInt(8/col+0.9);
			$('.sc5-gallery>ul').css({height:(imgH*row)});
			$('.sc5-gallery>ul>li>div').removeClass('sc5-zoom');
			$('.sc5-gallery>ul>li').stop().hide();

			imgS=[0,1,2,3,4,5,6,7];
			showImageFn(imgS);
			arrayS=imgS;
		}else if(idx==1){
			row = parseInt(5/col+0.9);
			$('.sc5-gallery>ul').css({height:(imgH*row)});
			$('.sc5-gallery>ul>li>div').removeClass('sc5-zoom');
			$('.sc5-gallery>ul>li').eq(1).stop().hide();
			$('.sc5-gallery>ul>li').eq(5).stop().hide();
			$('.sc5-gallery>ul>li').eq(7).stop().hide();

			imgS=[0,2,3,4,6];
			showImageFn(imgS);
			arrayS=imgS;
		}else if(idx==2){
			row = parseInt(6/col+0.9);
			$('.sc5-gallery>ul').css({height:(imgH*row)});
			$('.sc5-gallery>ul>li>div').removeClass('sc5-zoom');
			$('.sc5-gallery>ul>li').eq(2).stop().hide();
			$('.sc5-gallery>ul>li').eq(3).stop().hide();

			imgS=[0,1,4,5,6,7];
			showImageFn(imgS);
			arrayS=imgS;
		}else if(idx==3){
			row = parseInt(5/col+0.9);
			$('.sc5-gallery>ul').css({height:(imgH*row)});
			$('.sc5-gallery>ul>li>div').removeClass('sc5-zoom');
			$('.sc5-gallery>ul>li').eq(0).stop().hide();
			$('.sc5-gallery>ul>li').eq(4).stop().hide();
			$('.sc5-gallery>ul>li').eq(6).stop().hide();

			imgS=[1,2,3,5,7];
			showImageFn(imgS);
			arrayS=imgS;
		}else if(idx==4){
			row = parseInt(6/col+0.9);
			$('.sc5-gallery>ul').css({height:(imgH*row)});
			$('.sc5-gallery>ul>li>div').removeClass('sc5-zoom');
			$('.sc5-gallery>ul>li').eq(1).stop().hide();
			$('.sc5-gallery>ul>li').eq(2).stop().hide();
			$('.sc5-gallery>ul>li').eq(5).stop().hide();
			$('.sc5-gallery>ul>li').eq(6).stop().hide();

			imgS=[0,3,4,7];
			showImageFn(imgS);
			arrayS=imgS;
		}

	}

	function showImageFn(arrayS){
			k=-1;
			for(i=0;i<row;i++){
				for(j=0;j<col;j++){
					k++;
					$('.sc5-gallery>ul>li').eq(arrayS[k]).stop().show().animate({width:imgW,left:imgW*j,height:imgH,top:imgH*i},200);
				}
			}
			$('.sc5-gallery>ul>li>div').addClass('sc5-zoom');
	}

	$('.sc5-btn').each(function(sc5Idx){
		$(this).on({
			click: function(){
				$('.sc5-btn').removeClass('sc5-act');
				$(this).addClass('sc5-act');
				galleryFn(sc5Idx);
				idx=sc5Idx;
			}
		});
	});

});