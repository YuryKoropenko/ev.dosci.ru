$(document).ready(function() {
	/*popup-home*/
	$('.sales-leader__tov-item').hover(function() {
		$(this).children('.sales-leader-menu__popup').stop(false, true).fadeIn();
	}, function() {
		$(this).children('.sales-leader-menu__popup').stop(false, true).fadeOut();
	});

	/*accordion*/
	$('.advantages__left-accordion-link').on('click', function() {
		$(this).toggleClass('advantages__left-accordion-active');
		$(this).parent().children('.advantages__left-accordion-description').stop(false, true).slideToggle();
		return false
	});

	/**/
	$('.advantages__right-news').hover(function() {
		$(this).addClass('advantages__right-active');
	}, function() {
		$(this).removeClass('advantages__right-active');
	});

	/**/
	$('.last-news__item').hover(function() {
		$(this).addClass('last-news__active');
	}, function() {
		$(this).removeClass('last-news__active');
	});

/**/
	$('.lumber__right-link').hover(function() {
		$(this).addClass('lumber__right-active');
		$('.lumber__right-more').fadeIn();
		$('.lumber__right-more-wp').fadeIn();
	}, function() {
		$(this).removeClass('lumber__right-active');
		$('.lumber__right-more').fadeOut();
		$('.lumber__right-more-wp').fadeOut();
	});

	/**/
	$('.sales-leader__more-link').on('click', function() {
		$('.sales-leader__tov-last').removeClass('hidden');
		$(this).hide();
		return false
	});
});