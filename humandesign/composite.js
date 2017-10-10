/**********************
 * Bodygraph API
 * @author timurkar
 * @created 09.10.2017
 *
 * Bodygraph - human design model
 * Main parts of bodygraph:
 *  - type - determine type of person, one of 5 variants: "manifestor", "manifesting generator", "generator", "projector", "reflector"
 *  - profile - determine role of person
 *  - gates - main features of person.
 *  - channels (pair of ) - main characteristic of person
 ***********************/
var Composite = function( bodygraph1, bodygraph2 ) {

	var humanDesignApi = new HumanDesignApi();

	return {
		loaded: false,
		info: {},
		loadFullInfo: function( language, success, error ) {
			var self = this;
			var params = {};
			params.language = language;
			params.bodygraph1 = bodygraph1.getParams();
			params.bodygraph2 = bodygraph2.getParams();
			humanDesignApi.loadCompositeFullInfo( params, function( data ) {
				self.info = data.composite;
				if ( success ) {
					self.loaded = true;
					success( data );
				}
			}, error );
		},
		getInfo: function() {
			if ( ! this.loaded ) {
				throw "Try to get info before load full info";
			}
			return this.info;
		},
		getCenters: function() {
			return this.getInfo().centers;
		}
	}
};