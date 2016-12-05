$(function(){
   $('body').fadeIn(1000);
});

$(function(){
	var scroll=0;
	$(window).scroll(function(event){
		var moved=$(this).scrollTop();
		if(moved > scroll){
			$('.navbar').addClass('visible')
			$('#logo').attr('id','inverse-logo')
			$('.navbar nav a').css({'color':'#1f1f1f','font-weight':'bolder'});
			//$('.navbar').css('background','black');
		}

		if (moved === 0) {
			$('.navbar').removeClass('visible')
			$('#inverse-logo').attr('id','logo')
			$('.navbar nav a').css('color','#ffffff')
		}

		if (moved > scroll) {

		}

		scroll=moved;
	});
});

$(function(){
	var total = $('.imageport-wrap .imageport').length;

	$('.fa-chevron-right').click(function(){
		var ind;
		$('.imageport-wrap').find('.imageport').map(function(){
			if ($(this).css('display') == 'block')
				ind = $(this).index();
		});

		if (ind == total-1)
			ind= -1;

		$('.imageport-wrap').find('.imageport').eq(ind).toggle("slide", { direction: "left"}, 200);
		$('.imageport-wrap').find('.imageport').eq(ind+1).toggle("slide", { direction: "right"}, 400);
	});

	$('.fa-chevron-left').click(function(){
		var ind;
		$('.imageport-wrap').find('.imageport').map(function(){
			if ($(this).css('display') == 'block')
				ind = $(this).index();
		});

		if (ind == -1)
			ind = total;

		$('.imageport-wrap').find('.imageport').eq(ind).toggle("slide", { direction: "right"}, 200);
		$('.imageport-wrap').find('.imageport').eq(ind-1).toggle("slide", { direction: "left"}, 400);
	});
})