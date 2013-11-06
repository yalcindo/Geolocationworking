$(function(){
  // initializing the google maps it creates without a center
  var map = new google.maps.Map(document.getElementById('map-canvas'), 
  {
      // center: new google.maps.LatLng(40.0176, -105.2797),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
     //Creates connection to server
    var socket = io.connect('http://localhost');
      //gets current position
      navigator.geolocation.getCurrentPosition(function(position){
        var lat=position.coords.latitude;
        var lng=position.coords.longitude;
        console.log("lat: "+lat+ "lng:"+lng)
        socket.emit('sendcoords',{lat:lat,lng:lng});
      });



  socket.on("connect",function(){
     console.log("connected");
     
    });
  
  //coordinates come backs from server

  socket.on("loadcoords",function(data){

    console.log("data in loadcoords",data)
   

    var marker = null;
    (function autoUpdate() { 

      var newPoint = new google.maps.LatLng(data.lat,data.lng);
      console.log("new point:",newPoint)
      if (marker) {
        // Marker already created - Move it
        marker.setPosition(newPoint);
      }
      else {
        // Marker does not exist - Create it
        marker = new google.maps.Marker({
        position: newPoint,
        map: map
        });
      }

      // Center the map on the new position
      map.setCenter(newPoint);
   

    // Call the autoUpdate() function every 5 seconds
   
    setTimeout(autoUpdate,5000);
    // ========Future test below==
     // navigator.geolocation.watchPosition(autoUpdate);
    })();
    // instead of this I created IFFY
    //autoUpdate(); 
  });

});






