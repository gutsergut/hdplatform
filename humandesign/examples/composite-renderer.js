/**********************
 * Sample person data renderer
 * @author timurkar
 ***********************/
var HumanDesignCompositeRenderer = function( composite ) {

	return {
		render: function( $el ) {
			$el.empty()
			$el.html( "<h1>Persons composite</h1>")

			$table = $('<table class="result-table" cellpadding="0" cellspacing="0"/>')

			$('<tr><th width="200">Value</th><th>Means</th></tr>').appendTo( $table )

			this.addTitle( $table, "Biorythms" )
			var biorythms = composite.getInfo().biorythms;
			this.addInfo( $table, "", "Physical compatibility",this.getBar(biorythms.physical, "#8b0000") );
			this.addInfo( $table, "", "Emotional compatibility", this.getBar(biorythms.emotion, "#8b8fc7") );
			this.addInfo( $table, "", "Intellectual compatibility",this.getBar(biorythms.intellect, "#006400")  );

			this.addTitle( $table, "Common info" )
			var tt = composite.getInfo().types;
			var pp = composite.getInfo().profiles;
			this.addInfo( $table, "Types", tt.title, tt.description );
			this.addInfo( $table, "Profiles", pp.title, pp.description );

			this.addTitle( $table, "Composition" )
			this.addInfo( $table, "Defined centers", composite.getInfo().definedCentersCount + " of 9", "" );

			this.addTitle( $table, "Left open centers (potential problems)" );
			var openCenters = composite.getInfo().openCenters;
			for( var key in openCenters ) {
				var center = openCenters[key]
				this.addInfo( $table, "Center", center.title, center.description );
			}



			$table.appendTo( $el )

		},
		getBar: function( value, color ) {
			return "<div style='width: 100%; height: 20px; border: 1px solid #ccc'><div style='width: " + value + "%; height: 100%; color: white; min-width: 30px; text-align: center; background: " + color + "'>" + value + "%</div></div>"
		},
		addTitle: function( $el, title ) {
			$tr = $( "<tr class='title'><td colspan='3'>" + title + "</td>" )
			$tr.appendTo( $el )

		},
		addInfo: function( $el, part, title, description ) {
			$tr = $( "<tr><td>" + title + "</td><td>" + description + "</td>" )
			$tr.appendTo( $el )
		}

	}
};
