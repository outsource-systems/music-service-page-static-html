/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Education = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.BackgroundImage();
				this.Animation();
				this.AppEduSticky();
				this.CounterUp();
				this.AppEduMobileMenu();
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				jQuery(window).on('load', function(){
					jQuery('#app-edu-preloader').fadeOut('slow',function(){jQuery(this).remove();});
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
			AppEduSticky: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.app-edu-header-main').addClass('app-edu-sticky-on')
					} else {
						jQuery('.app-edu-header-main').removeClass('app-edu-sticky-on')
					}
				})
				$('.app-edu-main-navigation ul li a').on("click", function(){
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
			AppEduMobileMenu: function (){
				$('.app-edu-open_mobile_menu').on("click", function() {
					$('.app-edu-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.app-edu-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.app-edu-mobile_menu li.dropdown ul').length){
					$('.app-edu-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.app-edu-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.app-edu-scrollup').fadeIn();
					} else {
						$('.app-edu-scrollup').fadeOut();
					}
				});

				$('.app-edu-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});				
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


/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Education.init();
});

})();