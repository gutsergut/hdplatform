window.googlePlaceAutocomplete = function( $el ) {
	autocomplete = new google.maps.places.Autocomplete(
		($el.find(".location-selector").get(0)),{types: ['(cities)']}
	);
	autocomplete.addListener('place_changed', function (){
		place = autocomplete.getPlace();

		if (place.geometry) {
			lat = place.geometry.location.lat().toString();
			lng = place.geometry.location.lng().toString();
			$el.find('.location-latitude').val(lat)
			$el.find('.location-longitude').val(lng)
		}
	});
};

window.googleMapsSelectLocation = function( $el, locationName, callback ) {
	var geocoder = new google.maps.Geocoder;
	$el.find('.location-selector').val( locationName)

	geocoder.geocode({'address': locationName}, function(results, status) {

		if (results[0]) {
			var searchResult = results[0];
			$el.find('.location-latitude').val(searchResult.geometry.location.lat())
			$el.find('.location-longitude').val(searchResult.geometry.location.lng())
			callback();
			//if ( callback ) {
			//	setTimeout( function() { callback()  }, 10 );
			//}
		}
	} );
};