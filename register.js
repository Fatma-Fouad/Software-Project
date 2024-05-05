function initMap() {
    // Location coordinates for Porsche showroom
    var showroom = { lat: 40.7589, lng: -73.9851 };
    // Initialize the map centered at Porsche showroom
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: showroom
    });
    // Add marker for Porsche showroom
    var marker = new google.maps.Marker({
      position: showroom,
      map: map,
      title: 'Porsche Showroom'
    });
  }