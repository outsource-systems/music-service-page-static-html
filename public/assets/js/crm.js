/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var CRM = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.CRMpreloader();
				this.BackgroundImage();
				this.Animation();
				this.CRMStickymenu();
				this.CRMMobileMenu();
				this.CRMScreenSlider();
				this.CounterUp();
				this.CRMTestimonialSlider();
				this.crmPartnerSlider();
				this.CRMScrollTop();
				this.CRMScroller();

			},
			CRMpreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#crm-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.crm-main-navigation ul li a').on("click", function(){
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
			CRMStickymenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.crm-main-header').addClass('crm-sticky-menu')
					} else {
						jQuery('.crm-main-header').removeClass('crm-sticky-menu')
					}
				})
			},
			CRMMobileMenu: function (){
				$('.crm-open_mobile_menu').on("click", function() {
					$('.crm-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.crm-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.crm-mobile_menu li.dropdown ul').length){
					$('.crm-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.crm-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
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
			CRMScreenSlider: function (){
				$('#crm-screen-slider').owlCarousel({
					margin: 0,
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					animateOut: 'zoomOut',
					animateIn: 'zoomIn',
					transitionStyle : "goDown",
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
				})
			},
			CRMTestimonialSlider: function (){
				$('#crm-testimonial-id').owlCarousel({
					margin: 0,
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
				})
			},
			CounterUp: function (){
				if ($(".odometer").length) {
					$('.odometer').appear();
					$(document.body).on('appear', '.odometer', function(e) {
						var odo = $(".odometer");
						odo.each(function() {
							var countNumber = $(this).attr("data-count");
							$(this).html(countNumber);
						});
						window.odometerOptions = {
							format: 'd',
						};
					});
				}
			},
			crmPartnerSlider: function (){
				$('#crm-partner-slide').owlCarousel({
					margin: 90,
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
							items:4,

						}
					},
				})
			},
			CRMScrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.crm-scrollup').fadeIn();
					} else {
						$('.crm-scrollup').fadeOut();
					}
				});

				$('.crm-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			CRMScroller: function (){
				$(window).on("load",function(){
					$("#crm-about-scroll").mCustomScrollbar({
						autoHideScrollbar:true,
					});
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	CRM.init();
});

})();