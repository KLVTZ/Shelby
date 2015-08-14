/* ============================================ */
/*     Coded by Page                            */
/*     Navigation Animation && Hover States 
/*     =Additional lemmonSlider.js && gmap3.js 
/* ============================================ */

(function($) {
	
	var wrap = $('div.wrap');
	var main = $('div.grid-container');
	var mHeight = main.height();
	var fButton;
	

	$('div.buttons a').on('mouseenter', function() {
		$(this).prev().css('color','#e3ff00');
		}).on('mouseleave', function() {
			$(this).prev().css('color', 'white');
		});

	$('div.buttons').on('click','a', function(e) {
		e.preventDefault();
		var sButton = $(this).prev().prev();
		var href = $(this).attr('href');

		if(main.height() == mHeight) {
			wrap.animate({height: '220px', opacity: 1.0},300,false);
			wrap.load(href + ' .container').promise().done(function() {
				sButton.animate({opacity:1.0},250,false);
				$('div.slider').lemmonSlider({
    				'infinite' : true
				});

				// launch map if Contact is clicked
				$("#my_map").gmap3({
					map:{
						options:{
							center: [34.675464,-118.184803],
							zoom: 14
						}
					},
					marker:{
						latLng: [34.675464,-118.184803],
					},
				});

				// launch calendar if Home is clicked
				$('#date3').DatePicker({
					flat: true,
					date: ['2013-05-20','2013-05-27'],
					current: '2013-05-20',
					calendars: 2,
					mode : 'range',
					starts: 1
				});
			});

		} else {
			fButton.animate({opacity:0.0},300,false).delay(600);
			wrap.animate({height: '0px', opacity: 0.0},300,false)
				.promise().done(function() {
					wrap.animate({height: '220px', opacity: 1.0},300,false);
					wrap.load(href + ' .container').promise().done(function() {
						sButton.animate({opacity:1.0},250,false);
						$('div.slider').lemmonSlider({
    						'infinite' : true
						});

						// launch map if Contact is clicked
						$("#my_map").gmap3({
							map:{
								options:{
									center: [34.675464,-118.184803],
									zoom: 14
								}
							},
							marker:{
								latLng: [34.675464,-118.184803],
							},
						});
						$('#date3').DatePicker({
							flat: true,
							date: ['2013-04-20','2013-04-27'],
							current: '2013-05-20',
							calendars: 2,
							mode : 'range',
							starts: 1
						});
					});
				});
		}

		fButton = sButton;
	});
}(jQuery));
