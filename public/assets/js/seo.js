/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_eight = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.APSeopreloader();
				this.APPSeoHeader();
				this.AppSeoSideInner();
				this.APSeoVideoPopUp();
				this.AppSeoMobileMenu();
				this.Animation();
				this.AppSeoPartner();
				this.AppSeoTestimonial();
				this.APSeoBackgroundImage();
				this.APPseoscrollTop();
				
			},

			APSeopreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#appseo-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			APPSeoHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.appseo-main-header').addClass('appseo-sticky-header-overlay')
					} else {
						jQuery('.appseo-main-header').removeClass('appseo-sticky-header-overlay')
					}
				})
			},
			AppSeoSideInner: function (){
				$('.open_side_area').on("click", function() {
					$('.wide_side_inner').toggleClass("wide_side_on");
				});
				$('.open_side_area').on('click', function () {
					$('body').toggleClass('body_overlay_on');
				});
			},
			AppSeoMobileMenu: function (){
				$('.appseo-open_mobile_menu').on("click", function() {
					$('.appseo-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.appseo-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.appseo-mobile_menu li.dropdown ul').length){
					$('.appseo-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.appseo-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
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
			APSeoBackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
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
			APSeoVideoPopUp: function (){
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
			AppSeoPartner: function (){
				$('#partner-slide').owlCarousel({
					margin: 95,
					responsiveClass:true,
					nav: false,
					dots: false,
					loop:true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:2,
						},
						400:{
							items:2,
						},
						600:{
							items:3,
						},
						700:{
							items:4,
						},
						1000:{
							items:5,

						}
					},
				})
			},
			AppSeoTestimonial: function (){
				$('#appseo-testimonial-id').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '#testimonial-appseo-name'
				});
				$('#testimonial-appseo-name').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: '#appseo-testimonial-id',
					dots: true,
					centerMode: true,
					focusOnSelect: true
				});
			},
			APPseoscrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.appseo-scrollup').fadeIn();
					} else {
						$('.appseo-scrollup').fadeOut();
					}
				});

				$('.appseo-scrollup').on("click", function()  {
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
	SaaSio_eight.init();
});

})();