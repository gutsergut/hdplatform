/**********************
 * Sample person data renderer
 * @author timurkar
 ***********************/
var HumanDesignPersonRenderer = function( ) {

	return {
		render: function( $el, bodygraph ) {
			$el.empty()
			$el.html( "<h1>Person design</h1>")

			$table = $('<table class="result-table" cellpadding="0" cellspacing="0"/>')

			$('<tr><th>Part</th><th>Value</th><th>Means</th></tr>').appendTo( $table )

			this.addInfo( $table, "Type", bodygraph.type.title, bodygraph.type.description );
			this.addInfo( $table, "Profile", bodygraph.profile.title, bodygraph.profile.description );

			this.addTitle( $table, "Channels" );
			for( var key in bodygraph.channels ) {
				var channel = bodygraph.channels[key]
				this.addInfo( $table, channel.title, channel.annotate, channel.description );
			}

			this.addTitle( $table, "Gates" );
			for( var key in bodygraph.gates ) {
				var gate = bodygraph.gates[key]
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
