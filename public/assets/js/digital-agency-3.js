/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var aplpg_SaaSio = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APLDGScrollTop();
				this.APLDGHeaderFunction();
				this.APLDGMobileMenu();
				this.APLDGSrollToSection();
				this.APLDCarousel(); 
				this.APLDGProgressBar();
				this.APLDGProjectFilter();
				this.APDGVectorImg();
				this.ApldgCounter();

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


			APLDGScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".apldg-scroll-top").fadeIn(); 
					} else {
						$(".apldg-scroll-top").fadeOut();
					}
				});

				$(".apldg-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			APLDGHeaderFunction: function (){
				//Header Search Form 
				$(".apldg-search-btn").on("click", function(){
					$(".apldg-header-form").addClass("apldg-form-open"); 
				}); 
				$(".apldg-form-overlay").on("click", function(){
					$(".apldg-header-form").removeClass("apldg-form-open");
				});

				//Header Sidebar 
				$(".apldg-header-sidebar-btn").on("click", function(){
					$(".apldg_sidebar_info_content").addClass("apldg-sidebar-on");
					$(".apldg-body-overlay").addClass("apldg-body-overlay-on"); 
				});


				$(".apldg_sidebar_info_content .close-menu").on("click", function(){
					$(".apldg_sidebar_info_content").removeClass("apldg-sidebar-on");
					$(".apldg-body-overlay").removeClass("apldg-body-overlay-on"); 
				});

				$(".apldg-body-overlay").on("click", function(){
					$(".apldg_sidebar_info_content").removeClass("apldg-sidebar-on"); 
					$(this).removeClass("apldg-body-overlay-on");
				});

				//Sticky Header 
				$(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".apldg-header-section").addClass("apldg-header-sticky"); 
					} else {
						$(".apldg-header-section").removeClass("apldg-header-sticky");
					}
				})
			}, 

			APLDGMobileMenu: function (){
				$(".apldg-mobile-menu-open").on("click", function(){
					$(this).toggleClass("open");
				});

				$(".apldg-mobile-menu-open").on("click", function(){
					$(".apldg-mobile-menu").toggleClass("apldg-mobile-menu-on");
					$(".apldg-body-overlay").toggleClass("apldg-body-overlay-on");
				});

				$(".apldg-body-overlay").on("click", function(){
					$(".apldg-mobile-menu").removeClass("apldg-mobile-menu-on");
					$(".apldg-mobile-menu-open").removeClass("open");
				});

				$(".apldg-menu-close").on("click", function(){
					$(".apldg-mobile-menu").removeClass("apldg-mobile-menu-on");
					$(".apldg-body-overlay").removeClass("apldg-body-overlay-on"); 
					$(".apldg-mobile-menu-open").removeClass("open");
				});

				$(".apldg-mobile-menu li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
						$(this).parent().toggleClass('apldg-submenu-icon-rotate');
					});
				});
			},

			APLDGSrollToSection: function (){
				$('.apldg-main-nav ul li a').on("click", function(){
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
			
			APLDCarousel: function (){
				//Hero slider 
				$(".apldg-hero-slider").slick({
					slidesToShow: 1, 
					autoplay: false, 
					dots: true, 
					arrows: false,
					fade: true,
				});

				//Feedback Slider 
				$(".apldg-feedback-slider").slick({
					slidesToShow: 2, 
					autoplay: true, 
					dots: true, 
					arrows: false, 
					responsive: [
						{
							breakpoint: 1000, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			},

			APLDGProgressBar: function (){
				$(".progress-bar").ProgressBar();
			}, 

			APLDGProjectFilter: function (){

				//Filter Nav
				$(".apldg-portfolio-nav ul li").each(function(){
					$(this).on("click", function(){
						$(this).parent().find('li.active').removeClass("active"); 
						$(this).addClass("active");
					});
				});

				//Filter Content Hover
				$(".apldg-has-filter .apldg-pf-item").each(function(){
					$(this).hover(function(){
						$(this).parents('.apldg-has-filter').find(".active-info").removeClass("active-info"); 
						$(this).addClass("active-info");
					});
				}); 

				$(window).on("load", function(){
					//Project Filter 
					var FilterContainer = $(".apldg-has-filter"); 
					var FilterLength = FilterContainer.children().length;

					if ( FilterLength > 0 ) {

						var filterized = $('.filter-container').filterizr({
							gridItemsSelector: '.filtr-item',
						});
					}
				});

				
				
			}, 
			APDGVectorImg: function (){
				//Responsive Vector Img
				var TargetImg = $(".apldg-responsive-vector-img"); 
				var WindowWidth = $(window).width();
				if (WindowWidth < 1920 && WindowWidth > 992) {
					var ImgWidth = (WindowWidth / 2) - 30;
					TargetImg.css({
						width: ImgWidth,
					});
				} else {
					TargetImg.removeAttr("style");
				}

				//Responsive When Resize 
				$(window).resize(function(){
					var WinWidth = $(this).width(); 
					var targetImg = $(".apldg-responsive-vector-img"); 
					if (WinWidth < 1920 && WinWidth > 992 ) {
						var ImgWidth = (WinWidth / 2) - 30;
						targetImg.css({
							width: ImgWidth,
						});
					} else {
						TargetImg.removeAttr("style");
					}
				});
			}, 

			ApldgCounter: function (){
				$(".counterup").counterUp({
					time: 1500,
				});
			}
			


		}	
	}
	jQuery(document).ready(function (){
		aplpg_SaaSio.init();






	});

})();
