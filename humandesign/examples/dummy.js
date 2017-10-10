window.personData = [
	{ name: "Brad Pitt", gender: "male", birthDate: "1963-12-18", birthTime: "06:31", birthPlace: "Shawnee, Oklahoma, USA" },
	{ name: "Angelina Jolie", gender: "female", birthDate: "1975-06-04", birthTime: "09:09", birthPlace: "Los Angeles, California, USA" },
	{ name: "Jennifer Aniston", gender: "male", birthDate: "1969-02-11", birthTime: "22:22", birthPlace: "Los Angeles, California, USA" },
	{ name: "Arnold Schwarzenegger", gender: "male", birthDate: "1947-07-30", birthTime: "04:10", birthPlace: "Graz, Austria" },
	{ name: "Ryan Gosling", gender: "male", birthDate: "1980-11-12", birthTime: "14:34", birthPlace: "London, UK" }
];

/***********************************************
 /* Fill list of dummy persons
 ***********************************************/
window.fillElementsWithDummy = function( $parentEl ) {

	$parentEl.find('input').change( function() {
		$parentEl.find('.person-name').html( "Custom data" );
	})
	$parentEl.find('input').keydown( function() {
		$parentEl.find('.person-name').html( "Custom data" );
	})

	for (var key in window.personData  ) {
		var person = window.personData[key];
		var $li = $('<li>');

		var $el = $("<a href='javascript:void(0)'>");
		$el.html( person.name );
		$el.data( 'person', person );

		$el.click( function() {
			var person = $(this).data( 'person' );

			$parentEl.find('.birth-date').val( person.birthDate );
			$parentEl.find('.birth-time').val( person.birthTime );
			$parentEl.find('.person-name').html( person.name );

			googleMapsSelectLocation( $parentEl, person.birthPlace, function() { $parentEl.parents('form').submit() } )
		});

		$el.appendTo( $li );
		$li.appendTo( $parentEl.find('.dummy-list') )
	}
};