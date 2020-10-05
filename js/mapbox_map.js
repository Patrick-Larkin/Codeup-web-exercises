//Global declarations
	mapboxgl.accessToken = MAPBOX_TOKEN;

//Map
	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v10',
		center: [-105.817849, 40.251603],
		zoom: 3
	});


//Start Sagebrush
	let sageBrushMarker = new mapboxgl.Marker().setLngLat([-105.817849, 40.251603]).addTo(map);
	let sageBrushPopUp = new mapboxgl.Popup().setHTML("<p>The Lobster Shack at Two Lights</p>").addTo(map)
	sageBrushMarker.setPopup(sageBrushPopUp);

document.getElementById('sagebrushButton').addEventListener('click', function () {
		map.flyTo({
			center: [-105.817849, 40.251603],
			essential: true,
			zoom: 8
		});
	})
//End Sagebrush


//Start Lighthouse
	let twoLightsMarker = new mapboxgl.Marker().setLngLat([-70.199154, 43.564102]).addTo(map);
	let twoLightsPopUp = new mapboxgl.Popup().setHTML("<p>The Lobster Shack at Two Lights</p>").addTo(map)
	twoLightsMarker.setPopup(twoLightsPopUp)

document.getElementById('twoLightsButton').addEventListener('click', function () {
		map.flyTo({
			center: [-70.199154, 43.564102],
			essential: true,
			zoom: 8
		});
	})
//End Lighthouse

//Start Jims
	let jimsMarker = new mapboxgl.Marker().setLngLat([-98.508895, 29.607767]).addTo(map);
	let jimsPopUp = new mapboxgl.Popup().setHTML("<p>Jim's</p>").addTo(map)
	jimsMarker.setPopup(jimsPopUp)

document.getElementById('jimsButton').addEventListener('click', function () {
	map.flyTo({
			center: [-98.508895, 29.607767],
			essential: true,
		  zoom: 8
		})
	});
//End Jims

//Todo:Errors