$(function() {
	initSochiLayout();
	switchBenefits();
});

$(window).resize(function(event) {
	initSochiLayout();
});

function initSochiLayout() {
	if($(window).height() > 850) {
		$('.b-first-box').css({height: $(window).height()-$('.b-header').outerHeight()});
	} else {
		$('.b-first-box').css({height: 850 - $('.b-header').outerHeight() + 'px'});
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