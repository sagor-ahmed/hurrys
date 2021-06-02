$(document).ready(function(){
	
	
	"use strict";


	


/*--------------------------------------
	Mean Menu Active
----------------------------------------*/

$('header .main-menu').meanmenu({
	meanMenuContainer: '.header-area',
	meanScreenWidth: 768,
});
   
   
   //*== Wow Active ==*/
	new WOW().init();
	
	
    /* one Page Nav */
     var top_offset= $('home').height()-10;	
	$(' #main-menus').onePageNav({
       currentClass : "active" ,
	   scrollOffset : top_offset,	   
	});
	

   //SMOOTH SCROLL
      $('.main-menu li a[href^="#"]').on('click', function(e){
          e.preventDefault();

          var target = $(this.hash);

          if (target.length) {
              $('html, body').stop().animate({
                  scrollTop: target.offset().top -60
              }, 500);
          }
      });
 
  
   
   
 
/*=== Google Map == */
/*=== Color Google Map == */
	 function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length !== 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    } 
	

	
});	



/* 
var bs= document.querySelector(".ss");

  bs.addEventListener("mouseup", function() {
	  
	 bs.classList.add ("hello");
  }  */

/*== fixed navbar == */

const navbar = document.getElementById("home");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  //setup back to top link
  
  if (scrollHeight > 500) {
    //console.log("helo");
	
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  
  
  
  
});



	  var map = new GMaps({
      el: '#map',
      lat: 40.712776,
      lng: -74.005974
}); 
		

























