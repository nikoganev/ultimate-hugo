$(document).ready(function(){
	$('#clients-logo').owlCarousel({
	    autoPlay: 3000,
		items : 5,
		nav: false,
		dots: false,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// $("#testimonial-slider").owlCarousel({
	//     paginationSpeed : 500,      
	//     singleItem:true,
	//     autoPlay: 3000,
	// });

	// $("#clients-logo").owlCarousel({
	// 	autoPlay: 3000,
	// 	items : 5,
	// 	itemsDesktop : [1199,5],
	// 	itemsDesktopSmall : [979,5],
	// });

	// $("#works-logo").owlCarousel({
	// 	autoPlay: 3000,
	// 	items : 5,
	// 	itemsDesktop : [1199,5],
	// 	itemsDesktopSmall : [979,5],
	// });

	// google map
	// function initMap() {
	//   var map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: -34.397, lng: 150.644},
	//     zoom: 8
	//   });
	// }

	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});




