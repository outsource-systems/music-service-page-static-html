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
				this.strpreloader();
				this.BackgroundImage();
				this.StrBannerSlide();
				this.StrMobileMenu();
				this.StrProgressBar();
				this.StrFeatureSlide();
				this.StrPortfolioSlide();
				this.StrOnePageNav();
				this.StrscrollTop();
				this.StrTestimonial();
				this.StrPartnerSlider();
				this.StrTeamSlide();
				this.StrBlogSlide();
				this.Animation();
			},

			strpreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#str-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			StrFeatureSlide: function (){
				$('#str-slide').owlCarousel({
					margin: 30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					autoplay: false,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
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
							items:3,
						},
						1000:{
							items:4,

						}
					},
				})
			},
			StrPortfolioSlide: function (){ 
				$('#str-protfolio-slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					autoplay: false,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
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
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			StrBannerSlide: function (){
				if ($('#str-banner-slide').length) {
					$('#str-banner-slide').owlCarousel({
						animateOut: 'fadeOut',
						animateIn: 'fadeIn',
						loop:true,
						margin:0,
						nav: true,
						autoHeight: true,
						navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
						smartSpeed: 500,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:1
							},
							800:{
								items:1
							},
							1024:{
								items:1
							},
							1200:{
								items:1
							}
						}
					});    		
				}
			},
			StrProgressBar: function (){
				$('#progress1').barfiller({ duration: 3000 });
				$('#progress2').barfiller({ duration: 3000 });
				$('#progress3').barfiller({ duration: 3000 });
				if ($(".fill").length) {
					var $progress_bar = $('.fill');
					$progress_bar.appear();
					$(document.body).on('appear', '.fill', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');

						}

					});
				};
			},
			StrMobileMenu: function (){
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			StrOnePageNav: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.str-main-header').addClass('str-sticky-menu')
					} else {
						jQuery('.str-main-header').removeClass('str-sticky-menu')
					}
				})
				$('.navbar-nav a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -108
							}, 1000);
							return false;
						}
					}
				});
			},
			StrscrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.str-scrollup').fadeIn();
					} else {
						$('.str-scrollup').fadeOut();
					}
				});

				$('.str-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			StrTestimonial: function (){
				$('ol.carousel-indicators2 li').on("click",function(){ 
					$('ol.carousel-indicators2 li.active').removeClass("active");
					$("ol.carousel-indicators li.active").removeClass("active");
					$(this).addClass("active");   
					var indicators = $(this).data("slide-to");
					$(".carousel-indicators").find("[data-slide-to='" + indicators + "']")
					.addClass("active");
				});
				$('.carousel').on('slid.bs.carousel', function() {
					var indicatorsAct = $(".carousel-indicators li.active").data("slide-to");
					$(".carousel-indicators2 li").removeClass("active");
					$(".carousel-indicators2").find("[data-slide-to='" + indicatorsAct + "']")
					.addClass("active");
				});

			},
			StrPartnerSlider: function (){
				$('#str-partner-slide').owlCarousel({
					margin: 105,
					autoplay: true,
					loop: true,
					nav: false,
					dots: false,
					autoplay:true,
					autoplaySpeed: 6000,
					responsiveClass:true,
					autoplayTimeout: 6000,
					autoplayHoverPause: true,
					slideTransition: 'linear',
					responsive:{
						0:{
							items:2,
						},
						400:{
							items:2,
						},
						600:{
							items:4,
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
			StrBlogSlide: function (){ 
				$('#str-blog-slide').owlCarousel({
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
							items:2,
						},
						1000:{
							items:3,
						}
					},
				})
			},
			StrTeamSlide: function (){
				$('#str-team-slide').owlCarousel({
					margin: 30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					autoplay: false,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
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
	SaaSio_Saas.init();
});

})();