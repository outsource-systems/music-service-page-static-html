/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Email_Marketing = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.empreloader();
				this.BackgroundImage();
				this.emStickymenu();
				this.emMobileMenu();
				this.Animation();
				this.EmVideoBox();
				this.EmTestimonialSLider();

			},
			empreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#em-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.em-scrollup').fadeIn();
					} else {
						$('.em-scrollup').fadeOut();
					}
				});

				$('.em-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			emStickymenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.em-main-header').addClass('em-sticky-menu')
					} else {
						jQuery('.em-main-header').removeClass('em-sticky-menu')
					}
				});
				$('.em-main-navigation ul li a').on("click", function(){
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
			emMobileMenu: function (){
				$('.em-open_mobile_menu').on("click", function() {
					$('.em-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.em-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.em-mobile_menu li.dropdown ul').length){
					$('.em-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.em-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
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
			EmVideoBox: function (){
				if($('.video_box').length) {
					$('.video_box').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
					});
				}
			},
			EmTestimonialSLider: function (){
				jQuery('#em-testimonial-slide-id').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: true,
					autoplay: true,
				});
			},
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Email_Marketing.init();
});

})();