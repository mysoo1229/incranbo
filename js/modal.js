$(function(){
	var galN=topM=0;
	var galT=getTxt='';

	setInterval(imgTopMargin,100);

	function imgTopMargin(){
		topM= ( $(window).innerHeight() - $('.modalImg').innerHeight() )/2;
		$('.modalImg').css({top:topM});
	}

	$(window).resize(function(){
		imgTopMargin();
	});

	//open
	$('.galBtn').each(function(idx){
		$(this).on({
			click:function(){
				$('#modal').show();
				$('html').addClass('removeScroll');

				galN=idx+1; //0이면 img01
				$('.modalImg>img').attr('src','img/work/0'+galN+'.jpeg');

				galT=$(this).find('div>span').text();
				$('.modalImg span').text(galT);
			}
		});
	});

	//close
	$('.modalCloseBtn').on({
		click:function(){
			$('#modal').hide();
			$('html').removeClass('removeScroll');
		}
	});

	//next button
	$('.modalNextBtn').on({
		click:function(){
			galN++;
			if(galN>8){galN=1;}
			galFn();
		}
	});

	//prev button
	$('.modalPrevBtn').on({
		click:function(){
			galN--;
			if(galN<1){galN=8;}
			galFn();
		}
	});

	function galFn(){
		$('.modalImg>img').attr('src','img/work/0'+galN+'.jpeg');
		getTxt=$('.galBtn').eq(galN-1).find('div>span').text();
		$('.modalImg span').text(getTxt);
	}

});