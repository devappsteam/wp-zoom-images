jQuery(document).ready(function($){
	var items = $('.pp-image-slider-thumb-item');
	$(items).each(function(item){
		var image = $(this).find('img').attr('src');
		
		$(this).find('img').css({
		   'visibility' : 'hidden',
		});
		
		$(this).find('.pp-image-slider-thumb-overlay').css({
		   	'background-image' : 'url("'+image+'")',
			'background-size' : '100%',
			'cursor' : 'pointer',
			'background-repeat': 'no-repeat',
		});
		
		$(this).append(`
			<button class="btn-zoom">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">						<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
					<line x1="11" y1="8" x2="11" y2="14"></line>
					<line x1="8" y1="11" x2="14" y2="11"></line>
				</svg>
			</button>
		`);
		
	});
	
	$(".btn-zoom").on('click', function(e){
		e.preventDefault();
		$(this).closest('.pp-image-slider-thumb-item').toggleClass('active');
	});
	
	$(document).on('mousemove','.pp-image-slider-thumb-item.active .pp-image-slider-thumb-overlay', function(e){
		  let zoomer = e.currentTarget;
		  let x, y, offsetX, offsetY;
		  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
		  e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX;
		  x = offsetX / zoomer.offsetWidth * 100;
		  y = offsetY / zoomer.offsetHeight * 100;
		  $(zoomer).css({
			"background-position": `${x}% ${y}%`
		  });
	});
	
	$(document).on('mouseleave','.pp-image-slider-thumb-item.active', function(e){
		  $(this).removeClass('active');
	});
	
});