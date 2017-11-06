$(document).ready(function(){

$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.nav-arrow').fadeIn();
		} else {
			$('.nav-arrow').fadeOut();
		}
	});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-80
        }, 900);
        return false;
      }
    }
  });
});

$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});


});

