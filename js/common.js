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
	

    var current_h = $(document).height();
    var current_w = $(document).width();
    var old_w = 1600; // set your resolution
    var old_h = 758; // set your resolution

    function get_position(source) {
       var new_waypoints = [];
       $.each(source, function(index, el) {
            var x = el[0]/old_w;
            var y = el[1]/old_h;

            new_waypoints.push([
                x*current_w,
                y*current_h
            ])
        });
        return new_waypoints
    }

    var waypoints_1 =  get_position([[126,2],[210,140],[236,335],[214,408],[176,477],])
    var waypoints_2 =  get_position([[1143,1],[1282,16],[1492,57],])
    var waypoints_3 =   get_position([[822,2],[888,108],[774,152],])
    var waypoints_4 =      get_position([[996,216],[966,246],[918,406],[938,448],[985,543],[1003,579],[1024,616],[1036,640],])
    var waypoints_5 =     get_position([[1239,34],[1241,70],[1144,406],[1117,455],[1099,479],[1082,501],[1062,527],[1044,545],[1027,564],[1006,584],[987,607],[970,622],])
    var waypoints_6 =      get_position([[1571,46],[1542,340],[1528,400],[1486,593],[1452,644],[1429,699],[1423,718],])
    var waypoints_7 =       get_position([[1378,6],[1413,203],[1525,435],[1551,560],[1534,700],[1528,714],])
    var waypoints_8 =        get_position([[1543,5],[1558,197],[1528,392],[1476,534],[1413,707],])

    console.log(waypoints_1)
    $("#main").waypoints({
	    rotate: false,
         //[item, waypoints, loop, speedLimit, maxForce, waypoint, mass, pathThreshold, arrivalThreshold, position]
        items: [
            ['#item1', waypoints_1, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_1[0]],
            ['#item2', waypoints_2, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_2[0]],
            ['#item3', waypoints_3, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_3[0]],
            ['#item4', waypoints_4, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_4[0]],
            ['#item5', waypoints_5, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_5[0]],
            ['#item6', waypoints_6, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_6[0]],
            ['#item7', waypoints_7, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_7[0]],
            ['#item8', waypoints_8, false, 3, 0.5, 0, 0.1, 15, 0.1, waypoints_8[0]],

        ]
	});

	// $('.parallax-layer2').parallax().trigger('freeze');;	
 //    setTimeout(
 //    	function () {
 //    		pos = $('.parallax-layer2').offset();
 //    		console.log(pos)
 //    		 $('.parallax-layer2').removeAttr('style');
 //   			 $("<style type='text/css'> .test{ " + 'top: ' + parseInt(pos.top) + 'px !important; left: '+ parseInt(pos.left) + 'px !important; margin-top: 0; margin-left: 0;' + " } </style>").appendTo("head");
 //   			 $('.parallax-layer2').addClass('test')
 //   			 $('.parallax-layer2').parallax();
 //   			 $('.parallax-layer2').parallax().trigger('freeze');
 //    	},
 //    	4000
	// )
	window.arr = [];
	$(document).on("click", function save(event) {
        window.arr.push([event.pageX, event.pageY])
    });

    var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1 
               || navigator.userAgent.toLowerCase().indexOf("trident") != -1);

    document.addEventListener('copy', function(e) {
        var text = ' get_position([';
        $.each(window.arr, function(index, item) {
            text =  text + '[' + item + '],';
        });
        text = text + '])';

        var textToPutOnClipboard = text;
        if (isIe) {
            window.clipboardData.setData('Text', textToPutOnClipboard);    
        } else {
            e.clipboardData.setData('text/plain', textToPutOnClipboard);
        }
        e.preventDefault();
    });
});	