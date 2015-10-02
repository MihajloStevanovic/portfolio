$(document).ready(function(){
	var MS = function(){

		/* Global variables */
		var currentSection = '#home',  	//Default current Section
			scrollPosition = 0			//Default scroll position

		/* MS UI */
		var MSUI = {

			/*
			 * Navigation click event
			 */
			setHomeHeight: function(){
				var windowHeight = $(window).height(),
					headerHeight = $('#header').height(),
					homeHeight = windowHeight - headerHeight;
				$('#home').css('height',homeHeight).css('line-height',homeHeight+'px');
				$('#home').css('padding-top',headerHeight);
			},

			/*
			 * Navigation click event
			 */
			navigation: function(){
				$('#nav a').on('click', function(e){
					e.preventDefault();
					currentSection = $(this).attr('href');
					MSUI.goToSection();
					MSUI.currentNavItem();
				})
			},

			currentNavItem: function(){
				$('#nav a').each(function(){
					var href = $(this).attr('href');
					if(href == currentSection){
						$('#nav a').removeClass('active');
						$(this).addClass('active');
					}
				})
			},

			/*
			 * Scroll to current section
			 */
			goToSection: function(){
				scrollPosition = $(currentSection).offset().top;
				$('html, body').animate({
					scrollTop: scrollPosition - 40
				}, 'slow');
				
			},

			/*
			 * Get hashtag to set current section
			 */
			getWindowHash: function(){
				currentSection = window.location.hash;
				if(currentSection != ''){
					MSUI.goToSection();
				}
			},

			/*
			 * Verify if window is scrolled
			 */
			isScrolled: function(){
				$(window).scroll(function(){
					if($(this).scrollTop() >= 200){
						$('body').addClass('scrolled');
					} else {
						$('body').removeClass('scrolled');
					}
				})
			},

			/*
			 * Get the current section
			 */
			getCurrentSection: function(){
				$(window).scroll(function(){
					$('.section').each(function(){
						if($(window).scrollTop() == $(this).offset().top){

						}
					})
				})
			},

			/*
			 * UI init
			 */
			init: function(){
				MSUI.setHomeHeight()
				MSUI.navigation()
				MSUI.currentNavItem()
				MSUI.getWindowHash()
				MSUI.isScrolled()
				MSUI.getCurrentSection()
			}

		}

		MSUI.init();
	}

	MS();

});