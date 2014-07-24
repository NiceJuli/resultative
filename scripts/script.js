$(function() {
	sizeFirstBlock();
	switchBenefits($('.b-switch__item'), $('.b-material-info'));
	switchBenefits($('.b-history__btn_mobile__one'), $('.b-history__item'));
	sliderHistory();
	initTabs();
	showNews();
	openHeaderMobile();
	initParallax();
	$('#b-form').validate({
        rules: {
            email: {
                email: true
            },
            tel: {
                required: true
            }
        }
    });

	


	$("#phone").mask("+7 (999) 999-9999");
	initModal();
	
});

$(window).resize(function(event) {
	sizeFirstBlock();
	sliderHistory();
});


function sizeFirstBlock() {
	if( $(window).width()>480) {
		$('.b-first-box').css({height: $(window).height()-$('.b-header').outerHeight()-180});
		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
		if($(window).height()<900){
			$('.b-first-box').css({height: $(window).height()-$('.b-header').outerHeight()-100});
		}
	} else {
		$('.b-first-box').css({height: "auto"});
		$('.b-first-box').css('background', 'url(../images/stars-big.png) no-repeat')
	}
}

function switchBenefits(link, block){
	link.click(function() {
		var name = $(this).data('name');
		link.removeClass('active');
		$(this).addClass('active');
		block.hide();
		block.filter('.'+name).fadeIn(400)
	});
}


function sliderHistory(){
	var prev = $('.b-history__btn_prev'),
		next = $('.b-history__btn_next'),
		slider = $('.b-history'),
		list = $('.b-history-box'),
		listItem = $('.b-history__item');
		if($(window).width()<480){
			var windowW = $(window).width();
			listItem.css('width', windowW);
		} else{
			listItem.css('width', '980px');
		}
	var	scrollWidth = listItem.outerWidth(true),
		sliderWidth = list.filter(":visible").find(listItem).length*scrollWidth;


	list.css('width', sliderWidth);
	slider.animate({scrollLeft: 0}, 0);
	prev.addClass('b-history__btn_noactive');



	next.click(function(){
		slider.animate({scrollLeft : '+='+scrollWidth}, 800);
		var activeItems = $('.b-history__item.active');
        prev.removeClass('b-history__btn_noactive');
        activeItems.last().next().toggleClass('active no-active');
        activeItems.first().toggleClass('no-active active');
        if(listItem.last().hasClass('active')){
            next.addClass('b-history__btn_noactive');
        }
	});

	prev.click(function(){
		slider.animate({scrollLeft : '-='+scrollWidth}, 800);
		var activeItems = $('.b-history__item.active');
		next.removeClass('b-history__btn_noactive');
        activeItems.last().toggleClass('no-active active');
        activeItems.first().prev().toggleClass('no-active active');
        if(listItem.first().hasClass('active')){
            prev.addClass('b-history__btn_noactive');
        }
	});

	if(listItem.size() <= 1){
        prev.addClass('b-history__btn_noactive');
        next.addClass('b-history__btn_noactive');
    }
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
			if($(this).hasClass('b-menu__item_main')){
				$('body, html').animate({scrollTop: $('.b-first-box').offset().top}, 1000, 'swing', function(){
					scrolling = false;
				});
				
			}
		}
		return false;
	});
	$(window).scroll(function(){
		if(($('.b-first-box').offset().top - $(window).scrollTop()) < 0 ){
			$('.b-menu__item').removeClass('active');
			$('.b-menu__item_main').addClass('active');
		}
		if(($('.b-second-box').offset().top - $(window).scrollTop()) < (20) ){
			$('.b-menu__item').removeClass('active');
			$('.b-menu__item_service').addClass('active');
		}
		if(($('.b-third-box').offset().top - $(window).scrollTop()) < (20) ){
			$('.b-menu__item').removeClass('active');
			$('.b-menu__item_history').addClass('active');
		}
		if(($('.b-fourth-box').offset().top - $(window).scrollTop()) < 90 ){
			$('.b-menu__item').removeClass('active');
			$('.b-menu__item_invite').addClass('active');
		}
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

jQuery.extend(jQuery.validator.messages, {
    required: "Это поле необходимо заполнить.",
    email: "Пожалуйста, введите корретный адрес электронной почты.",
    digits: "Пожалуйста, вводите только цифры."
});

function openHeaderMobile(){
	$('.b-header-mobile__link').click(function(){
		if($('.b-header-mobile').hasClass('active')){
			$('.b-header-mobile').removeClass('active');
		} else{
			$('.b-header-mobile').addClass('active');
		}
	});

	$('.b-menu-mobile__item').click(function(){
		$('.b-header-mobile').removeClass('active');
	});
}


function initParallax() {
	$(window).scroll(function(){
		$('.b-stars_1').css({top: (-1*$(window).scrollTop()/5) + 'px'});
		$('.b-stars_2').css({top: (-1*$(window).scrollTop()/1.5) + 'px'});
		
	});
}

function initModal(){
	$('.form-open').click(function() {
		$('.b-modal-overlay_form').show();
		if($(this).hasClass('want-meet')){
			$('.b-form-modal__title_form').text('Хочу с вами встретиться');
			$('.b-btn_form').attr('value','Хочу с вами встретиться');
		} else{
			$('.b-form-modal__title_form').text('Узнать больше');
			$('.b-btn_form').text('Узнать больше');
		}
		return false;
	});	

    $('.b-modal__close').click(function(){
    	$('.b-modal-overlay').hide();
	});

	$('.b-modal-overlay').on('click', function(event){
        if( $(event.target).closest($('.b-modal')).length ) return;
        $('.b-modal-overlay').hide();
        event.stopPropagation();
    });

}


imgModal = function (e){
        var imgPopup = $('.b-modal_img');
        var modal_container = $('.b-modal-overlay_img');

        modal_container.show();
        urlLink = $(this).attr('href');
        $('.b-modal_img__img').html('<img src="' + urlLink +'" style="max-width: 100%; max-height: 90%;"/>');
        var img = $('.b-modal_img img');
        if(img.length){
            img.load(function(){
                marginPopup();
                imgPopup.show();
            });
        }else{
            marginPopup();
           imgPopup.show();
        }
        
        return false;
    }

    $('.modal-open').on('click', imgModal);


function marginPopup(){;
    var heightWindow = $(window).height();
    var heightPopup = $('.b-modal_img').outerHeight();
    var mPopup = (heightWindow-heightPopup)/2;
    if (heightPopup<heightWindow){
        $('.b-modal_img').css('top', mPopup);
    }
    else{
        $('.b-modal_img').css('top', '50px');
    }
}



$('[type="submit"]').click(function(){
	var name =	$('.b-form__item input').filter('[name="name"]').val();	
	var tel =	$('.b-form__item input').filter('[name="tel"]').val();
	var email =	$('.b-form__item input').filter('[name="email"]').val();	
	var com =	$('.b-form__item textarea').filter('[name="com"]').val();
	if (tel.length <9 || tel == $('.b-form__item input').filter('[name="tel"]').attr('value') ){
		$('.b-form__item input').filter('[name="tel"]').addClass('error');
		return false;
	}
	else{
		$('.b-form__item input').filter('[name="tel"]').removeClass('error');	
	}
	$.ajax({
		type:'POST',
		url:'mail.php',
		data:{'name':name,'tel':tel, 'email':email, 'com': com},
		success:function(){
			$('.b-modal-overlay_form').fadeOut(100);
			$('.b-modal-overlay_fancks').fadeIn(200);
			}		
		})
	return false;
})
