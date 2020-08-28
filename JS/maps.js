mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/navigation-guidance-night-v4', // stylesheet location
	center: [-98.4861, 29.4260], // starting position [lng, lat]
	zoom: 15 // starting zoom
});

//markers
// var marker2 = new mapboxgl.Marker().setLngLat([33.8568, 151.2153])

var geekdom = {lng:-98.4935, lat:29.4264}


var alamoMarker = new mapboxgl.Marker().setLngLat([-98.4861, 29.4260]).addTo(map);
var alamoPopup = new mapboxgl.Popup().setHTML("<p>Remember the Alamo</p>").addTo(map)
alamoMarker.setPopup(alamoPopup)

var popup = new mapboxgl.Popup().setLngLat([-98.489615, 29.426827]).setHTML("<p>Codeup Rocks!</p>").addTo(map)

console.log("Coordinates for food");
geocode("1101 Grand Ave, Grand Lake, CO 80447", MAPBOX_TOKEN)
		.then(function(result) {
			console.log("Geocode results: " + result)
			map.setCenter(result);
			map.setZoom(18);
		});

console.log("110 E Houston St 7th floor, San Antonio, TX 78205");
reverseGeocode(geekdom, MAPBOX_TOKEN)
		.then(function(result) {
			console.log("Geocode results: " + result)
			map.setCenter(result);
			map.setZoom(18);
		});

