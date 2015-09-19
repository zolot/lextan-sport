$(document).ready(function() {

	function wResize() {
		$("#main, #about-us, #products, #polish, #contacts, #parket, #main-products, #lentan-fix, #gallery").css("min-height", $(window).height());
		$("#gallery").height($(document).height())
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
	
	$('.scroll-pane').jScrollPane({
	});

	var params = {
        loop : true,
        nav : true,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    }
    $("#owl-demo1").owlCarousel(params);

	$(".tabs-wrap .tab").click(function() {
		$(".tabs-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-wrap .tab-item").hide().eq($(this).index()).fadeIn();
		$("#owl-demo"+($(this).index()+1)).owlCarousel(params);

	}).eq(0).addClass("active");


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

	// Declare parallax on layers
	$('.parallax-layer').parallax({
	    xparallax: '10px',
	    yparallax: '10px',
	}, {
	    xparallax: '50px',
	    yparallax: '50px',

	}, {
	    xparallax: '30px',
	    yparallax: '30px',
	}
	);
});	