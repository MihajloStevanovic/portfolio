var MS = {

	headerHeight :function(){
		var windoweight = $(window).height();
		$('#header').css('height',windoweight);
	},

	showNav :function(){
		$('.menuLink, .closer').on('click',function(e){
			e.preventDefault();
			$('#nav').toggleClass('open');
			$('#nav li').toggleClass('on');
			$('body').toggleClass('moved');
		})
	},

	sectionScroll :function(){
		$('#nav li a').on('click',function(e){
			e.preventDefault();
			var currentSection = $(this).attr('href'),
				currentPosition = $(currentSection).offset();
			$('html, body').animate({
				scrollTop: currentPosition.top
			},'slow')

			$('#nav li').removeClass('current');
			$(this).parents('li').addClass('current');

			if(innerWidth <= 767){
				$('#nav').toggleClass('open');
				$('#nav li').toggleClass('on');
				$('body').toggleClass('moved');
			}
		})
	},

	scrollNavBinding :function(){

		$('.menu a').each(function(){

			var sectionLink = $(this),
				section = $(this).attr('href'),
				sectionPosition = $(section).offset().top;

			if( $(window).scrollTop() >= sectionPosition ){
				$('.menu li').removeClass('current');
				$(sectionLink).parents('li').addClass('current');
			}
		})
		
	},

	lazyLoad :function(){

		$('.lazy').each(function(){
			var lazyItem = $(this),
				itemPosition = $(lazyItem).offset().top,
				startPosition = itemPosition - ($(window).height() / 1.1);

			if( $(window).scrollTop() > startPosition ){
				$(lazyItem).addClass('lazyLoaded');
			}
		})

	},

	niceScroll :function(){
		$("html").niceScroll({
			mousescrollstep: 100,
			cursorcolor:"#333",
			cursoropacitymax: 0.5,
	    	cursorwidth: "8",
	    	cursorborder: ""
		});
	},

	Displayer : function(){
		$('.openlayer').on('click', function(e){
			e.preventDefault();
			$('#layerWrapper').fadeIn( function(){
				$('.layerContent').fadeIn();
			});
			$('#layerWrapper').addClass('show');
		})
		$('#layerWrapper, layerCloser').on('click', function(e){
			e.preventDefault();
			
			$('.layerContent').fadeOut( function(){
				$('#layerWrapper').removeClass('show');
				$('#layerWrapper').fadeOut();
			});
		})
	},

	parallaxe : function(){
		var inc = 0;

		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();
				inc++
			

			//$('#header').css('background-position-y', -inc*3);
		})
	},

	init :function(){
		this.headerHeight()
		this.showNav()
		this.sectionScroll()
		this.niceScroll()
		this.Displayer()
		this.parallaxe()
	}

}

$(document).ready(function(){
	MS.init();

	$('#header').parallax(0, 0.1);
	$('.bg').parallax(0, 0.4);
	// $('.bg2').parallax(0, 0.6);
})

$(window).load(function(){
	$('.loader').fadeOut(800,function(){
		$(this).remove();
	})
})

$(window).on('resize', function(){
	MS.headerHeight();
})

$(window).scroll(function(){
	MS.lazyLoad();
	MS.scrollNavBinding();
})