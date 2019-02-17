/***********************************************
			services section
***********************************************/
$(function(){
	// animate scroll
	new WOW().init();
});

/***********************************************
			work section
***********************************************/
$(function(){
	$("#work").magnificPopup({
	delegate: 'a', 
	type: 'image',
	gallery:{
		enabled: true
		}
	});

}); 

/***********************************************
			team section
***********************************************/
$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});

}); 

/***********************************************
			Testimonial section
***********************************************/
$(function(){
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true
	});

});
/***********************************************
			stat section
***********************************************/
$(function(){
	$('.counter').counterUp({
		delay: 10,
		time:3000
	});

}); 

/***********************************************
			client section
***********************************************/
$(function(){
	$("#clients-list").owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true
	});

}); 

/***********************************************
			Navigation section
***********************************************/
//show/hide nav black background

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() < 50 ){
			// hide nav
			$("nav").removeClass("juis-top-nav");
			$("#back-to-top").fadeOut();

		} else {
			// show nav
			$("nav").addClass("juis-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
	
}); 

//smooth-scroll
$(function(){
	
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();

		//get/return id like #about, work, #team, etc
		var section = $(this).attr("href");
		
		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250);
	})
})