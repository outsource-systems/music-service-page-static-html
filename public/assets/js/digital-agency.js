/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_DiA = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.DiApreloader();
				this.BackgroundImage();
				this.Animation();
				this.DiaHeader();
				this.SkillProgress();
				this.DiaMobileMenu();
				this.DiaPortSlider();
				this.DiaTeamSlide();
				this.DiaTestimonial();
				this.DiaCounterUp();
				this.DiaScrollTop();
				this.DiaScrollImg();
			},

			
			DiaHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.dia-main-header').addClass('dia-sticky-menu')
					} else {
						jQuery('.dia-main-header').removeClass('dia-sticky-menu')
					}
				})
				$('.dia-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -100
							}, 1000);
							return false;
						}
					}
				});
			},
			SkillProgress: function (){
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
			DiaMobileMenu: function (){
				$('.dia-open_mobile_menu').on("click", function() {
					$('.dia-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.dia-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.dia-mobile_menu li.dropdown ul').length){
					$('.dia-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.dia-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			DiaPortSlider: function (){
				$('#dia-portfolio-slider').owlCarousel({
					margin: 20,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					autoplay: false,
					navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
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
						1000:{
							items:3,

						},
						1300:{
							items:4,

						},
						1600:{
							items:5,

						},
					},
				})
			},
			DiaTeamSlide: function (){
				$('#dia-team-slide').owlCarousel({
					margin:0,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center:true,
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
							items:2,
						},
						1000:{
							items:3,

						}
					},
				})
			},
			DiaTestimonial: function (){
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
			DiaCounterUp: function (){
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
			DiaScrollImg: function (){
				(function($) {
					$.fn.visible = function(partial) {
						var $t            = $(this),
						$w            = $(window),
						viewTop       = $w.scrollTop(),
						viewBottom    = viewTop + $w.height(),
						_top          = $t.offset().top,
						_bottom       = _top + $t.height(),
						compareTop    = partial === true ? _bottom : _top,
						compareBottom = partial === true ? _top : _bottom;
						return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
					};
				})(jQuery);
				$(window).on('scroll', function() {

					$(".banner-img1, .banner-img2").each(function(i, el) {
						var el = $(el);
						if (el.visible(true)) {
							el.addClass("view-on"); 
						} else {
							el.removeClass("view-on");
						}
					});
				});
				$(document).on('ready', function() {
					$(".banner-img1, .banner-img2").each(function(i, el) {
						var el = $(el);
						if (el.visible(true)) {
							el.addClass("view-on"); 
						} else {
							el.removeClass("view-on");
						}
					});
				});
			},

/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	SaaSio_DiA.init();
});

})();