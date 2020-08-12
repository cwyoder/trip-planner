const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  // Your Code Here
  const markerElement = document.createElement('div');
  markerElement.style.height = '32px';
  markerElement.style.width = '32px';
  markerElement.style.backgroundImage = `url(${iconURLs[type]})`;

  return new mapboxgl.Marker(markerElement).setLngLat(coords);
};

module.exports = buildMarker;
