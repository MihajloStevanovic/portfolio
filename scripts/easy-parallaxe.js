/**
 * Plugin: Easy Parallaxe
 * Version: 1.0.0
 * Author: Mihajlo Stevanovic
 * Author URL: http://www.mihajlostevanovic.com
 * Plugin URL : https://github.com/Syeg/easy-parallaxe.git
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 **/

/* Parallaxe plugin */
(function($) { 

	$.fn.parallaxe=function(options) { 
		
		//Default settings
		var settings = {
			type: 'element',	// Default parallaxe type
			direction: 'top',	// Default parallaxe direction
			speed: 2,			// Default parallaxe speed
			events: null
		}

		// Merge parameters objects
		var parameters=$.extend(settings,options);

		var newPosition,
			animationType,
			animationValue;

		return this.each(function(){

			var $this = $(this);

			// Define de animation
			function animationController(){
				switch(parameters.direction){
					case 'top':
						if (parameters.type === 'element') {
							animationType = 'transform';
							animationValue = 'translate3d(0, -'+newPosition/parameters.speed+'px, 0)';
						} else if (parameters.type === 'background') {
							animationType = 'background-position';
							animationValue = 'center ' + newPosition/parameters.speed + 'px';
						} else {
							return false;
						}
					break;
					case 'bottom':
						if (parameters.type === 'element') {
							animationType = 'transform';
							animationValue = 'translate3d(0, '+newPosition/parameters.speed+'px, 0)';
						} else if (parameters.type === 'background') {
							animationType = 'background-position';
							animationValue = 'center ' + newPosition * parameters.speed + 'px';
						} else {
							return false;
						}
					break;
					case 'left':
						if (parameters.type === 'element') {
							animationType = 'transform';
							animationValue = 'translate3d(-'+newPosition/parameters.speed+'px, 0, 0)';
						} else if (parameters.type === 'background') {
							animationType = 'background-position';
							animationValue = newPosition/parameters.speed + 'px center';
						} else {
							return false;
						}
					break;
					case 'right':
						if (parameters.type === 'element') {
							animationType = 'transform';
							animationValue = 'translate3d('+newPosition/parameters.speed+'px, 0, 0)';
						} else if (parameters.type === 'background') {
							animationType = 'background-position';
							animationValue = newPosition/parameters.speed + 'px center';
						} else {
							return false;
						}
					break;
				}
			}

			// Run the animation
			function run(){
				animationController();
				$this.css(animationType, animationValue);
			}

			$(window).scroll(function(){
				newPosition = $(window).scrollTop();
				run();	// Init the module
			})

		});

	};

})(jQuery);