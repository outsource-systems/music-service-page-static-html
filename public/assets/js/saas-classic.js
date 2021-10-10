/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_Saas = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.MobileMenu();
				this.Animation();
				this.OnePageNav();
				this.scrollTop();
				this.memberSLider();
			},

			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#saas-classic-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			MobileMenu: function (){
				$('.s2-open_mobile_menu').on("click", function() {
					$('.s2-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.s2-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.s2-mobile_menu li.dropdown ul').length){
					$('.s2-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.s2-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
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
			memberSLider: function (){
				$('#s2_team_slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:false,
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
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
						1000:{
							items:4,

						}
					},
				})
			},
			OnePageNav: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.saas_two_main_header').addClass('saas_2-menu-bg-overlay ')
					} else {
						jQuery('.saas_two_main_header').removeClass('saas_2-menu-bg-overlay ')
					}
				})
				$('.s2-main-navigation  .navbar-nav a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -80
							}, 1000);
							return false;
						}
					}
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.saas-classic-scrollup').fadeIn();
					} else {
						$('.saas-classic-scrollup').fadeOut();
					}
				});

				$('.saas-classic-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	SaaSio_Saas.init();
});

})();