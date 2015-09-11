function initialize() {
        var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
        var mapOptions = {
            zoom: 12,
            center: {lat: 47.605628, lng: -122.253799}
        }
        
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        //Green-Theory
        var green_theory_content = "<div class='info'>" +
            "<img src='/assets/img/vendor_logos/green_theory.png'>" + 
            "<h4>Green-Theory</h4>" +
            "<div class='address'>" +
                "10697 Main St Suite 2, Bellevue, WA 98004" + 
            "</div>" + 
            "<p class='number'>(425) 502-7033</p>";
            
        var green_theory_infowindow = new google.maps.InfoWindow({
            content: green_theory_content
        });
        var green_theory_marker = new google.maps.Marker({
                position: new google.maps.LatLng(47.609811, -122.198494),
                map: map,
                title: 'Green-Theory'
        });
        google.maps.event.addListener(green_theory_marker, 'click', function() {
            green_theory_infowindow.open(map, green_theory_marker);
        });
}


google.maps.event.addDomListener(window, 'load', initialize);