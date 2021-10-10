/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Itsource = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Pointer();
				this.Animation();
				this.ItUpStickeyHeader();
				this.ItUpMobileMenu();
				this.BackgroundImage();
				this.ItUpcounterUp();
				this.scrollTop();
				this.videoBox();
				this.ITupSlider();
				this.ItUpCirleProgress();
				this.ItUpBlogSlide();
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
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
			ItUpStickeyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.it-header-up-seaction').addClass('it-header-up-sticky')
					} else {
						jQuery('.it-header-up-seaction').removeClass('it-header-up-sticky')
					}
				})
				$('.it-up-main-navigation ul li a').on("click", function(){
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
			ItUpMobileMenu: function (){
				$('.it-up-open_mobile_menu').on("click", function() {
					$('.it-up-mobile_menu_wrap').toggleClass("it-up-mobile_menu_on");
				});
				$('.it-up-open_mobile_menu').on('click', function () {
					$('body').toggleClass('it-up-mobile_menu_overlay_on');
				});
				// $('it-up-open_mobile_menu').click(function(){
				// 	$(".it-up-mobile_menu_wrap").removeClass("it-up-mobile_menu_on");
				// 	$(this).toggleClass("it-up-mobile_menu_on");
				// })
				if($('.mobile_menu-dropdown li.dropdown ul').length){
					$('.mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			Pointer: function (){
				if($('#cursor').length){
					var follower, init, mouseX, mouseY, positionElement, timer;
					follower = document.getElementById('cursor');
					mouseX = (event) => {
						return event.clientX;
					};
					mouseY = (event) => {
						return event.clientY;
					};
					positionElement = (event) => {
						var mouse;
						mouse = {
							x: mouseX(event),
							y: mouseY(event)
						};
						follower.style.top = mouse.y + 'px';
						return follower.style.left = mouse.x + 'px';
					};
					timer = false;
					window.onmousemove = init = (event) => {
						var _event;
						_event = event;
						return timer = setTimeout(() => {
							return positionElement(_event);
						}, 0);
					};
					$("html").easeScroll();
				};
			},
			ItUpcounterUp: function (){
				if($('.counter').length){
					jQuery('.counter').counterUp({
						delay: 50,
						time: 2000,
					});
				};
			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			ITupSlider: function (){
				$(window).on('load',function(){
					$('.it-up-testimonial-slider-wrap, .it-up-blog-slide').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
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

							},
							1100:{
								items:3,

							},
							1300:{
								items:3,

							},
							1900:{
								items:3,
							},
						},
					})
				});
			},
			ItUpCirleProgress: function (){
				if($('.progress_area').length){
					;(function() {
						var proto = $.circleProgress.defaults,
						originalDrawEmptyArc = proto.drawEmptyArc;

						proto.emptyThickness = 5; 
						proto.drawEmptyArc = function(v) {
							var oldGetThickness = this.getThickness, 
							oldThickness = this.getThickness(),
							emptyThickness = this.emptyThickness || _oldThickness.call(this),
							oldRadius = this.radius,
							delta = (oldThickness - emptyThickness) / 2;

							this.getThickness = function() {
								return emptyThickness;
							};

							this.radius = oldRadius - delta;
							this.ctx.save();
							this.ctx.translate(delta, delta);

							originalDrawEmptyArc.call(this, v);

							this.ctx.restore();
							this.getThickness = oldGetThickness;
							this.radius = oldRadius;
						};
					})();
					$('.progress_area').circleProgress({
						emptyThickness: 10,
						size: 140,
						thickness: 15,
						lineCap: 'round',
						fill: {
							gradient: ['#1ec1f9', ['#0e4ad6', 0.7]],
							gradientAngle: Math.PI * -0.3
						}  
					});

					$('.first.progress_area').circleProgress({
						value: .65,
						thickness: 15,
						emptyFill: '#edf0fb',
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(65 * progress) + '<span>%</span>');
					});
					var el = $('.progress_area'),
					inited = false;
					el.appear({ force_process: true });

					el.on('appear', function() {
						if (!inited) {
							el.circleProgress();
							inited = true;
						}
					});
				};
			},
			ItUpBlogSlide: function (){
				$(window).on('load',function(){
					$('#it-up-sponsor-slide').owlCarousel({
						margin:150,
						responsiveClass:true,
						nav: false,
						dots: false,
						loop:true,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:3,
							},
							700:{
								items:3,
							},
							1000:{
								items:3,

							},
							1300:{
								items:4,

							},
							1900:{
								items:4,
							},
						},
					})
				});
			},
		}
	}
	jQuery(document).ready(function (){
		Itsource.init();
	});

})();