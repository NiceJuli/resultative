$(function() {
	initSochiLayout();
	switchBenefits();
	sliderHistory();
	initTabs();
	showNews();
});

$(window).resize(function(event) {
	initSochiLayout();
});


function initSochiLayout() {
	if($(window).height() > 850 && $(window).width()>480) {
		$('.b-first-box').css({height: $(window).height()-$('.b-header').outerHeight()});
	} else {
		$('.b-first-box').css({height: "auto"});
	}
}

function switchBenefits(){
	$('.b-switch__item').click(function() {
		var name = $(this).data('name');
		$('.b-switch__item').removeClass('active');
		$(this).addClass('active');
		$('.b-material-info').removeClass('active');
		$('.b-material-info').filter('.'+name).addClass('active');
	});
}

function sliderHistory(){
	var prev = $('.b-history__btn_prev'),
		next = $('.b-history__btn_next'),
		slider = $('.b-history'),
		list = $('.b-history-box'),
		listItem = $('.b-history__item'),
		scrollWidth = listItem.outerWidth(true),
		sliderWidth = list.filter(":visible").find(listItem).length*scrollWidth;


	list.css('width', sliderWidth);
	slider.animate({scrollLeft: 0}, 0);

	next.click(function(){
		slider.animate({scrollLeft : '+='+scrollWidth}, 800);
	});

	prev.click(function(){
		slider.animate({scrollLeft : '-='+scrollWidth}, 800);
	});

}

var scrolling = false;

function initTabs() {
	$('.b-menu__item').click(function(){
		if($(this).hasClass('active')){
			return false;
		} else{
			if($(this).hasClass('active')) return;

			$('.b-menu__item').removeClass('active');
			$(this).addClass('active');

			if($(this).hasClass('b-menu__item_service')){
				$('body, html').animate({scrollTop: $('.b-second-box').offset().top}, 1000, 'swing', function(){
					scrolling = false;
				});
				
			}
			if($(this).hasClass('b-menu__item_history')){
				$('body, html').animate({scrollTop: $('.b-third-box').offset().top}, 1000, 'swing', function(){
					scrolling = false;
				});
				
			}
			if($(this).hasClass('b-menu__item_invite')){
				$('body, html').animate({scrollTop: $('.b-fourth-box').offset().top}, 1000, 'swing', function(){
					scrolling = false;
				});
				
			} 
		}
		return false;
	});
}

function showNews(){
	var news = $('.b-news');
	$('.b-btn-blog').mouseenter(function(){
		news.fadeIn(400);
	});
	$('.b-news__close').click(function(){
		news.fadeOut(300);
	});
	$('.b-header').click(function(){
		news.fadeOut(300);
	});
	$('.b-wrapper').click(function(){
		news.fadeOut(300);
	});
}
