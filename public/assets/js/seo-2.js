/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_SEO_2 = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.empreloader();
				this.BackgroundImage();
				this.Animation();
				this.Seo2MobileMenu();
				this.seo_2_portfolio_slider();
				this.seo_2_CircleProgress();
				this.Seo2StickyHeader();
			},
			empreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#seo-2-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.seo-2-scrollup').fadeIn();
					} else {
						$('.seo-2-scrollup').fadeOut();
					}
				});

				$('.seo-2-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				$('.seo-2-side-toggle').on("click", function() {
					$('.seo-2-sidebar-inner').toggleClass("wide_side_on");
				});
				$('.seo-2-side-toggle').on('click', function () {
					$('body').toggleClass('body_overlay_on');
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
			Seo2StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.seo-2-main-header').addClass('seo-2-sticky-on')
					} else {
						jQuery('.seo-2-main-header').removeClass('seo-2-sticky-on')
					}
				});
				$('.seo-2-main-navigation ul li a').on("click", function(){
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
			Seo2MobileMenu: function (){
				$('.seo-2-open_mobile_menu').on("click", function() {
					$('.seo-2-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.seo-2-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.seo-2-mobile_menu li.dropdown ul').length){
					$('.seo-2-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.seo-2-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			seo_2_portfolio_slider: function (){
				if ($('.seo-2-portfolio-content').length) {
					$('.seo-2-portfolio-content').owlCarousel({
						loop:true,
						nav:true,
						margin:30,
						autoplay: 0,
						smartSpeed: 500,
						navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},
							600:{
								items:1
							},
							700:{
								items:2
							},
							800:{
								items:2
							},
							900:{
								items:3
							},
							1024:{
								items:3
							}
						}
					});    		
				}
			},
			seo_2_CircleProgress: function (){
				if($('.count-box').length){
					$('.count-box').appear_c(function(){
						var $t = $(this),
						n = $t.find(".count-text").attr("data-stop"),
						r = parseInt($t.find(".count-text").attr("data-speed"), 10);
						if (!$t.hasClass("counted")) {
							$t.addClass("counted");
							$({
								countNum: $t.find(".count-text").text()
							}).animate({
								countNum: n
							}, {
								duration: r,
								easing: "linear",
								step: function() {
									$t.find(".count-text").text(Math.floor(this.countNum));
								},
								complete: function() {
									$t.find(".count-text").text(this.countNum);
								}
							});
						}
					},{accY: 0});
				};
				if($('.dial').length){
					$('.dial').appear_c(function(){
						var elm = $(this);
						var color = elm.attr('data-fgColor');  
						var perc = elm.attr('value'); 
						var thickness = elm.attr('thickness');  
						elm.knob({ 
							'value': 0, 
							'min':0,
							'max':100,
							'skin':'tron',
							'readOnly':true,
							'thickness':thickness,
							'dynamicDraw': true,
							'displayInput':false
						});
						$({value: 0}).animate({ value: perc }, {
							duration: 3500,
							easing: 'swing',
							progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
						}
					});
					},{accY: 0});
				}
			},
			
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_SEO_2.init();
});

})();