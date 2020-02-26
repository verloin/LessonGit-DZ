jQuery(function($) {

		$('.slick-item').slick({
			fade: true,
			draggable: false,
			speed: 1000,
			dots: true,
			arrows: false,
			dotsClass: 'slick-dots'
			// nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
			// prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
		});

		$('.testimonials__box').slick({
			fade: true,
			draggable: false,
			speed: 1000,
			dots: true,
			arrows: false,
			dotsClass: 'slick-dots'
		});

		$('.latest__inner').slick({
			fade: true,
			// draggable: false,
			speed: 1000,
			dots: true,
			arrows: false,
			dotsClass: 'slick-latest'
		});




    $('.portfolio__gallery').masonry({
        itemSelector: '.grid-item',
        columnWidth: 270,
        gutter: 10,
        horizontalOrder: true
    });

		var mixer = mixitup('.portfolio__gallery');

});









// $(document).ready(function(){
//     $('.your-class').slick({
//         setting-name: setting-value
//       });

//   });