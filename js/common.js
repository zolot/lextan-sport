$(document).ready(function() {

	function wResize() {
			$("#main, #about-us, #products, #polish, #contacts, #parket, #main-products, #lentan-fix, #gallery").css("min-height", $(window).height());

	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
	
	$('.scroll-pane').jScrollPane({
		// showArrows: true
	});

	// $("#owl-demo2").owlCarousel(params);
	// $("#owl-demo3").owlCarousel(params);
	// $("#owl-demo4").owlCarousel(params);
	var params = {
        loop : true,
        nav : true,
        // "singleItem:true" is a shortcut for:
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
        // singleItem : true,
        // items: 
    }
    $("#owl-demo1").owlCarousel(params);

	$(".tabs-wrap .tab").click(function() {
		$(".tabs-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-wrap .tab-item").hide().eq($(this).index()).fadeIn();
		$("#owl-demo"+($(this).index()+1)).owlCarousel(params);

	}).eq(0).addClass("active");


	// $("#owl-demo1").owlCarousel(params);


    var $switcher_lis = $(".switcher li");
    var prev = 0;

    $switcher_lis.click(function(e) {
    	e.preventDefault();

    	$switcher_lis.removeClass('active');
    	$(this).addClass('active');
    	var cur_index = $(this).index()
    	if (prev != 0 && cur_index != prev) {
    		$($(".visual li")[prev]).fadeOut();
    	}
    	$(".visual li").eq(cur_index).fadeIn(700);
    	prev = cur_index;
    });

    	var numOfImages = window.location.search ? parseInt(window.location.search.match(/\d+$/)[0]) : 70,
    		gallery = $('#gallery'),
    		videos = [
    			{
    				title: "Victoria's Secret",
    				url: "http://player.vimeo.com/video/8974462?byline=0&portrait=0",
    				thumb: "http://b.vimeocdn.com/ts/432/699/43269900_100.jpg"
    			},
    			{
    				title: "PEOPLE ARE AWESOME 2014",
    				url: "https://www.youtube.com/watch?v=LVn8ei8d4iU",
    				thumb: "http://img.youtube.com/vi/LVn8ei8d4iU/0.jpg"
    			},
    			{
    				title: "Biting Elbows - 'Bad Motherfucker' Official Music Video",
    				url: "http://player.vimeo.com/video/62092214?byline=0&portrait=0",
    				thumb: "http://b.vimeocdn.com/ts/431/797/431797120_100.jpg"
    			}
    		];
 		
 		$('#gallery-wrap').photobox('a',{time:0});

 		$('.buttons-wrap').photobox('a[rel=video]', { 
 			time:0,
 			single: true
		});
 		$('#pbOverlay').click(function(e) {
 			e.preventDefault();
			window._photobox.close();
 		})

});