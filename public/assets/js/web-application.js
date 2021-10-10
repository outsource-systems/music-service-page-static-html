/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Web_Application = {
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
				this.WebAppcounterUp();
				this.WebAppTestimonialSLider();

			},
			empreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#web-app-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.web-app-scrollup').fadeIn();
					} else {
						$('.web-app-scrollup').fadeOut();
					}
				});

				$('.web-app-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			emStickymenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.web-app-main-header').addClass('web-app-sticky-menu')
					} else {
						jQuery('.web-app-main-header').removeClass('web-app-sticky-menu')
					}
				})
				$('.web-app-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -80
							}, 1000);
							return false;
						}
					}
				});
			},
			emMobileMenu: function (){
				$('.web-app-open_mobile_menu').on("click", function() {
					$('.web-app-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.web-app-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.web-app-mobile_menu li.dropdown ul').length){
					$('.web-app-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.web-app-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
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
			WebAppcounterUp: function (){
				if ($(".odometer").length) {
					$('.odometer').appear();
					$(document.body).on('appear', '.odometer', function(e) {
						var odo = $(".odometer");
						odo.each(function() {
							var countNumber = $(this).attr("data-count");
							$(this).html(countNumber);
						});
					});
				}
			},
			WebAppTestimonialSLider: function (){
				jQuery('#web-app-testimoial-slide').owlCarousel({
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
	Appilo_Web_Application.init();
});

})();