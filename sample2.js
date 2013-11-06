var watchID;
var geoLoc;

function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Latitude : " + latitude + " Longitude: " + longitude);
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Access is denied!");
  }else if( err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}
function getLocationUpdate(){

   if(navigator.geolocation){
      // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout:60000};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, 
                                     errorHandler,
                                     options);
   }else{
      alert("Sorry, browser does not support geolocation!");
   }
}
// same as above simplified
function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Latitude : " + latitude + " Longitude: " + longitude);
}

function getLocationUpdate(){

   if(navigator.geolocation){
   
      watchID = navigator.geolocation.watchPosition(showLocation);
   }
}
// ================
function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Latitude : " + latitude + " Longitude: " + longitude);
}
   navigator.geolocation.watchPosition(showLocation);


   // var map;
// var pos;

// function initialize() 
// {
//   var mapOptions = {
//     zoom:12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//   // Try HTML5 geolocation
//   if(navigator.geolocation) 
//   {
//     navigator.geolocation.watchPosition(function(position) 
//     {
//       pos = new google.maps.LatLng(position.coords.latitude,
//                                        position.coords.longitude);
     
//       var infowindow = new google.maps.InfoWindow({
//         map: map,
//         position: pos,
//         content: 'Messenger.'
//       });

//       map.setCenter(pos);
//     }, 
//     function() {
//       handleNoGeolocation(true);
//     });

//   } 
//   else {
//     // Browser doesn't support Geolocation
//     handleNoGeolocation(false);
//   }
// }
// // -----------initiliaze ends here------------------

// function handleNoGeolocation(errorFlag) {
//   if (errorFlag) {
//     var content = 'Error: The Geolocation service failed.';
//   } else {
//     var content = 'Error: Your browser doesn\'t support geolocation.';
//   }

//   var options = {
//     map: map,
//     position: new google.maps.LatLng(40.0176, -105.2797),
//     content: content
//   };

//   var infowindow = new google.maps.InfoWindow(options);
//   map.setCenter(options.position);
// }

// google.maps.event.addDomListener(window, 'load', initialize);



