$(document).ready(function(){
	$(window).scroll(function(){
			console.log("scroll");
			$("#overlay2").animate({
						width:"0%"
						});
	});
	$("#project1").hover(function(){
		$("#overlay1").animate({width:"100%"});
		$(".projecttitle").addClass("projecttitlehover");
	},function(){
		$("#overlay1").animate({width:"0px"});
		$(".projecttitle").removeClass("projecttitlehover");
	});



	$(window).scroll(function(){
			var svgAttributes = anime({
			  targets: '#svgAttributes polygon',
			  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
			  easing: 'easeInOutExpo'
			});
			$(".progbar").animate({
						width:'22%'
						},"slow");
			$(".progbareven").animate({
						width:'18%'
						},"slow");
			$(".bpfeven").animate({
						opacity: '1',
						margintop: '-50px'
						},"swing");
			$(".bpfodd").animate({
						opacity: '1',
						margintop: '85px'
						},"swing");
	});
});