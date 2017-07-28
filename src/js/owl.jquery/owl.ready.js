'use strict';
$(function() {
	$(document.body).on('translated.owl.carousel', '.owl-carousel', {}, function(event){
		event.preventDefault();		
		var block = $(this);		
		var items = block.find('.owl-item:not(.cloned)');		
		var active = items.filter('.active');		
		var i = active.find('div').attr('data-owl-item');		
		var note = active.find('div').attr('data-owl-note');		
		$('.owl-count__item.is--count').html(i);		
		$('.owl-count__note').html(note);		
	});	
	$('.owl-block').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 300,
		navSpeed: 400,
		margin: 0,
		items:1,
		lazyLoad: true,
		//autoWidth: true,
		autoplay: true
	});	
});