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
	var sections = $('.container-content')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

/*$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});*/

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height*2.5
  }, 500);
  
  return false;
});	
});
