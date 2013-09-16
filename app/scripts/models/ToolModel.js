
(function() {
	'use strict';
	var root = this;
	root.define(['backbone','communicator'],
	function( Backbone, Communicator ) {
		var ToolModel = Backbone.Model.extend({
			id: "",
			description:"",
			status: 0,
			icon:"",
			data:[]
			
		});
		return {'ToolModel':ToolModel};
	});
}).call( this );