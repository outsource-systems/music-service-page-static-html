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
				this.Pr20NavMenu();
				this.Pr20TtSlider();
				this.Pr20Counter();
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



			Pr20NavMenu: function (){
				$('.pr20-nav-menu ul li a').on("click", function(){
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
				$(".pr20-mobile-menu-open").on("click", function(){
					$(".pr20-mobile-menu-wrapper").addClass("pr20-mobile-menu-visible");
					$(".pr20-body-overlay").addClass("pr20-body-overlay-on");
				}); 

				$(".pr20-mobile-menu-close").on("click", function(){
					$(".pr20-mobile-menu-wrapper").removeClass("pr20-mobile-menu-visible");
					$(".pr20-body-overlay").removeClass("pr20-body-overlay-on");
				});

				$(".pr20-body-overlay").on("click", function(){
					$(".pr20-mobile-menu-wrapper").removeClass("pr20-mobile-menu-visible"); 
					$(".pr20_sidebar_info_content").removeClass("pr20-sidebar-on");
					$(this).removeClass("pr20-body-overlay-on");
				});

				//Sticky 
				$(window).on("scroll", function(){
					var scrollBarOffset = $(this).scrollTop();
					if (scrollBarOffset > 150){
						$(".pr20-header-area").addClass("pr20-sticky-on"); 
					} else {
						$(".pr20-header-area").removeClass("pr20-sticky-on");
					}
				});

				//Sidebar Info 
				$(".pr20-sidebar-menu-open").on("click", function(){
					$(".pr20_sidebar_info_content").addClass('pr20-sidebar-on');
					$(".pr20-body-overlay").addClass("pr20-body-overlay-on");
				});

				$(".pr20_sidebar_info_content .close-menu").on("click", function(){
					$(".pr20_sidebar_info_content").removeClass("pr20-sidebar-on");
					$(".pr20-body-overlay").removeClass("pr20-body-overlay-on");
				});
			},

			Pr20TtSlider: function (){
				$(".pr20-testimonial-slider").slick({
					slidesToShow: 1, 
					arrows: false, 
					dots: true,
				}); 
			},
			Pr20Counter: function (){
				$(window).on("load", function(){
					$(".pr20-counter").counterUp({
						time: 1500,
					});
				});
				
			}
		}	
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();
