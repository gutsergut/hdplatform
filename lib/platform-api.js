/**********************
 * Common HD Platform API client
 * @author timurkar
 ***********************/
var HdPlatformApi = function( appId, appKey, apiUrl ) {

	return {
		makeCall: function( methodName, params, success, error ) {
			var endpointUrl = apiUrl + methodName;
			params.appId = appId;
			params.appKey = appKey;
			$.ajax( {
				url: endpointUrl,
				type: "get",
				data: params,
				complete: function ( jqResponse, status ) {

					var response = JSON.parse( jqResponse.responseText )
					if ( status != "success" || ! response.success ) {
						if ( error ) {
							error( response.message )
						}
						console.error( "API Error", response )
					}
					else {
						if ( success ) {
							success( response.data );
						}
					}
				}
			})
		}
	}
};