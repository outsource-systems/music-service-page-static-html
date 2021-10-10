/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Itsource_2 = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Animation();
				this.StickeyHeader();
				this.MobileMenu();
				this.BackgroundImage();
				this.counterUp();
				this.scrollTop();
				this.videoBox();
				this.CarouselSlider();
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
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
			StickeyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.it-nw-header-area').addClass('it-nw-header-sticky')
					} else {
						jQuery('.it-nw-header-area').removeClass('it-nw-header-sticky')
					}
				});
				$('.it-nw-main-navigation ul li a').on("click", function(){
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
			MobileMenu: function (){
					$('.it_nw_open_it_nw_mobile_menu').on("click", function() {
						$('.it_nw_it_nw_mobile_menu_wrap').toggleClass("it_nw_it_nw_mobile_menu_on");
					});
					
				$('.it_nw_open_it_nw_mobile_menu').on('click', function () {
					$('body').toggleClass('it_nw_it_nw_mobile_menu_overlay');
				});
				if($('.mobile_menu-dropdown li.dropdown ul').length){
					$('.mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			scrollTop: function (){
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
			counterUp: function (){
				if($('.counter').length){
					jQuery('.counter').counterUp({
						delay: 50,
						time: 2000,
					});
				};
			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			CarouselSlider: function (){
				$('.it-nw-project-slider-area').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
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
							items:2,

						}
					},
				})
				$('.it-nx-testimonial-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
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
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				})
				$('.it-nw-blog-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
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
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				})
			},

		}
	}
	jQuery(document).ready(function (){
		Itsource_2.init();
	});

})();