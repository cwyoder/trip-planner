const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1IjoiY3d5b2RlcjEzIiwiYSI6ImNrZHFuZXNjdTAwMDQzMHQ2Mm85M2o4cDgifQ.4zPavFaaBQI869DrgaHTsQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerElement = document.createElement('div');
markerElement.style.height = '20px';
markerElement.style.width = '20px';
markerElement.style.background = 'blue';

//new mapboxgl.Marker(markerElement).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const marker1 = buildMarker('hotels', [-74.009, 40.705]);
marker1.addTo(map);

const marker2 = buildMarker('restaurants', [-74.029, 40.745])
marker2.addTo(map);
