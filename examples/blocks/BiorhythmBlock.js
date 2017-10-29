/**
 * Block to calculate composites by biorythms
 * https://en.wikipedia.org/wiki/Biorhythm
 *
 * @author timurkar (timur@karimbaev.com)
 * @constructor
 */
var BiorhythmBlock = function() {

	var dayLength = 1000*60*60*24;

	var physicalCycleDays   = 23.688437;
	var intellectCycleDays  = 33.163812;
	var emotionalCycleDays  = 28.426124;

	return {
		/**
		 * Calculate percent of byorythm composite between two peoples by emotional, intellcet and physical biorhythm composites
		 * @param date1 Birth date of first person
		 * @param date2 Birth date of second person
		 * @return object with percents
		 */
		calcCompatibility: function( date1, date2 ) {

			var daysDiff = Math.abs(Math.round(( (date2-date1) / dayLength )) );

			var result = {};
			result.emotional = this.calcCompositeValue( daysDiff, emotionalCycleDays )
			result.physical = this.calcCompositeValue( daysDiff, physicalCycleDays )
			result.intellect = this.calcCompositeValue( daysDiff, intellectCycleDays )

			return result;
		},

		/**
		 * Calcu
		 * @param daysDiff
		 * @param cycleLength
		 * @returns {number}
		 */
		calcCompositeValue: function( daysDiff, cycleLength ) {

			var z = daysDiff / cycleLength;
			z = z - Math.floor( z );
			z = Math.floor( z * 100 );

			coeff1 = -0.00178150575;
			coeff2 = 0.398821805;
			coeff3 = -26.6593465;
			coeff4 = 559.014559;

			var x = Math.abs( 49 - z ) + 50;

			var result = coeff1 * Math.pow(x,3) + coeff2 * Math.pow(x,2) + coeff3 * x + coeff4;
			result = Math.round(result);

			if ( result < 0 ) result = 0;
			if ( result > 100 ) result = 100;

			return result;
		}
	}

};