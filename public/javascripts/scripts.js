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
			responsive : {
				// breakpoint from 0 up
				0 : {
					center:true,
					margin:10,
					nav:false,
					loop:true,
					items:1,
				  dots:false,
				  autoplay:true
				},
				// breakpoint from 640 up
				640 : {
			    center:false,
			    margin:10,
				  nav:true,
					loop:true,
				  items:3,
				  dots:false,
				  autoplay:true
				},
				1024 : {
					center:false,
			    margin:10,
				  nav:true,
					loop:true,
				  items:4,
				  dots:false,
				  autoplay:true
				}
			}
		});

	})(jQuery);
});
