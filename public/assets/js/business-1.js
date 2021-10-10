/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Prysm = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.Pr1StickyHeader(); 
				this.Pr1MobileMenu();
				this.Pr1ScrollTop(); 
				this.Pr1Sidebar();
				this.Pr1TeamSlider();
				this.Pr1ClientSlider();

			},
			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

			Animation: function (){
				$(window).on("load", function(){
					if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},

			Pr1StickyHeader: function (){
				$(window).on("scroll", function(){
					var ScrollOffset = $(this).scrollTop();
					var HeaderOffset = $(".pr1-header-section").outerHeight();
					if ( ScrollOffset > HeaderOffset ) {
						$(".pr1-header-section").addClass("pr1-sticky-on"); 
					} else {
						$(".pr1-header-section").removeClass("pr1-sticky-on");
					}
				}); 
				$('.pr1-navigation-menu ul li a').on("click", function(){
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

			Pr1MobileMenu: function (){
				$(".pr1-mobile-menu-open").on("click", function(){
					$(".pr1-mobile-menu").addClass("pr1-visible-menu");
				}); 

				$(".pr1-mobile-menu-close").on("click", function(){
					$(".pr1-mobile-menu").removeClass("pr1-visible-menu");
				});

				$(".pr1-mobile-menu .has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).parent().toggleClass("submenu-icon-rotate");
						$(this).siblings("ul").slideToggle();
					});
				})
			},

			Pr1ScrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.pr1-scroll-top').fadeIn();
					} else {
						$('.pr1-scroll-top').fadeOut();
					}
				});

				$('.pr1-scroll-top').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},

			Pr1Sidebar: function (){
				$(".pr1-sidebar-btn").on("click", function(){
					$(".pr1-overlay-bg").addClass('pr1-overlay-on');
					$(".pr1_sidebar_info_content").addClass("pr1-sidebar-on");
					return false;
				}); 

				$(".pr1-sidebar-info .close-menu").on("click", function(){
					$(".pr1-overlay-bg").removeClass("pr1-overlay-on");
					$(".pr1_sidebar_info_content").removeClass("pr1-sidebar-on");
				});

				$(".pr1-overlay-bg").on("click", function(){
					$(this).removeClass("pr1-overlay-on");
					$(".pr1_sidebar_info_content").removeClass("pr1-sidebar-on");
				});
			},

			Pr1TeamSlider : function (){
				$(".pr1-team-slider").slick({
					slidesToShow: 3, 
					arrows: false,
					dots: true,
					autoplay: true,
					speed: 500,
					responsive : [
					{
						breakpoint: 1160, 
						settings: {
							slidesToShow: 2,
						}
					}, 
					{
						breakpoint: 768, 
						settings: {
							slidesToShow: 1,
						}
					}, 
					]
				});
			}, 

			Pr1ClientSlider: function (){
				$(".pr1-clients-slider").slick({
					slidesToShow: 2, 
					arrows: false, 
					dots: true,
					responsive : [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						}
					}
					]
				});
			},


			

		}	
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();
