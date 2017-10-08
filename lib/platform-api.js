/**********************
 * Common HD Platform API client
 * @author timurkar
 ***********************/
var HdPlatformApi = function( appId, appKey, apiUrl ) {

	return {
		makeCall: function( methodName, params ) {
			var endpointUrl = apiUrl + methodName;
			params.data.appId = appId;
			params.data.appKey = appKey;
			$.ajax( {
				url: endpointUrl,
				type: "get",
				data: params.data,
				complete: function ( jqResponse, status ) {

					response = JSON.parse( jqResponse.responseText )
					if ( status != "success" || ! response.success ) {
						if ( params.error ) {
							params.error( response.message )
						}
						console.error( "API Error", response )
					}
					else {
						if ( params.success ) {
							params.success( response.data )
						}
					}
				}
			})
		}
	}
};