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