/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Cyber_Security = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.Cybpreloader();
				this.BackgroundImage();
				this.CybStickymenu();
				this.CybMobileMenu();
				this.Animation();
				this.CybTestimonial();

			},
			Cybpreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#cyb-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.cyb-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -50
							}, 1000);
							return false;
						}
					}
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.cyb-scrollup').fadeIn();
					} else {
						$('.cyb-scrollup').fadeOut();
					}
				});

				$('.cyb-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			CybStickymenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.cyb-main-header').addClass('cyb-sticky-menu')
					} else {
						jQuery('.cyb-main-header').removeClass('cyb-sticky-menu')
					}
				})
			},
			CybMobileMenu: function (){
				$('.cyb-open_mobile_menu').on("click", function() {
					$('.cyb-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.cyb-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.cyb-mobile_menu li.dropdown ul').length){
					$('.cyb-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.cyb-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			CybTestimonial: function (){
				$(window).on('load',function(){
					$('#cyb-testimonial-id').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:3,

							},
							1300:{
								items:3,

							},
							1900:{
								items:3,
							},
						},
					})
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Cyber_Security.init();
});

})();