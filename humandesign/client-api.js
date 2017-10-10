/**********************
 * Human Design API Client
 * @author timurkar
 ***********************/
var HumanDesignApi = function( ) {

	var endpointUrl = "https://hd.dating/pl/hd/hd-api/";
	var appId = 12913;
	var appKey = "6bf4db0db5053e2b09ab99d662106ea2";

	var platformApi = new HdPlatformApi( appId, appKey, endpointUrl );

	return {
		getBodygraphFullInfo: function( params, success, error ) {
			platformApi.makeCall( "get-full-info", params, success, error );
		},
		loadCompositeFullInfo: function( params, success, error ) {
			platformApi.makeCall( "get-composite-info", params, success, error );
		}
	}
};