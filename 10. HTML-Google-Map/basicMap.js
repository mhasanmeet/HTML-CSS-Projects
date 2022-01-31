// Map Initialization
function initMap() {

    // Set location Property
    var mapProp= {
    
    // Set Latitude and longitude
    center:new google.maps.LatLng(23.831121,90.424301),
    
    // Map Zoom Level
    zoom: 10

    };
var map = new google.maps.Map(document.getElementById("map"),mapProp);

//Map Marker with Custom SVG Icon

// Custom SVG
const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "OrangeRed",
    fillOpacity: 0.9,
    strokeWeight: 2,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  //Marker
  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });

  //Info Window

  //Info Window Content
  const contentString = '<h1>Hello World</h1>';

   const infoWindow = new google.maps.InfoWindow({
       content: contentString,
   });

   marker.addListener("click", () => {
       infoWindow.open(map, marker);
   });

   /* Reference Link: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple */

}


