(function($){
 	var $isotop;
	
 	function scrollTo(id){
 		var $obj = $(id);
 		var offset = $obj.offset().top;
 		$('html, body').animate({
		   scrollTop: offset
		 }, 1000);
 	}

	$(document).ready(function(event){

		// top nav scroll logic
		$(".nav-bar__menu-link, .black-and-white__container-btn, .hero__mouse-poiner").on("click", function (event) {
		  event.preventDefault();
		  var $this = $(this);
		  var id = $this.attr('href') || $this.data('href'); 
		  scrollTo(id);
		});
		// middle button scroll logic


		$isotop = $('.portfolio__izotop-wrap').isotope({
		  itemSelector: '.portfolio__img-holder',
		  percentPosition: true,
		  masonry: {
			  columnWidth: 20,
			  gutter: 20,
			}
		});

	})

	// init reaction
	function toogleClass(className, $context){		 
		return $($context)
			.siblings('.'+className)
			.toggleClass(className)
			.end()
			.toggleClass(className);
	}

	$('.portfolio__nav .portfolio__nav-item').on('click', function(event){
		var class_ = 'portfolio__nav-item--active';
		const fData = toogleClass(class_,this).data('id');
		$isotop.isotope({filter:fData});	
	});


	/* slick slider */
	$('.team__content-wrap, .testimonials__data-wbg').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	});
	/* scrols */
	$('.hero__mouse-poiner').on('click', function(event){
		document.querySelector('.portfolio').scrollIntoView({
			block: "start", 
  		behavior: 'smooth' 
		});	
	});
	

})(jQuery);