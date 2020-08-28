
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
	center: [-105.817849, 40.251603], // starting position [lng, lat]
	zoom: 3 // starting zoom
});



var sageBrushMarker = new mapboxgl.Marker().setLngLat([-105.817849, 40.251603]).addTo(map);
var sageBrushPopup = new mapboxgl.Popup().setLngLat([-98.489615, 29.426827]).setHTML("<p>Sage Brush BBQ & Grill</p>").addTo(map)
sageBrushMarker.setPopup(sageBrushPopup)


let sageBrushMarkerFunction = function () {
	reverseGeocode(geekdom, MAPBOX_TOKEN)
			.then(function(result) {
				let sageBrushPopup = new mapboxgl.Popup()
						.setLngLat([-98.508895, 29.607767])
						.setHTML("<p>result</p>")
				// .addTo(map)
				let sageBrushMarker = new mapboxgl.Marker()
						.setLngLat([-98.508895, 29.607767])
						.addTo(map)
						.setPopup(jimsPopup);
			})
}



var twoLightsMarker = new mapboxgl.Marker().setLngLat([-70.199154, 43.564102]).addTo(map);
var twoLightsPopUp = new mapboxgl.Popup().setHTML("<p>The Lobster Shack at Two Lights</p>").addTo(map)
twoLightsMarker.setPopup(twoLightsPopUp)




let jimsMarkerFunction = function () {
	geocode("18155 Blanco Rd, San Antonio, TX 78232",MAPBOX_TOKEN)
			.then(function(result) {
				let jimsPopup = new mapboxgl.Popup()
						.setLngLat([-98.508895, 29.607767])
						.setHTML("<p>result</p>")
						// .addTo(map)
				let jimsMarker = new mapboxgl.Marker()
						.setLngLat([-98.508895, 29.607767])
						.addTo(map)
						.setPopup(jimsPopup);
			})
}

let button3 = document.getElementById("button3")
button3.addEventListener('click', jimsMarkerFunction)