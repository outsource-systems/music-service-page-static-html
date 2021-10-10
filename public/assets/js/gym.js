/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Education = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.BackgroundImage();
				this.Animation();
				this.AppGymSticky();
				this.AppGymMobileMenu();
				this.APPgymTestimonial();
			},
			BackgroundImage: function (){
				jQuery(window).on('load', function(){
					jQuery('#app-gym-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
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
			AppGymSticky: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.app-gym-main-header').addClass('app-gym-sticky-on')
					} else {
						jQuery('.app-gym-main-header').removeClass('app-gym-sticky-on')
					}
				})
				$('.app-gym-main-navigation ul li a').on("click", function(){
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
			AppGymMobileMenu: function (){
				$('.app-gym-open_mobile_menu').on("click", function() {
					$('.app-gym-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.app-gym-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.app-gym-mobile_menu li.dropdown ul').length){
					$('.app-gym-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.app-gym-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				};
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			APPgymTestimonial: function (){
				$('.app-gym-testimonial-slider').owlCarousel({
					margin:8,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:2,
						},
						900:{
							items:3,
						},
						1000:{
							items:3,

						}
					},
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Education.init();
});

})();