/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Medical = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.AppMedipreloader();
				this.BackgroundImage();
				this.Animation();
				this.MediAppService();
				this.MediAppTestimonial();
				this.MediAppPartner();
				this.MediAppStickyHeader();
				this.MediAppsearchPopUp();
				this.MedicartArea();
				this.MediAppMobileMenu();
				
			},
			AppMedipreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#app-medi-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.app-medi-scrollup').fadeIn();
					} else {
						$('.app-medi-scrollup').fadeOut();
					}
				});
				$('.app-medi-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				$('.medi-app-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -50
							}, 1000);
							return false;
						}
					}
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
			MediAppStickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.medi-app-main-header').addClass('medi-app-sticky-on')
					} else {
						jQuery('.medi-app-main-header').removeClass('medi-app-sticky-on')
					}
				})
			},
			MediAppMobileMenu: function (){
				$('.app-medi-open_mobile_menu').on("click", function() {
					$('.app-medi-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.app-medi-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.app-medi-mobile_menu li.dropdown ul').length){
					$('.app-medi-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.app-medi-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				};
				$('.medi-app-side-toggle').on("click", function() {
					$('.app-medi-sidebar-inner').toggleClass("wide_side_on");
				});
				$('.medi-app-side-toggle').on('click', function () {
					$('body').toggleClass('body_overlay_on');
				})
			},
			MediAppsearchPopUp: function (){
				$('.medi-app-search-btn').on('click', function() {
					$('.app-medi-search-body').toggleClass('app-medi-search-open');
				});
			},
			MedicartArea: function (){
				$('.cart-open-btn').on('click', function() {
					$('.shopping-cart').toggleClass('cart-show');
				});
				$('.app-medi-side-toggle').on("click", function() {
					$('.app-medi-sidebar-inner').toggleClass("wide_side_on");
				});
				$('.app-medi-side-toggle').on('click', function () {
					$('body').toggleClass('body_overlay_on');
				})
			},
			MediAppService: function (){
				$('#app-medi-service-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
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
						}
					},
				});
				$('.datepicker').datepicker({
					clearBtn: true,
					format: "dd/mm/yyyy"
				});
			},
			MediAppTestimonial: function (){
				jQuery('.app-medi-testimonial-slider').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
				});
			},
			MediAppPartner: function (){
				$('.app-medi-partner-slider').owlCarousel({
					margin: 50,
					autoplay: true,
					loop: true,
					responsiveClass:true,
					nav: false,
					dots: false,
					slideTransition:'linear',
					autoplayTimeout: 10,
					autoplayHoverPause:false,
					autoplaySpeed:4500,
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
							items:3,
						},
						1000:{
							items:5,

						}
					},
				})
			},
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Medical.init();
});

})();