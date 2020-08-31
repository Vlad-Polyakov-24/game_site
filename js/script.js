$(document).ready(function() {
/*IBG*/
	function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}

	ibg();
/*=========*/

/*TAB*/
	/*TAB-FEATURED*/
		$('.tabs__item').click(function(e) {
			e.preventDefault();

			$('.tabs__item').removeClass('tabs__item-active');
			$('.tabs__block').removeClass('tabs__block-active');

			$(this).addClass('tabs__item-active');
			$($(this).attr('href')).addClass('tabs__block-active');
		});

		$('.tabs__item:first').click();
	/*=========*/

	/*TAB-BLOG*/
		$('.blogs__tabs__item').click(function(e) {
			e.preventDefault();

			$('.blogs__tabs__item').removeClass('blogs__tabs__item-active');
			$('.blogs__column__body').removeClass('blogs__column__body-active');

			$(this).addClass('blogs__tabs__item-active');
			$($(this).attr('href')).addClass('blogs__column__body-active');
		});

		$('.blogs__tabs__item:first').click();
	/*=========*/
/*=========*/

/*SLICK-SLIDER*/
	$('.testimonials__row').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:1000,
			autoplaySpeed:10000,
		});
/*=========*/

});