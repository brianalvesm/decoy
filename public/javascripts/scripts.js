$(document).ready(function(){
	(function ($) {

		$('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-toggle');
	  
		$menulink.click(function() {
		  $menulink.toggleClass('active');
		  $menu.toggleClass('active');
		  return false;
		});

		$('.owl-quemsomos').owlCarousel({
		  nav:true,
			loop:true,
		  items:4,
		  dots:false,
		  autoplay:true
		});

	})(jQuery);
});
