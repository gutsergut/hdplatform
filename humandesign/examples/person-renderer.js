/**********************
 * Sample person data renderer
 * @author timurkar
 ***********************/
var HumanDesignPersonRenderer = function( bodygraph ) {

	return {
		render: function( $el ) {
			$el.empty()
			$el.html( "<h1>Person design</h1>")

			$table = $('<table class="result-table" cellpadding="0" cellspacing="0"/>')

			$('<tr><th>Part</th><th>Value</th><th>Means</th></tr>').appendTo( $table )

			var type = bodygraph.getType();
			this.addInfo( $table, "Type", type.title, type.description );

			var profile = bodygraph.getProfile();
			this.addInfo( $table, "Profile", profile.title, profile.description );

			this.addTitle( $table, "Channels" );
			var channels = bodygraph.getChannels();
			for( var key in channels ) {
				var channel = channels[key]
				this.addInfo( $table, channel.title, channel.annotate, channel.description );
			}

			var gates = bodygraph.getGates();
			this.addTitle( $table, "Gates" );
			for( var key in gates ) {
				var gate = gates[key]
				this.addInfo( $table, gate.title, gate.annotate, gate.description );
			}

			$table.appendTo( $el )

		},
		addTitle: function( $el, title ) {
			$tr = $( "<tr class='title'><td colspan='3'>" + title + "</td>" )
			$tr.appendTo( $el )

		},
		addInfo: function( $el, part, title, description ) {
			$tr = $( "<tr><td>" + part + "</td><td>" + title + "</td><td>" + description + "</td>" )
			$tr.appendTo( $el )
		}

	}
};
