$(document).ready(function() {

	function wResize() {
			$("#main, #about-us, #products, #polish, #contacts, #parket").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
	
	$('.contacts-info-wrap').jScrollPane();

});