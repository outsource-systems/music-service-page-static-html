/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_SMM = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.SMMpreloader();
				this.BackgroundImage();
				this.Animation();
				this.SMMStickymenu();
				this.SMMSideInner();
				this.SMmMobileMenu();
				this.SMMMemberSocial();
				this.SmmSkillProgress();
				this.SMMVideoPopUp();
				this.SMMTestimonialSlider();
				this.SmMPartnerSlider();

			},
			SMMpreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#smm-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.smm-main-navigation ul li a').on("click", function(){
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
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.smm-scrollup').fadeIn();
					} else {
						$('.smm-scrollup').fadeOut();
					}
				});

				$('.smm-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			SMMStickymenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.smm-main-header').addClass('smm-sticky-menu')
					} else {
						jQuery('.smm-main-header').removeClass('smm-sticky-menu')
					}
				})
			},
			SMmMobileMenu: function (){
				$('.smm-open_mobile_menu').on("click", function() {
					$('.smm-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.smm-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.smm-mobile_menu li.dropdown ul').length){
					$('.smm-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.smm-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			SMMSideInner: function (){
				$('.smm-side-toggle-btn').on("click", function() {
					$('.smm-sidebar-inner').toggleClass("wide_side_on");
				});
				$('.smm-side-toggle-btn').on('click', function () {
					$('body').toggleClass('body_overlay_on');
				});
			},
			SMMMemberSocial: function (){
				$('.smm-team-img').on("click", function() {
					if ( $(this).hasClass('social-show') ) {
						$(this).removeClass('social-show');
					} else {
						$('smm-team-img.social-show').removeClass('social-show');
						$(this).addClass('social-show');    
					}
				});
			},
			SmmSkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			SMMVideoPopUp: function (){
				if($('.smm-video-box').length) {
					$('.smm-video-box').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
					});
				}
			},
			SMMTestimonialSlider: function (){
				$('#smm-testimonial-id').owlCarousel({
					margin: 0,
					items: 1,
					loop: true,
					nav: true,
					animateOut: 'slideOutUp',
					animateIn: 'slideInUp',
					dots: true,
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
				})
			},
			SmMPartnerSlider: function (){
				$('#smm-partner-id').owlCarousel({
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

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_SMM.init();
});

})();