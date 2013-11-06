 function autoUpdate() {
      navigator.geolocation.getCurrentPosition(function(position) {  
        var lat=position.coords.latitude;
        var lng=position.coords.longitude;
        var newPoint = new google.maps.LatLng(lat,lng);

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
      }); 

      // Call the autoUpdate() function every 5 seconds
      setTimeout(autoUpdate, 1);
    }