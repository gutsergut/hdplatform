window.googlePlaceAutocomplete = function() {
	autocomplete = new google.maps.places.Autocomplete(
		(document.getElementById("locationSelector")),{types: ['(cities)']}
	);
	autocomplete.addListener('place_changed', function (){
		place = autocomplete.getPlace();

		if (place.geometry) {
			lat = place.geometry.location.lat().toString();
			lng = place.geometry.location.lng().toString();
			$('#locationLatitude').val(lat)
			$('#locationLongitude').val(lng)
		}
	});
};

window.googleMapsSelectLocation = function( locationName, callback ) {
	var geocoder = new google.maps.Geocoder;
	$('#locationSelector').val( locationName)

	geocoder.geocode({'address': locationName}, function(results, status) {

		if (results[0]) {
			var searchResult = results[0];
			$('#locationLatitude').val(searchResult.geometry.location.lat())
			$('#locationLongitude').val(searchResult.geometry.location.lng())
			if ( callback ) {
				setTimeout( function() { callback()  }, 10 );
			}
		}
	} );
};