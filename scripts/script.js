$(function() {
	initSochiLayout();
});

$(window).resize(function(event) {
	initSochiLayout();
});

function initSochiLayout() {
	if($(window).height() > 750) {
		$('.b-first-box').css({height: $(window).height()-$('.b-header').outerHeight()});
	} else {
		$('.b-first-box').css({height: 750 - $('.b-header').outerHeight() + 'px'});
	}
}