console.log('hello world')

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiamVzc3J5YW4iLCJhIjoiY2todXVlbmhxMHpqMDMwcGdkMXN4b2N6ZSJ9.KVNdTBv3n-FPYMzQtEE3gA"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);