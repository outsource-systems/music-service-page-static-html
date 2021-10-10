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
				this.preloader();
				this.BackgroundImage();
				this.MobileMenu();
				this.Animation();
				this.scroller();
				this.OnePageNav();
				this.scrollTop();
			},

			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#saas-modern-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			scroller: function (){
				$(window).on("load",function(){
					$("#featured_scroll").mCustomScrollbar({
						axis:"x",
						mouseWheel: {enable: false},
						advanced:{autoExpandHorizontalScroll:true}
					});
				});
				$("#featured_scroll").removeClass("mCustomScrollbar");
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				$(document).on('click', ".mobile_menu_wrap ul li.dropdown > a", function(event) {
					$(this).parent().find(".dropdown-menu").slideToggle("slow");
					return false;
				});
			},
			Animation: function (){
				AOS.init({
					once:true,
					duration:1000,
				});
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
			OnePageNav: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.main_header').addClass('menu-bg-overlay')
					} else {
						jQuery('.main_header').removeClass('menu-bg-overlay')
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
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.saas-modern-scrollup').fadeIn();
					} else {
						$('.saas-modern-scrollup').fadeOut();
					}
				});

				$('.saas-modern-scrollup').on("click", function()  {
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
	SaaSio_Saas.init();
});

})();