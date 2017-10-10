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
var BodyGraph = function( birthDate, birthTime, latitude, longitude, title ) {

	var humanDesignApi = new HumanDesignApi();

	return {
		name: null,
		birthDate: birthDate,
		birthTime: birthTime,
		latitude: latitude,
		longitude: longitude,
		title: title,
		info: {
			type: null,
			profile: null,
			gates: null,
			channels: null
		},
		loadFullInfo: function( language, success, error ) {
			var self = this;
			var params = this.getParams();
			params.language = language;
			humanDesignApi.getBodygraphFullInfo( params, function( data ) {
				self.info = data.bodygraph;
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
		getType: function() {
			return this.getInfo().type;
		},
		getGates: function() {
			return this.getInfo().gates;
		},
		getProfile: function() {
			return this.getInfo().profile;
		},
		getChannels: function() {
			return this.getInfo().channels;
		},
		getParams: function () {
			return {
				title: this.title,
				birthDate: this.birthDate,
				birthTime: this.birthTime,
				latitude: this.latitude,
				longitude: this.longitude
			};
		},
		getComposite: function() {

		}
	}
};