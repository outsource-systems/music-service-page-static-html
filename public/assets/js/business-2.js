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
				this.Pr3ScrollTop(); 
				this.Pr3HeaderMenu(); 
				this.Pr3PortfolioSlider();
				this.Pr3Accordion();
				this.Pr3BrandSlider();
				this.Pr3BlogSlider();
				this.Pr3TestimonialSlider();
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

			Pr3ScrollTop: function (){
				$(window).on("scroll", function(){
					var scrollBarOffset = $(this).scrollTop();
					if( scrollBarOffset > 300 ){
						$(".pr3-scroll-top").fadeIn();
					} else {
						$(".pr3-scroll-top").fadeOut();
					}
				});
				
				$(".pr3-scroll-top").on("click", function(e){
					e.preventDefault();
					$("body,html").animate({
						scrollTop: 0,
					}, 1800, 'easeInQuart'); 
				});
			},

			Pr3HeaderMenu: function (){
				$('.pr3-navigation-menu ul li a').on("click", function(){
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
				$(".pr3-sidebar-btn").on("click", function(){
					$(".pr3-overlay-bg").addClass('pr3-overlay-on');
					$(".pr3_sidebar_info_content").addClass("pr3-sidebar-on");
					return false;
				}); 

				$(".pr3-sidebar-info .close-menu").on("click", function(){
					$(".pr3-overlay-bg").removeClass("pr3-overlay-on");
					$(".pr3_sidebar_info_content").removeClass("pr3-sidebar-on");
				});

				$(".pr3-overlay-bg").on("click", function(){
					$(this).removeClass("pr3-overlay-on");
					$(".pr3_sidebar_info_content").removeClass("pr3-sidebar-on");
				});
				
				$(window).on("scroll", function(){
					var ScrollOffset = $(this).scrollTop();
					var HeaderOffset = $(".pr3-header-section").outerHeight();
					if ( ScrollOffset > HeaderOffset ) {
						$(".pr3-header-section").addClass("pr3-sticky-on"); 
					} else {
						$(".pr3-header-section").removeClass("pr3-sticky-on");
					}
				}); 
				
				$(".pr3-mobile-menu-open").on("click", function(){
					$(".pr3-mobile-menu").addClass("pr3-visible-menu");
				}); 

				$(".pr3-mobile-menu-close").on("click", function(){
					$(".pr3-mobile-menu").removeClass("pr3-visible-menu");
				});

				$(".pr3-mobile-menu .has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).parent().toggleClass("submenu-icon-rotate");
						$(this).siblings("ul").slideToggle();
					});
				});

			},

			Pr3PortfolioSlider: function (){
				$(".pr3-portfolio-slider").slick({
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
					speed: 2000,
					responsive: [
					{
						breakpoint: 768, 
						settings: {
							slidesToShow: 1,
						}
					}
					]
				});
			}, 
			Pr3Accordion: function (){
				$(".pr3-accordion .card-header a").each(function(){
					$(this).on("click", function(){
						$(this).parents(".accordion").find(".card-active").removeClass("card-active"); 
						$(this).parents(".card").addClass("card-active");
					}); 
				});
			},

			Pr3BrandSlider: function (){
				$(".pr3-brand-slider").slick({
					slidesToShow: 4, 
					autoplay: true,
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
					responsive: [
					{
						breakpoint: 1200, 
						settings: {
							slidesToShow: 3,
						}
					}, 
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						}
					}, 
					{
						breakpoint: 480, 
						settings: {
							slidesToShow: 1,
						}
					}
					]
				});
			}, 
			Pr3BlogSlider: function (){
				$(".pr3-blog-slider-wrapper").slick({
					slidesToShow: 1, 
					autoplay: true, 
					speed: 2000,
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>'
				});
			},

			Pr3TestimonialSlider: function (){
				$(".pr3-tst-slider-wrapper").slick({
					autoplay: true,
					slidesToShow: 1,
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>', 
					responsive: [
					{
						breakpoint: 992, 
						settings: {
							slidesToShow: 2,
						}
					}, 
					{
						breakpoint: 700, 
						settings: {
							slidesToShow: 1,
						}
					}
					]
				}); 
			}

		}	
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();
