/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_Digital_Marketing = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.Preloader();
				this.HeaderMenuOption();
				this.BackgroundImage();
				this.Animation();
				this.AppDmSliderCarousel();
			},
			Preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#app-dm-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			HeaderMenuOption: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.app-dm-header-main').addClass('sticky-on')
					} else {
						jQuery('.app-dm-header-main').removeClass('sticky-on')
					}
				});
				$('.app-dm-open_mobile_menu').on("click", function() {
					$('.app-dm-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.app-dm-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.app-dm-mobile_menu li.dropdown ul').length){
					$('.app-dm-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.app-dm-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$('.app-dm-main-menu-wrapper ul li a').on("click", function(){
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
						$('.app-dm-scrollup').fadeIn();
					} else {
						$('.app-dm-scrollup').fadeOut();
					}
				});

				$('.app-dm-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				if($('.lightbox-image').length) {
					$('.lightbox-image').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
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
			AppDmSliderCarousel: function (){
				$('.app-dm-project-slider-area').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
					e.target
					e.relatedTarget
					$('.app-dm-project-slider-area').slick('setPosition');
				});
				$('.app-dm-testimonial-slider').owlCarousel({
					margin:30,
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
							items:2,
						},
						1000:{
							items:3,

						}
					},
				});
				$('.app-dm-blog-slider').owlCarousel({
					margin:30,
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
	SaaSio_Digital_Marketing.init();
});

})();