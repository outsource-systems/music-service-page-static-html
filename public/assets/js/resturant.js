/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Resturant = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.AppMedipreloader();
				this.BackgroundImage();
				this.Animation();
				this.AppResSticky();
				this.APPResMobileMenu();
				this.GoogleMap();
				this.AppResSlider();
				
			},
			AppMedipreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#app-res-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.app-res-scrollup').fadeIn();
					} else {
						$('.app-res-scrollup').fadeOut();
					}
				});
				$('.app-res-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				$('.app-res-main-navigation ul li a').on("click", function(){
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
			AppResSticky: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.app-res-main-header').addClass('app-res-sticky-menu')
					} else {
						jQuery('.app-res-main-header').removeClass('app-res-sticky-menu')
					}
				})
				
			},
			APPResMobileMenu: function (){
				$('.app-res-open_mobile_menu').on("click", function() {
					$('.app-res-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.app-res-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.app-res-mobile_menu li.dropdown ul').length){
					$('.app-res-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.app-res-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				};
			},
			AppResSlider: function (){
				if ($('#app-res-main-slide').length) {
					$('#app-res-main-slide').owlCarousel({
						animateOut: 'fadeOut',
						animateIn: 'fadeIn',
						loop:true,
						margin:0,
						nav: true,
						items: 1,
						dots: false,
						navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
					});    		
				}
				if($('.lightbox-image').length) {
					$('.lightbox-image').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
					});
				}

			},
			GoogleMap: function (){
				if ( $('#app-res-map').length ){
					var $lat = $('#app-res-map').data('lat');
					var $lon = $('#app-res-map').data('lon');
					var $zoom = $('#app-res-map').data('zoom');
					var $marker = $('#app-res-map').data('marker');
					var $info = $('#app-res-map').data('info');
					var $markerLat = $('#app-res-map').data('mlat');
					var $markerLon = $('#app-res-map').data('mlon');
					var map = new GMaps({
						el: '#app-res-map',
						lat: $lat,
						lng: $lon,
						scrollwheel: false,
						scaleControl: true,
						streetViewControl: false,
						panControl: true,
						disableDoubleClickZoom: true,
						mapTypeControl: false,
						zoom: $zoom,
					});
					map.addMarker({
						lat: $markerLat,
						lng: $markerLon,
						icon: $marker,    
						infoWindow: {
							content: $info
						}
					})
				}
			},
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Resturant.init();
});

})();