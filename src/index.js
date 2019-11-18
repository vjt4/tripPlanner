console.log('hello world');
//const mapboxgl = require("mapbox-gl");
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1Ijoidmp0NCIsImEiOiJjazM0bml0MHAwOGppM25tdDBja2R3MDhoIn0.Nxdu6Q1_riKYKWWKEHlyAQ';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });


 mapboxgl.accessToken = 'pk.eyJ1Ijoidmp0NCIsImEiOiJjazM0bml0MHAwOGppM25tdDBja2R3MDhoIn0.Nxdu6Q1_riKYKWWKEHlyAQ';
 const map = new mapboxgl.Map({
    
   container: "map",
   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
   zoom: 12, // starting zoom
   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
 });