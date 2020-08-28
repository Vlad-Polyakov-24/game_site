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
	$('.tabs__item').click(function(e) {
		e.preventDefault();

		$('.tabs__item').removeClass('tabs__item-active');
		$('.tabs__block').removeClass('tabs__block-active');

		$(this).addClass('tabs__item-active');
		$($(this).attr('href')).addClass('tabs__block-active');
	});

	$('.tabs__item:first').click();
/*=========*/

});