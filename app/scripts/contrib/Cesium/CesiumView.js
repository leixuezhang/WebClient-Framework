
var ELEVATION_EXAGERATION = 70;

var pinimage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABACAYAAABlR0UdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD10lEQVRo3u2aS2hVVxSGP6+JYlBjfJQl6iA+ERTFSJxUjNb4BAfWB6kjqYigA1ExbSlSHRUTEEQFbelA4kzwjYr4qgMx4gMs4qsiPnArmqvSgZq0cXBOoMg996y9zz733pYsuHDhrL32d/+7z9pnrX2g2wprPXwGMzAMGAFUAb2Av4F3wHOB+yUDbuAr4GugHhitGJIFLgBHgRaBjoKBGygHtgEbCb4nscPAdwJ3UwU30Aj8nMKSPQw0CLz3Cm6gP9AKjEv5npslcF7jmFFAjwReFQAa4JyBtYkVNzAceFKEbLdWYI8TuIGyMAv0tZjwAXACuBWO7QOMAuqAmZbwdQIXXcDPArOUkxwD1gs8zBMvA/wIbFXG/AeoEPigBjewCDiiCN4J1EvwI7WZqTK80ccq3A8JLLYBfw0MjAnaAVQLPHXcvK4AtQrX8QJ3YrOKgQYFNMAUV2gAgWnAC4VrszYdNiqCbZfgBkyctxU+C02OBJH5TO1BwCSFWo0+cp7A7TALxdnqOMUbFEF+9Zyztyt8lsWBz1MEOeiTWuB3hdu0OPAvFUFaU9gp/1BkoYn5wCsVCmVTAH+m8JmUE9zoCoFi2ugoxYcqN46qFKCGKXyGRoH3V05SmwL4BIVPZRR4mXKSJZ4L7BlK1/Io8HfKAKs8q71Z6fc2CvyBhUpNntSeACxQuv+ZE1zsKp1NRvFooLCzFr5X8uXxSxaBrpmg+eOq9lXgC9cf+Tn4IYtAPYHHBuZYAlcZuAdMtRh2U4KiJRJ8v4N4pw2cNDEVjYFyEzSS2oAxlnO0xFZABm4Akx1XwCPgeFgstwEV4Y5XB0xPcC/0E/grDnwl8FsJbfUXJEeHIKrm7Cwh8PkCpzSlG8COEoF+nQs6H/hPJQK+xaUh1AKsKCJ0uwSHA9goDrChyGr/kO9iXNPzAPBNEaA/CvTO5xDXZl5XJLVj/+2Mor7cVWDorMDuROChrS8w+Lcap1hwCY78NhUI+pYoH/TUh1cGXgJDUgbP2Zl1XSpdtjxl6BYttJXioepngNkpgfcSaNc6ZyyDL00Jeo0NtDW4wBvge8/QdwX22g5yOss3QWE93BP4qHyHXr6WSpfN8wTd7ALtrHio+i6Up8B5nrUHuw5O+tpHFhjgOLxG4Lrr3JmEf/Vcx3H7kkAnVjxU/Rfs+olZ0R1Hpgsewreh75vXJFXbx1LpMu0LBjt9QHtTPFS9KeYp8pn4y/3e34J7CFRHXK6WoNPlxTL4tajjxo0+oVMxA6sMdP7rc5n/ipmgg9tpoN3EVOulBt7DQIfRnVSXHHxfuu1/ZJ8AQAfPaleMbwwAAAAASUVORK5CYII=';
var pinimage_selected = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABACAYAAABlR0UdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElklEQVRo3u2aW2gcVRjHf7PZnc1u7s3FE1uRaEEjtFoi1gcFWxOMCPVGLalPYhExPogRqj5I8EmwKEgVrFCxpAQUNFbQaqtWX7zhhQSswbYIoekhTTYXk+xtNuPDbiWU3TlnZmcvSj8IBPY75/vxn3O+831zBq5Yec3wczIJG4FrgBbABDLAEnBBwJ9VAy7hbuBhoA/YrDFkHjgFHANGBFhlA5cQAl4Ghsj+X4yNAc8LmCwpuIT9wCslWLJjwICAhK/gEhqBH4EbSrzndgr4WscxoAF9HTBbBmiAryQMFq24hE3AVAWy3aCAtzyBSwjmskC9brTgraGp6GD0vNkX7gi0BTZiY6xdWJtJfpxIx99d7bLGXSWRuwR84wX8S2CnToTwntrvm440bzVqjKiTn520Uwv3x8zUyZTOtGtAVEBSe41L2KUFHcJunWz/ovloy+0qaAAjbJgtx1tpGm1e0kikAWDUleIS5oANjtOaWB0xMWHUGtu8LOL0RHo5dttsPWmla7eAP5SKSxhQQgNtZzs+9QoNENoSqm883BzXcD2gu1T2q2aKPBF9v6azZlexqSMyEImYvabK7T6ZJ0EYl6ndmsvZjnaV1bnsJts4bti4bc00yKDCbUjAa06KD6gCmb3mh35BAxgRIxjcquLmEdVS6VfNUDfcsOL3aRPeVaty2a4Cv0O5qXpCN/kO/kCtcpNK2OIE3qR8tCGj22/wYHfQ1HC7OS+41GsEKmmbCyneqZUF0vZpv4ms05ZODdBZCLxR68T7Of273+DJsUREw62pEHhQJ8jK8N91voMf02p8QoXAl3RGp06mHgKW/YK243ZGs9xdLAR+RjfY0lOLn/kFvvBgrEbT9WxecOGi04kfWt2dmc58Uix0fDSe0KzNAX5wqlW+Be7UmsYk0xET457L2vH0Smz7bJ1GWfuvyALsQgfQR9rTpKiZaZHbrDPWCbfQiQ/iSy6hf1sPnQ/8iDvZYO7Gi30Le+d/sjP2qnIjJu3UfP8ciwMLjS6gAUaUHZCEX4FbPB3dPaHp6GB0yuwLdwTaA1djY6xNZy4mxpJW4r3Va102y+utQVyWyfKBPwYcrqKj/pSAHbo9p11F4PcKOK77Juv1KoGeywftBD5cJeAveXkhNAI8WkHotMheDuBGcYBnK6z2i44NjaJdOgrsrQB0SkDY8RhVTPB0hdRWPm1HcJF9W3uwzNDzAt4sCjxnz5QZ/HGtikvlILJXfs+VCXpCaBZ62pdXEmaA9hKD530z63WpXLI9JYYe0YV2pXhO9RNAb4nATYF+sRtwOfnuEkE/6QbaNbiABeAFn6EnBbztdpCnu3yZbaw3+QR+vYBzbgcFPAbr9wn6gBdoz4rnVD+I5i2wQ63d5nVwsZ99zAPNHof3CPjFa+xAkY/6Ho/jDhUDXbTiOdXfAfa5LKI2FBvXl0+bJMTIfs5U8iXi11K5ZDs0/d7wA9o3xXOqv6qoIs8L/3K/71/BnQO6CvzcJeAvv2IF8NcKXTcO+QldEpOwT4K97u87/ism4fMcdFoquvVqAzckWFLjproa4eu5Yv8j+wcvTkQccISYRQAAAABJRU5ErkJggg==';

function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }


function doBoundingBoxesIntersect(bb1, bb2) {

	// First check if coverage is touching current bbox
	var boxsel = {
		TopLeftLatLong: {
			Longitude: bb1[1],
			Latitude: bb1[2]
		},
		BottomRightLatLong: {
			Longitude: bb1[3],
			Latitude: bb1[0]
		}
	};

	var boxcov = {
		TopLeftLatLong: {
			Longitude: bb2[0],
			Latitude: bb2[3]
		},
		BottomRightLatLong: {
			Longitude: bb2[2],
			Latitude: bb2[1]
		}
	};

	//First bounding box, top left corner, bottom right corner
	var ATLx = boxsel.TopLeftLatLong.Longitude;
	var ATLy = boxsel.TopLeftLatLong.Latitude;
	var ABRx = boxsel.BottomRightLatLong.Longitude;
	var ABRy = boxsel.BottomRightLatLong.Latitude;

	//Second bounding box, top left corner, bottom right corner
	var BTLx = boxcov.TopLeftLatLong.Longitude;
	var BTLy = boxcov.TopLeftLatLong.Latitude;
	var BBRx = boxcov.BottomRightLatLong.Longitude;
	var BBRy = boxcov.BottomRightLatLong.Latitude;

	var rabx = Math.abs(ATLx + ABRx - BTLx - BBRx);
	var raby = Math.abs(ATLy + ABRy - BTLy - BBRy);

	//rAx + rBx
	var raxPrbx = ABRx - ATLx + BBRx - BTLx;

	//rAy + rBy
	var rayPrby = ATLy - ABRy + BTLy - BBRy;

	if(rabx <= raxPrbx && raby <= rayPrby)
	{
		return true;
	}
	return false;
}

define(['backbone.marionette',
		'communicator',
		'app',
		'models/MapModel',
		'models/LayerModel',
		'globals',
		'papaparse',
		'hbs!tmpl/wps_get_time_data',
		'hbs!tmpl/wcs_get_coverage',
		'cesium/Cesium',
		'drawhelper',
		'FileSaver',
		'geotiff',
		'plotty',
		'analytics'
	],
	function(Marionette, Communicator, App, MapModel, LayerModel, globals, Papa,
			 Tmpl_get_time_data, Tmpl_wcs_get_coverage) {

		var CesiumView = Marionette.View.extend({

			model: new MapModel.MapModel(),

			initialize: function(options) {

				var canv = $('<canvas></canvas>')[0];
				this.p_plot = new plotty.plot(canv, null, 1, 1);

				this.map = undefined;
				this.isClosed = true;
				this.tileManager = options.tileManager;
				this.selectionType = null;
				this.overlay_index = 99;
				this.diffimage_index = this.overlay_index-10;
				this.diff_overlay = null;
				this.overlay_layers = [];
				this.overlay_offset = 100;
				this.camera_is_moving = false;
				this.camera_last_position = null;
				this.billboards = null;
				this.activeFL = [];
				this.features_collection = {};
				this.coverages_collections = {};
				this.FL_collection = {};
				this.bboxsel = null;
				this.extentPrimitive = null;
				this.activeModels = [];
				this.difference_image = null;

				this.selectedEntityId = null;
				this.primitiveMapping = {};
				this.process_result_collection = new Cesium.PrimitiveCollection();
				this.result_model = null;

				this.begin_time = null;
				this.end_time = null;

				this.stackedDataset = [];
				this.playback = false;

				this.pickingActive = false;
				this.bboxActive = false;

				this.special1dData = [];

				this.renderingActive = true;
				var self = this;
				$('#stop_visualization').change(function() {
					if($(this).is(":checked")) {
						self.renderingActive = false;
					}else{
						self.renderingActive = true;
					}
				});

				this.currentDownload = 0;
				this.downloadTotal = 0;

				this.global_product_height = 0;

				// TODO: Need to change this into an object which contais arrays for all different layers/collections
				this.currentCoverages = [];
				this.timeseries = [];
				this.timeseriesRange = [0,1];

				this.selection_x = '';
				this.selection_y = '';

				Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(-5.0, -40.0, 40.0, 90.0);
				
				Cesium.WebMapServiceImageryProvider.prototype.updateProperties = function(property, value) {

			        property = "&"+property+"=";
			        value = ""+value;
			        var i = _.indexOf(this._tileProvider._urlParts, property);
			        if (i>=0){
			        	this._tileProvider._urlParts[i+1] = value;
			        }else{
			        	this._tileProvider._urlParts.push(property);
			        	this._tileProvider._urlParts.push(encodeURIComponent(value));
			        }
			    };

				this.wcscanvas = $('<canvas></canvas>');

				$(window).resize(function() {
					if (this.map) {
						this.onResize();
					}
				}.bind(this));


				plotty.addColorScale("redblue", ["#ff0000", "#0000ff"], [0, 1]);
				plotty.addColorScale("coolwarm", ["#ff0000", "#ffffff", "#0000ff"], [0, 0.5, 1]);
				plotty.addColorScale("custom1", ["#400040","#3b004d","#36005b","#320068","#2d0076","#290084","#240091","#20009f","#1b00ad","#1600ba","#1200c8","#0d00d6","#0900e3","#0400f1","#0000ff","#0217ff","#042eff","#0645ff","#095cff","#0b73ff","#0d8bff","#10a2ff","#12b9ff","#14d0ff","#17e7ff","#19ffff","#3fffff","#66ffff","#8cffff","#b2ffff","#d8ffff","#ffffff","#ffffd4","#ffffaa","#ffff7f","#ffff54","#ffff2a","#ffff00","#ffed00","#ffdd00","#ffcc00","#ffba00","#ffaa00","#ff9900","#ff8700","#ff7700","#ff6600","#ff5400","#ff4400","#ff3300","#ff2100","#ff1100","#ff0000","#ff0017","#ff002e","#ff0045","#ff005c","#ff0073","#ff008b","#ff00a2","#ff00b9","#ff00d0","#ff00e7","#ff00ff"], [0.0,0.01587301587,0.03174603174,0.04761904761,0.06349206348,0.07936507935,0.09523809522,0.11111111109,0.12698412696,0.14285714283,0.15873015870,0.17460317457,0.19047619044,0.20634920631,0.22222222218,0.23809523805,0.25396825392,0.26984126979,0.28571428566,0.30158730153,0.31746031740,0.33333333327,0.34920634914,0.36507936501,0.38095238088,0.39682539675,0.41269841262,0.42857142849,0.44444444436,0.46031746023,0.47619047610,0.49206349197,0.50793650784,0.52380952371,0.53968253958,0.55555555545,0.57142857132,0.58730158719,0.60317460306,0.61904761893,0.63492063480,0.65079365067,0.66666666654,0.68253968241,0.69841269828,0.71428571415,0.73015873002,0.74603174589,0.76190476176,0.77777777763,0.79365079350,0.80952380937,0.82539682524,0.84126984111,0.85714285698,0.87301587285,0.88888888872,0.90476190459,0.92063492046,0.93650793633,0.95238095220,0.96825396807,0.98412698394,1]);
				plotty.addColorScale("custom2", ["#000000", "#030aff", "#204aff", "#3c8aff", "#77c4ff", "#f0ffff", "#f0ffff", "#f2ff7f", "#ffff00", "#ff831e", "#ff083d", "#ff00ff"], [0, 0.0000000001, 0.1, 0.2, 0.3333, 0.4666, 0.5333, 0.6666, 0.8, 0.9, 0.999999999999, 1]);
				plotty.addColorScale("blackwhite", ["#000000", "#ffffff"], [0, 1]);

			},

			createMap: function() {

				// Problem arose in some browsers where aspect ratio was kept not adapting 
				// to height; Added height style attribute to 100% to solve problem
				this.$el.attr("style","height:100%;");

				// TODO: We dont use bing maps layer, but it still reports use of default key in console.
				// For now we just set it to something else just in case.
				Cesium.BingMapsApi.defaultKey = "NOTHING";

				Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(0.0, -10.0, 30.0, 55.0);

				Cesium.WebMapServiceImageryProvider.prototype.updateProperties = function(property, value) {

			        property = "&"+property+"=";
			        value = ""+value;
			        var i = _.indexOf(this._tileProvider._urlParts, property);
			        if (i>=0){
			        	this._tileProvider._urlParts[i+1] = value;
			        }else{
			        	this._tileProvider._urlParts.push(property);
			        	this._tileProvider._urlParts.push(encodeURIComponent(value));
			        }
			    };

				this.$el.append("<div id='cesium_attribution'></div>");
				this.$el.append("<div id='cesium_custom_attribution'></div>");
				$("#cesium_custom_attribution").append("<div style='float:left'><a href='http://cesiumjs.org' target='_blank'>Cesium</a>"+
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");

				this.$el.append('<div type="button" class="btn btn-success darkbutton" id="cesium_save">Save as Image</div>');
				
				var layer;
				var name = "";

				this.colors = globals.objects.get("color");

				if (this.begin_time == null || this.end_time == null){
					/*var sel_time = Communicator.reqres.request('get:time');
					this.begin_time = sel_time.start;
					this.end_time = sel_time.end;*/
				}

				globals.baseLayers.each(function(baselayer) {
					if (baselayer.get("visible")){
						name = baselayer.get("name");
						layer = this.createLayer(baselayer);
					}
				}, this);

				var clock = new Cesium.Clock({
				   startTime : Cesium.JulianDate.fromIso8601("2014-01-01"),
				   currentTime : Cesium.JulianDate.fromIso8601("2014-01-02"),
				   stopTime : Cesium.JulianDate.fromIso8601("2014-01-03"),
				   clockRange : Cesium.ClockRange.LOOP_STOP,
				   clockStep : Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
				   canAnimate: false,
				   shouldAnimate: false
				});

				if (layer){
					this.map = new Cesium.Viewer(this.el,
					{
						timeline: false,
						fullscreenButton: false,
						baseLayerPicker: false,
						homeButton: false,
						infoBox: false,
						navigationHelpButton: false,
						navigationInstructionsInitiallyVisible: false,
						animation: false,
						orderIndependentTranslucency: false,
						imageryProvider: layer,
						terrainProvider : new Cesium.CesiumTerrainProvider({
					        url : '//tiles.maps.eox.at/dem'
					    }),
						creditContainer: "cesium_attribution",
						contextOptions: {webgl: {preserveDrawingBuffer: true}},
						clock: clock,
					});
				}

				// Remove GUI elements (TAMP will only use one window)
				$('.gui').remove();

				// Create needle (not shown) entity used to visualize picking location
				this.map.entities.add({
	            	id: 'needle',
			        position : Cesium.Cartesian3.fromDegrees(0, 0, 600000),
			        show: false,
			        point : {
			            //show : true, // default
			            color : Cesium.Color.RED, // default: WHITE
			            pixelSize : 12, // default: 1
			            outlineColor : Cesium.Color.WHITE, // default: BLACK
			            outlineWidth : 2 // default: 0
			        },
			        polyline : {
			        	positions: [
			        		Cesium.Cartesian3.fromDegrees(0, 0, 0),
			        		Cesium.Cartesian3.fromDegrees(0, 0, 600000)
			        	],
			        	followSurface: false,
			        	width: 2,
			        	material : Cesium.Color.RED
			        }
			    });

				var mm = globals.objects.get('mapmodel');

				this.navigationhelp = new Cesium.NavigationHelpButton({
					container: $(".cesium-viewer-toolbar")[0]
				});

			    var canvas = this.map.canvas;

			    this.map.scene.skyBox.show = mm.get('skyBox');
			    this.map.scene.sun.show = mm.get('sun');
			    this.map.scene.moon.show = mm.get('moon');
			    this.map.scene.skyAtmosphere.show = mm.get('skyAtmosphere');
			    this.map.scene.backgroundColor = new Cesium.Color.fromCssColorString(mm.get('backgroundColor'));

			    // TODO: Removes fog for now as it is not very good at this point
			    if(this.map.scene.hasOwnProperty('fog')){
			      this.map.scene.fog.enabled = false;  
			    }

			    // Add collection that handles rendering of resutls
			    this.map.scene.primitives.add(this.process_result_collection);

			    var self = this;

				var handler = new Cesium.ScreenSpaceEventHandler(this.map.scene.canvas);

				handler.setInputAction(function(click) {
					var pickedObject = self.map.scene.pick(click.position);

					
					 //hide the selectionIndicator
					self.map.selectionIndicator.viewModel.selectionIndicatorElement.style.visibility = 'hidden'; 

					if(pickedObject && pickedObject.id && 
					  (pickedObject.id.id == 'selectionrectangle' || 
					   pickedObject.id.id == 'needle')){
						return;
					}

					if(self.selectedEntityId){
						var ent = self.primitiveMapping[self.selectedEntityId];
						if (ent){
							ent.image = pinimage;
							self.selectedEntityId = null;
						}
						$("#pickingresults").empty();
						$("#pickingresults").hide();
					}
					if (Cesium.defined(pickedObject)) {
						if(pickedObject.id){
							self.pickEntity(pickedObject);
						}
					}
				}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

			    // Remove gazetteer field
			    $('.cesium-viewer-geocoderContainer').remove();

			    // Show Wireframe
			    //this.map.scene.globe._surface._tileProvider._debug.wireframe = true;
			    

				//this.map.scene.fxaaOrderIndependentTranslucency = false;

				// Workarounf for low framerate when showing rectangles with trasnparency
				/*this.map.scene._oit.isSupported = function() {
					return false;
				};*/


				this.billboards = this.map.scene.primitives.add(new Cesium.BillboardCollection());

				this.drawhelper = new DrawHelper(this.map.cesiumWidget);
				// It seems that if handlers are active directly there are some
				// object deleted issues when the draw helper tries to pick elements
				// in the scene; Setting handlers muted in the beginning seems to
				// solve the issue.
				this.drawhelper._handlersMuted = true;

				this.camera_last_position = {};
				this.camera_last_position.x = this.map.scene.camera.position.x;
				this.camera_last_position.y = this.map.scene.camera.position.y;
				this.camera_last_position.z = this.map.scene.camera.position.z;

				// Extend far clipping for fieldlines

				this.map.scene.camera.frustum.far = this.map.scene.camera.frustum.far * 15

				this.map.clock.onTick.addEventListener(this.handleTick.bind(this));
				
				globals.baseLayers.each(function(baselayer) {
					if (baselayer.get("name") == name){
						var ces_layer = this.map.scene.imageryLayers.get(0);
						ces_layer.show = true;
				 		baselayer.set("ces_layer", ces_layer);
					}
				}, this);

				
				//Go through all defined baselayer and add them to the map
				globals.baseLayers.each(function(baselayer) {
					if (baselayer.get("name")!=name){
						var layer = this.createLayer(baselayer);
						if (layer) {
							var imagerylayer = this.map.scene.imageryLayers.addImageryProvider(layer);
							imagerylayer.show = baselayer.get("visible");
							baselayer.set("ces_layer", imagerylayer);
						}
					}
				}, this);

				
				// Go through all products and add them to the map
				_.each(globals.products.last(globals.products.length).reverse(), function(product){
					var layer = this.createLayer(product);
					if (layer) {
						var imagerylayer = this.map.scene.imageryLayers.addImageryProvider(layer);
						product.set("ces_layer", imagerylayer);
						imagerylayer.show = product.get("visible");
						imagerylayer.alpha = product.get("opacity");


						// If product protocol is not WMS or WMTS they are shown differently so dont activate "dummy" layers
						if(product.get("views")[0].protocol != "WMS" && product.get("views")[0].protocol != "WMTS")
							imagerylayer.show = false;

						// If the product is set to visible trigger its activation event which handles all protocols
						if(product.get("visible")){
							var options = { name: product.get('name'), isBaseLayer: false, visible: true };
							// TODO: products made active from config are not working correctly
							// The timeslider view is initialized afterwards and the product is not displayed

							//Communicator.mediator.trigger('timeslider:add:layer', options);
						}
					}
				}, this);

				// Go through all overlays and add them to the map
                globals.overlays.each(function(overlay){
                	var layer = this.createLayer(overlay);
					if (layer) {
						var imagerylayer = this.map.scene.imageryLayers.addImageryProvider(layer);
						//var index = this.map.scene.imageryLayers.indexOf(imagerylayer);
						//index += this.overlay_offset;
						this.map.scene.imageryLayers.remove(imagerylayer, false);
						imagerylayer.show = overlay.get("visible");
						this.map.scene.imageryLayers.add(imagerylayer);
						overlay.set("ces_layer", imagerylayer);
					}
                }, this);

                var that = this;

                this.$el.on('mousedown', function (evt) {
				  that.$el.on('mouseup mousemove', function handler(evt) {
				  	// Make sure it is a click event
				    if (that.pickingActive && evt.type === 'mouseup') {
				      	var offset = $(this).offset()
	                	var x = evt.pageX - offset.left;
	                	var y = evt.pageY - offset.top;

	                	var cartesian = that.map.camera.pickEllipsoid(new Cesium.Cartesian2(x,y), that.map.scene.globe.ellipsoid);
	                	var cartographic = Cesium.Cartographic.fromCartesian(cartesian);

	                	var pos_x = Cesium.Math.toDegrees(cartographic.longitude);
	                	var pos_y = Cesium.Math.toDegrees(cartographic.latitude);

	                	that.map.entities.getById("needle").show = false;

	                	var needle = that.map.entities.getById('needle');
						needle.position.setValue(Cesium.Cartesian3.fromDegrees(pos_x, pos_y, 600000));
						needle.polyline._positions.setValue([
							Cesium.Cartesian3.fromDegrees(pos_x, pos_y, 0),
							Cesium.Cartesian3.fromDegrees(pos_x, pos_y, 600000)
						])

						that.map.entities.getById("needle").show = true;

	                	var renderdata = self.pickScene(pos_x,pos_y);

	                	$("#pickingresults").empty();
	                	$("#pickingresults").hide();

						$("#pickingresults").append('<div id="positionvalues" style="position:absolute;top:5px;left:50px"> Lat:'+pos_y.toFixed(5)+'; Lon:'+pos_x.toFixed(5)+'</div>');


	                	if (renderdata.length == 1){
	                		$("#pickingresults").show();
	                		

	                		$("#pickingresults").append('<div style="margin: 0 auto; margin-top: 40px;" id="prcontainer"></div>');
	                		$("#prcontainer").append('<ul id="listdisplay"></ul>');
	                		var cur_obj = renderdata[0];

							for (key in cur_obj){
								if (cur_obj.hasOwnProperty(key)) {
									$("#listdisplay").append('<li>'/*+key+': '*/+cur_obj[key]+'</li>');
								}
	                		}

	                	}else if (renderdata.length > 1){

	                		$("#pickingresults").show();

	                		$("#pickingresults").append('<button type="button" id="pickingresultsClose" class="close" style="position: absolute; right:0px; margin-right:5px; margin-top:5px;"><i class="fa fa-times-circle"></i></button>');
							$("#pickingresults").append('<div id="pickingresultcontainer"></div>');

							$('#pickingresultsClose').click(function(){
								self.special1dData = [];
			                	$("#pickingresults").hide();
			                	$("#pickingresults").empty();
			                });


	                		var args = {
								scatterEl: $('#pickingresultcontainer')[0],
								selection_x: that.selection_x,
								selection_y: [that.selection_y],
								showDropDownSelection: false,
								renderBlocks: false,
								margin: {top: 45, right: 20, bottom: 10, left: 50}
							};

							var sp = new scatterPlot(args, function(){
								},
								function (values) {
									//Communicator.mediator.trigger("cesium:highlight:point", [values.Latitude, values.Longitude, values.Radius]);
								}, 
								function(){
									//Communicator.mediator.trigger("cesium:highlight:removeAll");
								},
								function(filter){
									//Communicator.mediator.trigger("download:set:filter", filter);
								}
							);

	                		sp.loadData({parsedData: renderdata});
	                		// Move some things around
	                		/*$('#download_button').remove();
	                		$('#pickingresults').find('#save').attr('style','position: absolute; right: 29px; top: 7px');
	                		$('#pickingresults').find('#grid').attr('style','position: absolute; right: 155px; top: 7px');*/

	                		$("#pickingresults").append(
								'<a href="javascript:void(0)" id="enlarge" style="position: absolute;top:5px;left:5px">'+
									'<i style="font-size:1.5em;" class="fa fa-expand fa-rotate-90"></i></a>'
								);
							$('#enlarge').click(function (evt) {
								if ($('#pickingresults').hasClass("big")){
									$('#pickingresults').width("30%");
									$('#pickingresults').height("30%");
									$('#pickingresults').resize();
									$('#pickingresults').removeClass("big");
								}else{
									$('#pickingresults').addClass( "big" )
									$('#pickingresults').width("50%");
									$('#pickingresults').height("70%");
									$('#pickingresults').resize();
								}
								
							});

						  }

				    }// else here would be a drag event
				    that.$el.off('mouseup mousemove', handler);
				  });
				});

                this.$el.click(function(e){

                	// Left mouse click
                	if (e.which == 1){
                	

						}
	                	
	                });
				

			},

			pickEntity: function(pickedObject, lat, lon){

				pickedObject.primitive.image = pinimage_selected;
				this.selectedEntityId = pickedObject.id;
				var id = pickedObject.id;

				var toplot = _.filter(this.special1dData, function(obj){
					return id === obj.id;
				});


				toplot = _.filter(toplot, function(obj){
					return (obj.timestamp.getTime() > this.begin_time.getTime() && obj.timestamp.getTime() < this.end_time.getTime());
				},this); 


				$("#pickingresults").show();

				var unique_params = [];
				$.each($.unique(toplot), function(i, obj) {
					if (unique_params.indexOf(obj.field) == -1) {
						unique_params.push(obj.field);
					}
				});

				// Add possible data available in the area
				var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(pickedObject.primitive.position);
				var pos_x = Cesium.Math.toDegrees(cartographic.longitude);
				var pos_y = Cesium.Math.toDegrees(cartographic.latitude);
				var additional_data = this.pickScene(pos_x,pos_y);

				$("#pickingresults").append('<div id="positionvalues" style="position:absolute;top:5px;left:50px"> Lat:'+pos_y.toFixed(5)+'; Lon:'+pos_x.toFixed(5)+'</div>');

				for (var i = additional_data.length - 1; i >= 0; i--) {
					additional_data[i][unique_params[0]] = additional_data[i][this.selection_y];
					delete additional_data[i][this.selection_y];
				}

				toplot.push(additional_data);
				toplot = _.flatten(toplot);

				for (var i = toplot.length-1; i >= 0 ; i--) {
					for (var j = 0; j < unique_params.length; j++) {
						if(toplot[i][unique_params[j]]==-9999999){
							//delete toplot[i];
							toplot.splice(i, 1);
						}
					}
					
				}

				$("#pickingresults").append('<button type="button" id="pickingresultsClose" class="close" style="position: absolute; right:0px; margin-right:5px; margin-top:5px;"><i class="fa fa-times-circle"></i></button>');
				$("#pickingresults").append('<div id="pickingresultcontainer"></div>');

				var args = {
					scatterEl: $('#pickingresultcontainer')[0],
					selection_x: 'timestamp',
					selection_y: unique_params,
					showDropDownSelection: false,
					margin: {top: 45, right: 20, bottom: 10, left: 50},
				};

				var sp = new scatterPlot(args, function(){}, function(){}, function(){});

				sp.loadData({parsedData: toplot});
				// Move some things around
				/*$('#download_button').remove();
				$('#pickingresults').find('#save').attr('style','position: absolute; right: 29px; top: 7px');
				$('#pickingresults').find('#grid').attr('style','position: absolute; right: 155px; top: 7px');*/



				$('#pickingresultsClose').click(function(){
					self.special1dData = [];
					$("#pickingresults").hide();
					$("#pickingresults").empty();
				});

				$("#pickingresults").append(
					'<a href="javascript:void(0)" id="enlarge" style="position: absolute;top:5px;left:5px">'+
						'<i style="font-size:1.5em;" class="fa fa-expand fa-rotate-90"></i></a>'
					);
				$('#enlarge').click(function (evt) {
					if ($('#pickingresults').hasClass("big")){
						$('#pickingresults').width("30%");
						$('#pickingresults').height("30%");
						$('#pickingresults').resize();
						$('#pickingresults').removeClass("big");
					}else{
						$('#pickingresults').addClass( "big" )
						$('#pickingresults').width("50%");
						$('#pickingresults').height("70%");
						$('#pickingresults').resize();
					}
					
				});
			},

			pickScene: function(long, lat){

				var p = {x:long, y:lat};
				// TODO: One interesting way of getting this is by picking
				// This is only possible as "raycast" from camera into the scene
				// which is not practical for examning things like volumes
				// Still it has interesting potential for investigation
				//var primitives = that.map.scene.drillPick(new Cesium.Cartesian2(x,y));
				var checkInside = function(p, rect){
					if(rect){
						var e = Cesium.Math.toDegrees(rect.east),
							w = Cesium.Math.toDegrees(rect.west),
							n = Cesium.Math.toDegrees(rect.north),
							s = Cesium.Math.toDegrees(rect.south);
						if( w <= p.x && p.x <= e &&
						    s <= p.y && p.y <= n ) {
						    return true;
						}
        			}

        			return false;
            	}

            	var renderdata = [];
            	var that = this;
            	var primitives = [];
            	// Go through al primitives ans see if point is inside
            	_.each(that.map.scene.primitives._primitives, function (prim) {
            		// Is a coverage primitive
            		if(prim.hasOwnProperty('cov_id')){
            			var rect = prim.geometryInstances[0].geometry._rectangle;
            			if(			(p,rect))
            				primitives.push(prim);
            			
            		}
            		// Is a collection
            		if(prim.hasOwnProperty('_primitives') && prim.show){
            			_.each(prim._primitives, function (subprim) {
	                		// Is a coverage primitive
	                		if(subprim.hasOwnProperty('cov_id')){
	                			var rect = subprim.geometryInstances[0].geometry._rectangle;
	                			if(subprim.show && checkInside(p,rect))
	                				primitives.push(subprim);
	                			
	                		}

            			});
            		}
            	}); 

            	if(primitives){

            		var volume_primitives = false;
            		
            		for (var i = primitives.length - 1; i >= 0; i--) {
            			var pos = 0;
            			
            			var cov_id = primitives[i].cov_id;
            			var height = pos;
            			if (primitives[i].hasOwnProperty("height")){
            				height = primitives[i].height;
            				if(height!=0)
            					volume_primitives = true;
            			}
	                	var rect = primitives[i].geometryInstances[0].geometry._rectangle;

	                	// Check if coverage is part of a time stack
	                	if (that.stackedDataset.indexOf(cov_id)!=-1){
	                		// The coverage is part of the stacked dataset 
	                		// so we can go through all elements
	                		for (var j = that.stackedDataset.length - 1; j >= 0; j--) {
	                			var stackCovID = that.stackedDataset[j];
	                			if(that.p_plot.datasetAvailable(stackCovID)) {
	                				var timestamp = pos;
	                				var covsData = that.currentCoverages;
	                				for (var cov in covsData){
	                					if(covsData[cov].identifier == stackCovID){
	                						if(covsData[cov].hasOwnProperty('starttime')){
	                							timestamp = new Date(covsData[cov].starttime);
	                						}
	                					}
	                				};
									var ds = that.p_plot.datasetCollection[stackCovID];
									var w = ds.width;
									var h = ds.height;
									var east = Cesium.Math.toDegrees(rect.east);
									var west = Cesium.Math.toDegrees(rect.west);
									var north = Cesium.Math.toDegrees(rect.north);
									var south = Cesium.Math.toDegrees(rect.south);
									var res_x = Math.abs(east - west)/w;
									var res_y = Math.abs(north - south)/h;
									var x = Math.floor(Math.abs(p.x - west)/res_x);
									var y = Math.floor(Math.abs(p.y - north)/res_y);
									var index = stackCovID.lastIndexOf("_");
									//var pos = parseInt(cov_id.substr(index+1));
									var id = stackCovID.substr(0,index);
									if(stackCovID.split('_').length>3){
										function getPosition(str, m, i) {
										   return str.split(m, i).join(m).length;
										}
										id = stackCovID.substr(0,getPosition(stackCovID, '_', 3));
									}
									pos++;
									this.selection_x = 'timestamp';
									this.selection_y = 'measurement';
									if (ds.data[(y*w)+x]!=-9999){
										renderdata.push({
											id:id,
											measurement: ds.data[(y*w)+x],
											timestamp: timestamp
										})
									}
									
								}
	                		};
	                	}else{
	                		if(that.p_plot.datasetAvailable(cov_id)) {

								var ds = that.p_plot.datasetCollection[cov_id];
								var w = ds.width;
								var h = ds.height;
								var east = Cesium.Math.toDegrees(rect.east);
								var west = Cesium.Math.toDegrees(rect.west);
								var north = Cesium.Math.toDegrees(rect.north);
								var south = Cesium.Math.toDegrees(rect.south);
								var res_x = Math.abs(east - west)/w;
								var res_y = Math.abs(north - south)/h;
								var x = Math.floor(Math.abs(p.x - west)/res_x);
								var y = Math.floor(Math.abs(p.y - north)/res_y);
								/*console.log(x,y);
								console.log(ds.data[(y*w)+x]);*/
								var index = cov_id.lastIndexOf("_");
								//var pos = parseInt(cov_id.substr(index+1));
								var id = cov_id.substr(0,index);
								if(cov_id.split('_').length>3){
									function getPosition(str, m, i) {
									   return str.split(m, i).join(m).length;
									}
									id = cov_id.substr(0,getPosition(cov_id, '_', 3));
								}

								var timestamp;
                				var covsData = that.currentCoverages;

                				for (var cov in covsData){
                					if(covsData[cov].identifier == cov_id){
                						if(covsData[cov].hasOwnProperty('starttime')){
                							timestamp = new Date(covsData[cov].starttime);
                						}
                					}
                				};

								//pos++;
								if(volume_primitives){
									this.selection_x = 'measurement';
									this.selection_y = 'height';
								}else{
									this.selection_x = 'timestamp';
									this.selection_y = 'measurement';
								}

								if (ds.data[(y*w)+x]!=-9999){
									renderdata.push({
										id:id,
										measurement: ds.data[(y*w)+x],
										height: height,
										timestamp: timestamp
									})
								}

							}

	                	}
            		};
            	}
            	return renderdata;
			},

			onShow: function() {
				if (!this.map) {
					this.createMap();
				}
				
				if(this.navigationhelp){
					this.navigationhelp.destroy();
					this.navigationhelp = new Cesium.NavigationHelpButton({
						container: $(".cesium-viewer-toolbar")[0]
					});
				} 

				this.plot = new plotty.plot({
					colorScale: 'jet',
					domain: [30000,60000]
				});

				//this.plot.setClamp(true, true);

				this.isClosed = false;
				$("#cesium_save").on("click", this.onSaveImage.bind(this));

				return this;
			},

			onResize: function() {
				if(this.map._sceneModePicker){
					var container = this.map._sceneModePicker.container;
					var scene = this.map._sceneModePicker.viewModel._scene;
					this.map._sceneModePicker.destroy();
					var modepicker = new Cesium.SceneModePicker(container, scene);
					this.map._sceneModePicker = modepicker;
				}
			},

			//method to create layer depending on protocol
            //setting possible description attributes
            createLayer: function (layerdesc) {

                var return_layer = null;
                var views = layerdesc.get('views');
                var view = undefined;

                if( typeof(views) == 'undefined'){
	                view = layerdesc.get('view');
	            } else {
	            	
	            	if (views.length == 1){
	                	view = views[0];
	                } else {
                		// FIXXME: this whole logic has to be replaced by a more robust method, i.e. a viewer
                		// defines, which protocols to support and get's the corresponding views from the
                		// config then.

                		// For now: prefer WMTS over WMS, if available:
                		var wmts = _.find(views, function(view){ return view.protocol == "WMTS"; });
                		if(wmts){
                			view = wmts;
                		} else {
                			var wms = _.find(views, function(view){ return view.protocol == "WMS"; });
                			if (wms) {
	                			view = wms;
	                		} else {
                				// No supported protocol defined in config.json!
                				return null;
	                		}
                		}
	                }
	            }

	            // Manage custom attribution element (add attribution for active layers)
	            if(layerdesc.get("visible")){
	            	if(view.attribution){
	            		$("#cesium_custom_attribution").append(
		            		"<div id='" + layerdesc.get("name") + "' style='float: left;'>"+
		            		view.attribution +
		            		"</div>");
	            	}
	            }
	            
                switch(view.protocol){
                    case "WMTS":
                    	return_layer = new Cesium.WebMapTileServiceImageryProvider({
						    url : view.urls[0],
						    layer : view.id,
						    style : view.style,
						    format : view.format,
						    tileMatrixSetID : view.matrixSet,
						    maximumLevel: 12,
						    tilingScheme: new Cesium.GeographicTilingScheme({numberOfLevelZeroTilesX: 2, numberOfLevelZeroTilesY: 1}),
						    credit : new Cesium.Credit(view.attribution),
						    show: layerdesc.get("visible")
						});
                    break;

                    case "WMS":
                    	params = $.extend({
                    		/*transparent: 'true'*/
                    	},  Cesium.WebMapServiceImageryProvider.DefaultParameters);

                    	// Check if layer has additional parameters configured
                    	var additional_parameters = {};
                    	var styles;
                    	if(layerdesc.get("parameters")){
                    		var options = layerdesc.get("parameters");
                    		var keys = _.keys(options);
                    		_.each(keys, function(key){
								if(options[key].selected){
									//additional_parameters.dim_bands = key;
									additional_parameters.dim_range = options[key].range[0]+","+options[key].range[1];
									styles = options[key].colorscale;
								}
							});
                    	}

                    	additional_parameters['styles'] = styles; 

                    	if(layerdesc.get("timeSlider")){
                    		var string = getISODateTimeString(this.begin_time) + "/"+ getISODateTimeString(this.end_time);
                    		additional_parameters['time'] = string;
                    	}

                    	if(layerdesc.get("height")){
	                    	additional_parameters['elevation'] = layerdesc.get("height");
	                    }

                    	params.format = layerdesc.get("views")[0].format;
                    	return_layer = new Cesium.WebMapServiceImageryProvider({
						    url: view.urls[0],
						    layers : view.id,
						    parameters: params
						});

						for (par in additional_parameters){
							return_layer.updateProperties(par, additional_parameters[par]);
						}

                    break;

					case "WPS":
						return_layer = new Cesium.SingleTileImageryProvider({
						    url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
						});
					break;

                    default:
                    	// No supported view available
                    	// Return dummy Image provider to help with with sorting of layers 
                    	//return  new Cesium.WebMapServiceImageryProvider();
                    	return false;
                    	
                    break;

                };

                /*return_layer.events.register("loadstart", this, function() {
                  	Communicator.mediator.trigger("progress:change", true);
                });
                
                return_layer.events.register("loadend", this, function() {
                  	Communicator.mediator.trigger("progress:change", false);
                });*/
                return return_layer;
            },

			centerMap: function(data) {
				//this.map.setCenter(new OpenLayers.LonLat(data.x, data.y), data.l);

				this.model.set({
					'center': [data.x, data.y],
					'zoom': data.l
				});
			},

			onSortProducts: function(productLayers) {


				// Search for moved layer
				var layer_moved = null;
				var to_move = 0;
				globals.products.each(function(product) {
					var ces_layer = product.get("ces_layer");
                	if (ces_layer){
                		var product_index = (globals.products.length-1 - globals.products.indexOf(product)) + globals.baseLayers.length;
                		var ces_index = this.map.scene.imageryLayers.indexOf(ces_layer);
                		var cur_move = product_index - ces_index;
                		if (Math.abs(to_move)<Math.abs(cur_move)){
                			to_move = cur_move;
                			layer_moved = ces_layer;
                		}
                	}
				}, this);

				// Raise or Lower the layer depending on movement
				for(var i=0; i<Math.abs(to_move); ++i){
					if(to_move < 0)
						this.map.scene.imageryLayers.lower(layer_moved);
					else if(to_move>0)
						this.map.scene.imageryLayers.raise(layer_moved);
				}

				
				console.log("Map products sorted");
			},

			onUpdateOpacity: function(options) {

				// Cesium has some issue ordering things when alpha is equal to 1
				if(options.value==1){options.value=0.999;}

				globals.products.each(function(product) {
                	if(product.get("download").id==options.model.get("download").id){

		            			if(product.get("views")[0].protocol == "WCS"){
		            				var cur_coll = this.coverages_collections[product.get("views")[0].id];
		            				if(cur_coll){
										for (var p=0; p<cur_coll._primitives.length; p++){
											var prim = cur_coll._primitives[p];

											//prim.appearance.material.uniforms.alpha = options.value;
											prim.appearance.material.uniforms.color.alpha = options.value;

										}
									}
		            			}

                		var ces_layer = product.get("ces_layer");

                		if( _.has(this.features_collection, options.model.get("views")[0].id) ){
                			var fc = this.features_collection[options.model.get("views")[0].id];
                			for (var i = fc.length - 1; i >= 0; i--) {
                				var b = fc.get(i);
                				if(b.color){
	                				var c = b.color.clone();
	                				c.alpha = options.value;
	  								b.color = c;
	  							}else if(b.appearance){
	  								var c = b.appearance.material.uniforms.color.clone();
	                				c.alpha = options.value;
	  								b.appearance.material.uniforms.color = c;
	  							}
                			};
                		}else if(ces_layer){
							ces_layer.alpha = options.value;
						}
					}

					if(options.model.get("name") == "Processing results"){
						for (var p=0; p<this.process_result_collection._primitives.length; p++){

							var prim = this.process_result_collection._primitives[p];
							prim.appearance.material.uniforms.color.alpha = options.value;

						}
	            	}

				}, this);
            },

            changeLayer: function(options) {
            	// Seems for some reason that a layer needs to be as shown at all times
            	// or cesium will throw an error, so first activate the new layer, then 
            	// deactivate the others
				if (options.isBaseLayer){
					
					globals.baseLayers.each(function(baselayer) {
						var ces_layer = baselayer.get("ces_layer");
						if (ces_layer) {
							if(baselayer.get("name")==options.name){
								ces_layer.show = true;
								// Manage custom attribution element (add attribution for active baselayer)
				            	if(baselayer.get("views")[0].attribution){
				            		$("#cesium_custom_attribution").append(
					            		"<div id='" + baselayer.get("name") + "' style='float: left;'>"+
					            		baselayer.get("views")[0].attribution +
					            		"</div>");
					            }
							}
						}
					}, this);

					globals.baseLayers.each(function(baselayer) {
						var ces_layer = baselayer.get("ces_layer");
						if (ces_layer) {
							if(baselayer.get("name")!=options.name){
								ces_layer.show = false;
								//Manage custom attribution (remove deactivated layers)
								$("#"+baselayer.get("name")).remove();
							}
						}
					}, this);

                } else {
                    globals.overlays.each(function(overlay) {
                    	if(overlay.get("name")==options.name){
                    		var ces_layer = overlay.get("ces_layer");
							ces_layer.show = options.visible;
							if(options.visible){
								// Manage custom attribution element (add attribution for active baselayer)
				            	if(overlay.get("view").attribution){
				            		$("#cesium_custom_attribution").append(
					            		"<div id='" + overlay.get("name") + "' style='float: left;'>"+
					            		overlay.get("view").attribution +
					            		"</div>");
					            }
							}else{
								//Manage custom attribution (remove deactivated layers)
								$("#"+overlay.get("name")).remove();
							}
						}
					}, this);

					globals.products.each(function(product) {
                    	if(product.get("download").id==options.id){
                    		// TODO: This if method is only for testing and has to be reviewed
                    		if(product.get("views")[0].protocol == "CZML"){

			        		}else if (product.get("views")[0].protocol == "WCS"){
			        			this.checkCoverages(product, options.visible);

                    		}else if (product.get("views")[0].protocol == "WPS"){
                    			this.checkShc(product, options.visible);
								
                    		}else if (product.get("views")[0].protocol == "WMS" || product.get("views")[0].protocol == "WMTS" ){

                    			var parameters = product.get("parameters");
                    			var coeff_range = product.get("coefficients_range");

                    			if (parameters){
                    				var band;
			            			var keys = _.keys(parameters);
									_.each(keys, function(key){
										if(parameters[key].selected)
											band = key;
									});
			            			var style = parameters[band].colorscale;
			            			var range = parameters[band].range;

									if (band == "Fieldlines"){
										if(options.visible){
			                    			this.activeFL.push(product.get("download").id);
			                    		}else{
			                    			if (this.activeFL.indexOf(product.get('download').id)!=-1){
		                						this.activeFL.splice(this.activeFL.indexOf(product.get('name')), 1);
		                					}
			                    		}
			                    		this.checkFieldLines();
									}else{
										var ces_layer = product.get("ces_layer");
										if(band)
					                		ces_layer.imageryProvider.updateProperties("dim_bands", band);
					                	if(range)
					                		ces_layer.imageryProvider.updateProperties("dim_range", (range[0]+","+range[1]));
					                	if(style)
					                		ces_layer.imageryProvider.updateProperties("styles", style);
					                	if(coeff_range)
					                		ces_layer.imageryProvider.updateProperties("dim_coeff", (coeff_range[0]+","+coeff_range[1]));

										ces_layer.show = options.visible;
									}
                    			}else{
                    				var ces_layer = product.get("ces_layer");
									ces_layer.show = options.visible;
                    			}
                    			

	                    		
							}
							if(options.visible){
								// Manage custom attribution element (add attribution for active baselayer)
				            	if(product.get("views")[0].attribution){
				            		$("#cesium_custom_attribution").append(
					            		"<div id='" + product.get("name") + "' style='float: left;'>"+
					            		product.get("views")[0].attribution +
					            		"</div>");
					            }
							}else{
								//Manage custom attribution (remove deactivated layers)
								$("#"+product.get("name")).remove();
							}
						}
						if(product.get("model") && product.get("download").id == options.id){
							if(options.visible){
								this.activeModels.push(product.get("download").id);
								// Iterate over active Swarm products
								globals.products.each(function(product) {
									//if(product.get("satellite") == "Swarm")
										//this.checkLayerFeatures(product, product.get("visible"));
								},this);
							}else{
								if (this.activeModels.indexOf(product.get('name'))!=-1)
                					this.activeModels.splice(this.activeModels.indexOf(product.get('name')), 1);

                				if (this.activeModels.length != 2){
                					if(this.difference_image)	
										this.map.scene.imageryLayers.remove(this.difference_image);
									this.difference_image = null;

									if($("#colorlegend").is(":visible"))
										$("#colorlegend").hide();
                				}

							}

							// Compare models if two are selected
							if (this.activeModels.length == 2){
							}

						}
					}, this);
                }



            },

			onMapShowResult: function (data, collection_id, o_collection_id, type) {

				var gt;
				try {
					gt = GeoTIFF.parse(data);
				}
				catch(err) {
					$("#error-messages").append(
						'<div class="alert alert-warning alert-danger">'+
						'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+
						'<strong>Error:</strong> The was a problem during processing.' +
						'</div>'
					);
					return;
				}
				
				var img = gt.getImage(0);
				var rasdata = img.readRasters();
				var meta = img.getGDALMetadata();

				if(this.p_plot.datasetAvailable("process_result")){
					this.p_plot.removeDataset("process_result");
				}
				this.p_plot.addDataset("process_result", rasdata[0], img.getWidth(), img.getHeight());
				var min = Number.MAX_VALUE;
				var max = Number.MIN_VALUE;

				var d = rasdata[0];
				for (var i=0; i<d.length;i++){
					if(d[i]!=-9999 && min > d[i]){
						min = d[i];
					}else if(max < d[i]){
						max = d[i];
					}
				}
				/*var max = Math.max.apply(null, rasdata[0]);
				var min = Math.min.apply(null, rasdata[0]);*/
				this.p_plot.setDomain([min, max]);
				this.p_plot.setNoDataValue(-9999);
				this.p_plot.setClamp(false,true);
				this.p_plot.renderDataset("process_result");

				var bbox = [
					this.bboxsel[1],
					this.bboxsel[0],
					this.bboxsel[3],
					this.bboxsel[2]
				]

				this.createPrimitive(this.p_plot.canvas.toDataURL(), bbox, "process_result", this.process_result_collection, 0.98, 16000);

				this.result_model = new LayerModel.LayerModel({
					name: 'Processing results',
					visible: false,
					timeSlider: false,
					opacity: 1,
					views: [{
						"id": "process_result",
						"protocol": "none",
						"urls": ["none"]
					}],
					view: {isBaseLayer: false},
					download: {
						id: 'process_result',
						protocol: 'empty',
						url: 'empty'
					},
					"parameters": {
						"Parameter1": {
							"colorscale": "viridis",
							"range": [min, max],
							"uom":"du",
							"selected": true
						}
					}
				});


				if (_.isUndefined(App.layerSettings.isClosed) || App.layerSettings.isClosed) {
					App.layerSettings.setModel(this.result_model);
					App.optionsBar.show(App.layerSettings);
				} else {
					if(!App.layerSettings.sameModel(this.result_model)){
						App.layerSettings.setModel(this.result_model);
						App.optionsBar.show(App.layerSettings);
					}
				}

				if(!_.isUndefined(collection_id)){
					$(App.optionsBar.el).find(".panel-title")[1].textContent = "Processing results Settings: "+
				                     collection_id+" "+type+" "+
				                     o_collection_id;

				}
            },


            checkShc: function(product, visible){
            	if(visible){

    				if(product.get('shc') != null){

    					var parameters = product.get("parameters");
            			var band;
            			var keys = _.keys(parameters);
						_.each(keys, function(key){
							if(parameters[key].selected)
								band = key;
						});
            			var style = parameters[band].colorscale;
            			var range = parameters[band].range;
    					var imageURI;
						var self = this;
						var imagelayer;

						var ces_layer = product.get("ces_layer");
						var index = this.map.scene.imageryLayers.indexOf(ces_layer);
						
						var url = product.get("views")[0].urls[0];

						var coefficients_range = product.get("coefficients_range");

						$.post(url, Tmpl_eval_model({
							"model": "Custom_Model",
							"variable": band,
							"begin_time": getISODateTimeString(this.begin_time),
							"end_time": getISODateTimeString(this.end_time),
							"elevation": product.get("height"),
							"coeff_min": coefficients_range[0],
							"coeff_max": coefficients_range[1],
							"shc": product.get('shc'),
							"height": 512,
							"width": 1024,
							"style": style,
							"range_min": range[0],
							"range_max": range[1],
						}))

							.done(function( data ) {	
								that.map.scene.imageryLayers.remove(ces_layer);									
							    imageURI = "data:image/gif;base64,"+data;
							    var imagelayer = new Cesium.SingleTileImageryProvider({url: imageURI});
								ces_layer = that.map.scene.imageryLayers.addImageryProvider(imagelayer, index);
								product.set("ces_layer", ces_layer);
								// TODO: Hack to position layer at correct index, adding imagery provider  
								// with index does not seem to be working
								var ces_index = that.map.scene.imageryLayers.indexOf(ces_layer);
								var to_move = index - ces_index;
								for(var i=0; i<Math.abs(to_move); ++i){
									if(to_move < 0)
										that.map.scene.imageryLayers.lower(ces_layer);
									else if(to_move>0)
										that.map.scene.imageryLayers.raise(ces_layer);
								}
							});
    				}
    			}else{
    				var ces_layer = product.get("ces_layer");
					ces_layer.show = visible;
    			}
            },

            createCurtain: function(image, positions, cov_id, cur_coll, alpha, height){

				/*var newmat = new Cesium.Material({
			        fabric : {
			            uniforms : {
			                image : image,
							repeat : new Cesium.Cartesian2(-1.0, -1.0),
			                alpha : alpha
			            },
			            components : {
			                diffuse : 'texture2D(image, fract(repeat * materialInput.st)).rgb',
			                alpha : 'texture2D(image, fract(repeat * materialInput.st)).a * alpha'
			            }
			        },
					flat: true,
			        translucent : true
			    });*/

			    var newmat = new Cesium.Material.fromType('Image', {
					image : image,
					color: new Cesium.Color(1, 1, 1, alpha),
				});

			    var max_heights = [];
			    var min_heights = [];
			    for (var i = (positions.length/2) - 1; i >= 0; i--) {
			    	max_heights.push(height);
			    	min_heights.push(0.0);
			    };

			    var wall = new Cesium.WallGeometry({
					positions : Cesium.Cartesian3.fromDegreesArray(positions),
					minimumHeights : max_heights,
					maximumHeights : min_heights,
				});

				var wallGeometry = Cesium.WallGeometry.createGeometry(wall);

				var instance = new Cesium.GeometryInstance({
				  geometry : wallGeometry
				});

				var prim = new Cesium.Primitive({
				  geometryInstances : [instance],
				  appearance : new Cesium.MaterialAppearance({
				  	translucent : true,
				  	flat: true,
				    material : newmat
				  }),
				  releaseGeometryInstances: false
				});

				prim["cov_id"] = cov_id;

				cur_coll.add(prim);


			   //this.map.entities.add(wall);

			   /*var wall_1 = this.map.entities.add({
				    id: 'wall_1',
				    name: 'Two-position wall',
				    wall: {
				        positions: Cesium.Cartesian3.fromDegreesArray(positions),
				        maximumHeights: max_heights,
				        minimumHeights: min_heights,
				        material: material
				        //material: newmat
				    }
				});*/

            },

            createPrimitive: function(image, bbox, cov_id, cur_coll, alpha, height){

        		height = defaultFor(height, (this.global_product_height));
				alpha = defaultFor(alpha, 0.98);


				// Cesium has some issue ordering things when alpha is equal to 1
				if(alpha==1){alpha=0.98;}

				var instance = new Cesium.GeometryInstance({
				  geometry : new Cesium.RectangleGeometry({
				    rectangle : Cesium.Rectangle.fromDegrees(bbox[0],bbox[1],bbox[2],bbox[3]),
				    vertexFormat : Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
						height: height
				  })
				});

				var newmat = new Cesium.Material.fromType('Image', {
					image : image,
					color: new Cesium.Color(1, 1, 1, alpha),
				});


				var prim = new Cesium.Primitive({
				  geometryInstances : [instance],
				  appearance : new Cesium.MaterialAppearance({
				    material : newmat,
				    flat: true,
				    translucent: true,
				    /*closed: true*/
				  }),
				  releaseGeometryInstances: false
				});

				prim["cov_id"] = cov_id;
				prim["height"] = height/ELEVATION_EXAGERATION;

				cur_coll.add(prim);
            	
			},

			loadCoverage: function(request, bbox, cov_id, range, cur_coll, alpha, clamp, prim){

				var self = this;

				return $.ajax({
				   dataType:'arraybuffer',
				   type:'GET',
				   url: request
				})
				.done(function( data ) {

					var gt = GeoTIFF.parse(data);
					var img = gt.getImage(0);
					var rasdata = img.readRasters();
					var meta = img.getGDALMetadata();


					// Check if the GeoTIFF is a vertical curtain
					if(meta && meta.hasOwnProperty('COORDINATES') && meta.hasOwnProperty('HEIGHT_LEVELS') &&
					   	meta.hasOwnProperty('HEIGHT_LEVELS_NUMBER')){

					   	var coords = meta.COORDINATES.split(',');
					   	var positions = [];
					   	for (var i = coords.length - 1; i >= 0; i--) {
					   		positions = positions.concat($.trim(coords[i]).split(' ').map(Number));
					   	};
					   	var height = meta.HEIGHT_LEVELS.split(' ');
					   	height = Number(height[height.length-1])*ELEVATION_EXAGERATION/10;

						self.p_plot.addDataset(cov_id, rasdata[0], img.getWidth(), img.getHeight());
						self.p_plot.setDomain(range);
						self.p_plot.setNoDataValue(-9999);
						self.p_plot.setClamp(clamp[0],clamp[1]);
						self.p_plot.renderDataset(cov_id);
						if (prim){
							prim["cov_id"] = cov_id;
							prim.appearance.material._textures.image.copyFrom(self.p_plot.canvas);
						}else{
							self.createCurtain(self.p_plot.canvas.toDataURL(), positions, cov_id, cur_coll, alpha, height);
							
						}

					}else{


						// Check if we have a multilayered tif
						// There are two types of multilayered tif: volumes and "columns" (e.g. lidar)
						// We need to differentiate between them as they are displayed differently 
						if (rasdata.length > 1){

							var heights;
							if(meta && meta.hasOwnProperty('VERTICAL_LEVELS')){
								//heights = meta.VERTICAL_LEVELS.slice(1, -1).match(/\S+/g).map(Number);
								heights = meta.VERTICAL_LEVELS.split(',').map(Number);
							}


							if (img.getWidth()==1 && img.getHeight()==1) {
								// This is a 1D "column"

								//var line = [];
								var cov_bb = _.find(self.currentCoverages, function(o){return o.identifier == cov_id;}).bbox;
								cov_bb = cov_bb.substring(1, cov_bb.length - 1).split(",").map(parseFloat);
								var pos = new Cesium.Cartesian3.fromDegrees(
									cov_bb[0] + ((cov_bb[2]-cov_bb[0])/2),
									cov_bb[1] + ((cov_bb[3]-cov_bb[1])/2)
								);
								var bil_coll = cur_coll.add(new Cesium.BillboardCollection());
								bil_coll.add({
									position : pos,
									verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
									image : pinimage
								});
								cur_coll.show = true;

								var cov_item = (_.find(self.currentCoverages, function(item) {
									return item.identifier == cov_id; 
								}));
								var starttime = cov_item.starttime;
								var endtime = cov_item.endtime;

								if(meta && meta.hasOwnProperty('GLOBAL_MIN') && meta.hasOwnProperty('GLOBAL_MAX')){
									self.timeseriesRange = [Number(meta.GLOBAL_MIN), Number(meta.GLOBAL_MAX)];
								}

								for (var i = 0; i < rasdata.length; i++) {
									//line.push(rasdata[i][0]);
									var height = heights[i];
									self.timeseries.push({
										starttime:starttime,
										endtime: endtime,
										val:rasdata[i][0],
										height: height
									});
								}
								//self.timeseries.push({id:cov_id, data:line});

							}else{
								// This is a volume
								// TODO: Super dirty hack because data is weird and they dont want it to be visualized like this
								if(heights[heights.length-1]>99999){
									heights.pop();
									rasdata.pop();
								}
							
								for (var i = 0; i < rasdata.length; i++) {
									self.p_plot.addDataset((cov_id+"_"+i), rasdata[i], img.getWidth(), img.getHeight());
									self.p_plot.setDomain(range);
									self.p_plot.setNoDataValue(-9999);
									self.p_plot.setClamp(clamp[0],clamp[1]);
									self.p_plot.renderDataset((cov_id+"_"+i));
									var height = i*18000;
									if (i<=heights.length){
										height = heights[i]*ELEVATION_EXAGERATION;
									}
									self.createPrimitive(self.p_plot.canvas.toDataURL(), bbox, (cov_id+"_"+i), cur_coll, alpha, height);
								}
							}

						}else{
							// Not a volume so create just one primitive
							self.p_plot.addDataset(cov_id, rasdata[0], img.getWidth(), img.getHeight());
							self.p_plot.setDomain(range);
							self.p_plot.setNoDataValue(-9999);
							self.p_plot.setClamp(clamp[0],clamp[1]);
							self.p_plot.renderDataset(cov_id);
							if (prim){
								prim["cov_id"] = cov_id;
								prim.appearance.material._textures.image.copyFrom(self.p_plot.canvas);
							}else{
								self.createPrimitive(self.p_plot.canvas.toDataURL(), bbox, cov_id, cur_coll, alpha);
							}

						}
					}

					self.currentDownload++;
					if(self.currentDownload == self.downloadTotal){
						$('#loadingcontrols').empty();
						$('#loadingcontrols').hide();
					}

					$('#progressindicator').text(self.currentDownload +' / '+ self.downloadTotal);
					$('#progressindicator').css('width', Math.round(((self.currentDownload-1)/self.downloadTotal)*100)+'%');

				});
			},

			addCoverage: function(request, cov_id){

				var self = this;

				return $.ajax({
				   dataType:'arraybuffer',
				   type:'GET',
				   url: request
				})
				.done(function( data ) {

					var gt = GeoTIFF.parse(data);
					var img = gt.getImage(0);
					var rasdata = img.readRasters();

					if (img.getWidth()==1 && img.getHeight()==1) {
						// This is a 1D "column"
						var meta = img.getGDALMetadata();
						var heights;
						if(meta && meta.hasOwnProperty('VERTICAL_LEVELS')){
							heights = meta.VERTICAL_LEVELS.split(',').map(Number);
						}
						// TODO: Super dirty hack because data is weird and they dont want it to be visualized like this
						if(heights[heights.length-1]>99999){
							heights.pop();
							rasdata.pop();
						}

						//var line = [];
						//console.log(rasdata.length);
						var cov_item = (_.find(self.currentCoverages, function(item) {
							return item.identifier == cov_id; 
						}));
						var starttime = cov_item.starttime;
						var endtime = cov_item.endtime;

						for (var i = 0; i < rasdata.length; i++) {
							//line.push(rasdata[i][0]);
							var height = heights[i];
							self.timeseries.push({
								starttime:starttime,
								endtime: endtime,
								val:rasdata[i][0],
								height: height
							});
						}
						//self.timeseries.push({id:cov_id, data:line});
					}else{
						// 2D coverage for animation
						self.p_plot.addDataset(cov_id, rasdata[0], img.getWidth(), img.getHeight());
						self.stackedDataset.push(cov_id);
					}

					self.currentDownload++;
					if(self.currentDownload == self.downloadTotal){
						$('#loadingcontrols').empty();
						$('#loadingcontrols').hide();
					}

					$('#progressindicator').text(self.currentDownload +' / '+ self.downloadTotal);
					$('#progressindicator').css('width', Math.round(((self.currentDownload-1)/self.downloadTotal)*100)+'%');

				});
			},

            checkCoverages: function(product,visible){

            	// Remove possible timetick and play button
            	Communicator.mediator.trigger("date:tick:select", false);
            	$('#playercontrols').hide();
            	$('#timestamp').hide();

            	if(this.renderingActive){


	            	if(!_.has(this.coverages_collections, product.get("views")[0].id)){
	            		this.coverages_collections[product.get("views")[0].id] = new Cesium.PrimitiveCollection();
	            		this.map.scene.primitives.add(this.coverages_collections[product.get("views")[0].id]);
	            	}

	            	var cur_coll = this.coverages_collections[product.get("views")[0].id];

	            	if(visible){

	            		cur_coll.show = true;

	    				var color = product.get("color");
						color = color.substring(1, color.length);
		    			var parameters = product.get("parameters");
		    			var keys = _.keys(parameters);
		    			var band;
						_.each(keys, function(key){
							if(parameters[key].selected)
								band = key;
						});
		    			var colorscale = parameters[band].colorscale;
		    			var clamp_min = defaultFor(parameters[band].clamp_min, false);
	            		var clamp_max = defaultFor(parameters[band].clamp_max, false);
		    			var outlines = product.get("outlines");
		    			var range = parameters[band].range;
		    			var alpha = product.get("opacity");
		    			var url = product.get("views")[0].urls[0];
		    			var collection = product.get("views")[0].id;
		    			var self = this;
		    			//self.current_product = product;

		    			this.p_plot.setColorScale(colorscale);

	        			$.post( url, Tmpl_get_time_data({
							"collection": collection,
							"begin_time": getISODateTimeString(this.begin_time),
							"end_time": getISODateTimeString(this.end_time),
						}), "xml")


						.done(function( data ) {
							var coverages = Papa.parse(data, {
								header: true,
								skipEmptyLines: true
							});

							// Add old coverages to current selection to check 
							// later possible things that have to bee freed
							/*var tmp_current_covs = coverages.data;
							for (var i = 0; i < self.currentCoverages.length; i++) {
								if(!_.find(coverages.data, function(c){
										return c.identifier == self.currentCoverages[i].identifier;
									})
								){
									tmp_current_covs.push(self.currentCoverages[i]);
								}
							}
							self.currentCoverages = tmp_current_covs;*/

							self.currentCoverages = coverages.data;


							function identicalBbox(array) {
								if (array.length == 1 || array.length == 0)
									return false;
							    for(var i = 0; i < array.length - 1; i++) {
							        if(array[i].bbox != array[i+1].bbox) {
							            return false;
							        }
							    }
							    return true;
							}

							// Now we have a list of all currently selected coverages
							// We check if the coverages are stacked (one over the other)
							// i.e. same bounding box
							var stacked = identicalBbox(coverages.data);
							var stacked_prim = null;


							if(!stacked){
								// If not stacked there is a primitive per coverage, so we can
								// remove coverage primitives from collection which are no longer in the list
								var prim_to_remove = [];

								for (var p=0; p<cur_coll._primitives.length; p++){
									if(
										!_.find(coverages.data, function(c){
											return c.identifier == cur_coll._primitives[p].cov_id;
										})
									){
										prim_to_remove.push(cur_coll._primitives[p]);
									}
								};

								for (var i = prim_to_remove.length - 1; i >= 0; i--) {
									if(prim_to_remove[i].cov_id){
										self.p_plot.removeDataset(prim_to_remove[i].cov_id);
									}
									cur_coll.remove(prim_to_remove[i]);
								};

							}else{
								// If stacked coverages there is only one primitive per collection
								// and the texture data saved in the plot library so we check there for availability
								// to see if we have to free the texture
								for (var i = self.stackedDataset.length - 1; i >= 0; i--) {
									if(
										!_.find(coverages.data, function(c){
											return c.identifier == self.stackedDataset[i];
										})
									){
										if(self.p_plot.datasetAvailable(self.stackedDataset[i])) {
											self.p_plot.removeDataset(self.stackedDataset[i]);
											self.stackedDataset.splice(i,1);
											this.global_product_height-=250
										}
									}

								};

								for (var p=0; p<cur_coll._primitives.length; p++){
									// We also check to see if there is an already created primitive for
									// the stack animation
									if(
										!_.find(self.stackedDataset, function(c){
											return c == self.stackedDataset[i];
										})
									){
										stacked_prim = cur_coll._primitives[p];
									}
								};
							}

							var deferreds = [];
							self.currentDownload = 0;

							// Let us sort them by start date
							coverages.data = _.sortBy(coverages.data, function(c){ return Date.parse(c.starttime); });

							for (var i = coverages.data.length - 1; i >= 0; i--) {

								var bbox = coverages.data[i].bbox;
								bbox = bbox.substring(1, bbox.length - 1).split(",").map(parseFloat);
								//var request = url + "?service=WCS&request=GetCoverage&version=2.0.1&coverageid="+coverages.data[i].identifier;

								//var request = url.substring(0,url.length-11) + "/coverage/"+coverages.data[i].identifier+".tif";
								var request = url.substring(0,url.length-11) + "/davprc/coverage/"+coverages.data[i].identifier;
								//console.log(request);


								///////////////////////////////////////////////////////////////////////////////////////////////////////////
								// TODO: Remove
								// Testing overwrite
								/*

								if (collection == "Cloudsat"){
									request = "http://demo.v-manip.eox.at/Cloudsat_Reflectivity_2013137113720_0005.tif";
								}

								*/
								///////////////////////////////////////////////////////////////////////////////////////////////////////////

								//if(self.current_product.get("ground_measurements")){
								if(product.get("ground_measurements")){

									$.ajax({
										dataType:'arraybuffer',
										type:'GET',
										dataType: 'xml',
										url: request
									})
									.done(function( xmldata ) {

										var data = xmldata.getElementsByTagName("data");
										var id = xmldata.getElementsByTagName("siteName")[0].textContent;
										var latitude = Number(xmldata.getElementsByTagName("siteLatitude")[0].textContent);
										var longitude = Number(xmldata.getElementsByTagName("siteLongitude")[0].textContent);
										
										var field = xmldata.getElementsByTagName("field")[0].textContent.replace(/ /g,"_");
										//console.log(id, field);
										for (var i = data.length - 1; i >= 0; i--) {
											//console.log(data[i].getElementsByTagName("timeStart")[0].textContent);
											//console.log(data[i].getElementsByTagName("value")[0].textContent);
											
											var obj = {};
											obj['id'] = id;
											obj[field] = Number(data[i].getElementsByTagName("value")[0].textContent);
											obj['timestamp'] = new Date(data[i].getElementsByTagName("timeStart")[0].textContent);
											obj['field'] = field;
											self.special1dData.push(obj);
										}

										var pos = new Cesium.Cartesian3.fromDegrees(longitude, latitude);
										var bil_coll = cur_coll.add(new Cesium.BillboardCollection());
										var icon = pinimage;
										if(self.selectedEntityId == id){
											icon = pinimage_selected;
										}
										var b = bil_coll.add({
											id: id,
											position : pos,
											verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
											image: icon
										});
										self.primitiveMapping[id] = b;
										if(self.selectedEntityId == id){
											self.pickEntity({primitive:b, id:id}, latitude, longitude);
										}
										cur_coll.show = true;

									});
								}else{

									// Check if coverage is already in collection, if not add them
									if(
										!_.find(cur_coll._primitives, function(p){
											return p.cov_id == coverages.data[i].identifier;
										})
									){

										var bbox = bbox;
										var cov_id = coverages.data[i].identifier;
										var plot = self.p_plot;

										if(!stacked){
											// If not stacked just request and create primitves for all coverages
											// Check if selection active
											if(self.bboxsel){
												if(doBoundingBoxesIntersect(self.bboxsel, bbox)){
													deferreds.push(self.loadCoverage(request, bbox, cov_id, range, cur_coll, alpha, [clamp_min, clamp_max], null));
												}
											}else{
												deferreds.push(self.loadCoverage(request, bbox, cov_id, range, cur_coll, alpha, [clamp_min, clamp_max], null));
											}
										}else if(stacked && i == coverages.data.length-1){
											// If the collection is stacked and this is the last element (in time)
											// of the list it means the primitive is not available already and needs to be created
											// or we have found an already created primite and saved it to stacked primitive
											if(self.p_plot.datasetAvailable(cov_id)) {
												self.p_plot.removeDataset(cov_id);
											}
											// Check if selection active
											if(self.bboxsel){
												if(doBoundingBoxesIntersect(self.bboxsel, bbox)){
													deferreds.push(self.loadCoverage(request, bbox, cov_id, range, cur_coll, alpha, [clamp_min, clamp_max], stacked_prim));
													// We need to add it to the stacked list as it will be compared to to see if part of a stack collection
													self.stackedDataset.push(cov_id);
												}
											}else{
												deferreds.push(self.loadCoverage(request, bbox, cov_id, range, cur_coll, alpha, [clamp_min, clamp_max], stacked_prim));
												// We need to add it to the stacked list as it will be compared to to see if part of a stack collection
												self.stackedDataset.push(cov_id);
											}
										}else{
											// We only request the data if it is not already available
											if(!self.p_plot.datasetAvailable(cov_id)) {
												// It is stacked but this is any other coverage where for now we only need the data
												// but do not actually visualize it, so we do not need to create a primitive
												if(self.bboxsel){
													if(doBoundingBoxesIntersect(self.bboxsel, bbox)){
														deferreds.push(self.addCoverage(request, cov_id));
													}
												}else{
													deferreds.push(self.addCoverage(request, cov_id));
												}
											}
										}
									}
								}

							};

							self.downloadTotal = deferreds.length;

							$.when.apply($, deferreds)
								.then(function(){

									if(self.timeseries.length >0){

										self.timeseries = _.filter(self.timeseries, function(obj){ return obj.height != 9.99e+29; });

										for (var i = self.timeseries.length - 1; i >= 0; i--) {
											self.timeseries[i].starttime = new Date(self.timeseries[i].starttime);
											self.timeseries[i].endtime = new Date(self.timeseries[i].endtime);
										}

										$("#pickingresults").show();

										$("#pickingresults").append('<button type="button" id="pickingresultsClose" class="close" style="position: absolute; right:0px; margin-right:5px; margin-top:5px;"><i class="fa fa-times-circle"></i></button>');
										$("#pickingresults").append('<div id="pickingresultcontainer"></div>');

										$('#pickingresultsClose').click(function(){
											self.special1dData = [];
						                	$("#pickingresults").hide();
						                	$("#pickingresults").empty();
						                });

										var args = {
											scatterEl: $('#pickingresultcontainer')[0],
											selection_x: "starttime",
											selection_y: ["height"],
											showDropDownSelection: false,
											parsedData: self.timeseries,
											renderBlocks: true,
											dataRange: self.timeseriesRange,
											margin: {top: 45, right: 120, bottom: 10, left: 50}
										};

										var sp = new scatterPlot(args, function(){
											},
											function (values) {
												//Communicator.mediator.trigger("cesium:highlight:point", [values.Latitude, values.Longitude, values.Radius]);
											}, 
											function(){
												//Communicator.mediator.trigger("cesium:highlight:removeAll");
											},
											function(filter){
												//Communicator.mediator.trigger("download:set:filter", filter);
											}
										);

										sp.loadData(args);
										// Move some things around
										/*$('#download_button').remove();
										$('#pickingresults').find('#save').attr('style','position: absolute; right: 29px; top: 7px');
										$('#pickingresults').find('#grid').attr('style','position: absolute; right: 155px; top: 7px');*/

										$("#pickingresults").append(
											'<a href="javascript:void(0)" id="enlarge" style="position: absolute;top:5px;left:5px">'+
												'<i style="font-size:1.5em;" class="fa fa-expand fa-rotate-90"></i></a>'
											);
										$('#enlarge').click(function (evt) {
											if ($('#pickingresults').hasClass("big")){
												$('#pickingresults').width("30%");
												$('#pickingresults').height("30%");
												$('#pickingresults').resize();
												$('#pickingresults').removeClass("big");
											}else{
												$('#pickingresults').addClass( "big" )
												$('#pickingresults').width("50%");
												$('#pickingresults').height("70%");
												$('#pickingresults').resize();
											}
											
										});

										$("#pickingresults").prepend('<button type="button" id="pickingresultsClose" class="close" style="position: absolute; right:0px; margin-right:5px; margin-top:5px;"><i class="fa fa-times-circle"></i></button>');

										$('#pickingresultsClose').click(function(){
											self.special1dData = [];
						                	$("#pickingresults").hide();
						                	$("#pickingresults").empty();
						                });

										/*var h = self.timeseries[0].data.length;
										var w = self.timeseries.length;
										var timeseriesdata = new Float32Array(h * w);
										for (var i=0; i<h; i++){
											for(var j=0; j<w; j++){
												timeseriesdata[(i*w)+j] = self.timeseries[j].data[i];
											}
										}
										if(self.p_plot.datasetAvailable("timeseries")){
											self.p_plot.removeDataset("timeseries");
										}
										self.p_plot.addDataset("timeseries", timeseriesdata, w, h);
										self.p_plot.setDomain([3.792e+16, 4.949e+18]);
										self.p_plot.setClamp(true,true);
										self.p_plot.renderDataset("timeseries");
										var tmp = self.p_plot.canvas.toDataURL();
										window.open(tmp,'_blank');*/

										self.timeseries = [];

									}else{

										if (stacked){
											var to_play = coverages.data;
											var prim_to_render = cur_coll._primitives[0];
											var play_length = to_play.length;
											var play_index = play_length-1;
											var fps = 15;

											$('#playercontrols').show();
											
											// Remove handlers
											$("#play-button").off();

											$("#play-button").on('click', function () {

													$("#play-button").html('<i class="fa fa-pause"></i>');
										        	// Create a draw loop using requestAnimationFrame. The
													// tick callback function is called for every animation frame.
													function tick() {
														setTimeout(function() {
													        if(self.playback){
													        	Cesium.requestAnimationFrame(tick);
														        play_index = (play_index+1) % play_length;
															  	self.p_plot.renderDataset(to_play[play_index].identifier);
																prim_to_render.appearance.material._textures.image.copyFrom(self.p_plot.canvas);
																prim_to_render.cov_id = to_play[play_index].identifier;
																Communicator.mediator.trigger("date:tick:select", new Date(to_play[play_index].starttime));
																$('#timestamp').show();
																$('#timestamp').text(to_play[play_index].starttime);
													        }

													    }, 100 / fps);

													}

													if (!self.playback){
														self.playback = true;
														tick();
										        	}else{
										        		self.playback = false;
										        		$("#play-button").html('<i class="fa fa-play"></i>');
										        	}

										    	}
										    );

											// Setup back button
											$("#step-back-button").off();

											$("#step-back-button").on('click', function () {
										        play_index = (play_index-1);
										        if(play_index<0)
										        	play_index = play_length-1;
										        play_index = play_index % play_length;
											  	self.p_plot.renderDataset(to_play[play_index].identifier);
												prim_to_render.appearance.material._textures.image.copyFrom(self.p_plot.canvas);
												prim_to_render.cov_id = to_play[play_index].identifier;
												Communicator.mediator.trigger("date:tick:select", new Date(to_play[play_index].starttime));
										    });

										    // Setup forward button
											$("#step-forward-button").off();

											$("#step-forward-button").on('click', function () {
										        play_index = (play_index+1) % play_length;
											  	self.p_plot.renderDataset(to_play[play_index].identifier);
												prim_to_render.appearance.material._textures.image.copyFrom(self.p_plot.canvas);
												prim_to_render.cov_id = to_play[play_index].identifier;
												Communicator.mediator.trigger("date:tick:select", new Date(to_play[play_index].starttime));
										    });

										}
									}

								}).fail(function(){
								    // Probably want to catch failure
								}).always(function(){
								    // Or use always if you want to do the same thing
								    // whether the call succeeds or fails
							});

							if (deferreds.length > 0){
								$('#loadingcontrols').show();
								$('#loadingcontrols').empty();
								$('#loadingcontrols').append(
									'<div class="progress" style="width:30%; margin: auto; margin-bottom:10px;">'+
									  '<div id="progressindicator" class="progress-bar" role="progressbar" aria-valuenow="0"'+
									  'aria-valuemin="0" aria-valuemax="100" style="width:0%;">'+
									  '</div>'+
									'</div>'
								);
								$('#loadingcontrols').append('<button type="button" class="btn btn-default" id="cancel_loading" style="pointer-events: all;">Cancel</button>');
								
								$('#progressindicator').text('0 / '+ deferreds.length);
								$("#cancel_loading").click(function () {
									for (var i = deferreds.length - 1; i >= 0; i--) {
										//console.log('Aborting: '+i);
										deferreds[i].abort();
									}
									$('#loadingcontrols').empty();
									$('#loadingcontrols').hide();
								});
							}

						}, product); // End of done

					}else{
						//this.map.scene.primitives.remove(this.coverages_collections[product.get("views")[0].id]);
						cur_coll.show = false;
					}

            	}


            },


            checkLayerFeatures: function (product, visible) {

				var id = product.get("views")[0].id;

				if(this.features_collection.hasOwnProperty(id)){
            		this.map.scene.primitives.remove(this.features_collection[id]);
            		delete this.features_collection[id];
            	}

            	if(visible){
					var color = product.get("color");
					color = color.substring(1, color.length);

	    			var parameters = product.get("parameters");
	    			var keys = _.keys(parameters);
	    			var band;
					_.each(keys, function(key){
						if(parameters[key].selected)
							band = key;
					});
	    			var style = parameters[band].colorscale;
	    			var outlines = product.get("outlines");
	    			var range = parameters[band].range;
	    			var alpha = product.get("opacity");
	    			var url = product.get("views")[0].urls[0];

	            	var that = this;

	            	$.post( url, Tmpl_retrive_swarm_features({
						//"shc": product.get('shc'),
						"model_ids": this.activeModels.join(),
						"collection_id": id,
						"begin_time": getISODateTimeString(this.begin_time),
						"end_time": getISODateTimeString(this.end_time),
						"band": band,
						"alpha": alpha,
						//"bbox": this.bboxsel[0] +","+ this.bboxsel[1] +","+ this.bboxsel[2] +","+ this.bboxsel[3],
						"style": style,
						"dim_range": (range[0]+","+range[1]),
					}))

					.done(function( data ) {
						Papa.parse(data, {
							header: true,
							dynamicTyping: true,
							complete: function(results) {
								that.createFeatures(results, id, band, alpha)
							}
						});
					});
				}
               
            },

            createFeatures: function (results, identifier, band, alpha){

            	// The feature collection is removed directly when a change happens
            	// because of the asynchronous behavior it can happen that a collection
            	// is added between removing it and adding another one so here we make sure
            	// it is empty before overwriting it, which would lead to a not referenced
            	// collection which is no longer deleted.
            	// I remove it before the response because a direct feedback to the user is important
            	// There is probably a cleaner way to do this
            	if(this.features_collection.hasOwnProperty(identifier)){
            		this.map.scene.primitives.remove(this.features_collection[identifier]);
            		delete this.features_collection[identifier];
            	}

				if(band == "B_NEC"){

					this.features_collection[identifier] = new Cesium.PrimitiveCollection();
					

					_.each(results.data, function(row){

						var arrowmat = 	new Cesium.Material.fromType('PolylineArrow');			
						arrowmat.uniforms.color = Cesium.Color.fromBytes(row.col_r, row.col_g, row.col_b, alpha*255);

						this.features_collection[identifier].add(new Cesium.Primitive({
						    geometryInstances : new Cesium.GeometryInstance({
						        geometry : new Cesium.PolylineGeometry({
						            positions : [
							            new Cesium.Cartesian3(row.pos1_x, row.pos1_y, row.rad1),
							            new Cesium.Cartesian3(row.pos2_x, row.pos2_y, row.rad2)
						            ],
						            width : 5.0,
						            vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
						        })
						    }),
						    //appearance : new Cesium.PolylineColorAppearance()
						    appearance : new Cesium.PolylineMaterialAppearance({
						    	material : arrowmat
						  	})
						}));

					}, this);

					// TODO: Explored increasing performance using color instance attribute
					//  Was not able to make it work with materials, maybe there is a solution
					/*
					var instances = [];
					_.each(results.data, function(row){
						instances.push(
							new Cesium.GeometryInstance({
						        geometry : new Cesium.PolylineGeometry({
						            positions : [
							            new Cesium.Cartesian3(row.pos1_x, row.pos1_y, row.rad1),
							            new Cesium.Cartesian3(row.pos2_x, row.pos2_y, row.rad2)
						            ],
						            width : 5.0,
						            vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
						        }),
						        attributes: {
						        	color: new Cesium.ColorGeometryInstanceAttribute(row.col_r/255, row.col_g/255, row.col_b/255, alpha)
						        }
						    })
					    );	

					}, this);

					this.features_collection[identifier].add(new Cesium.Primitive({
					    geometryInstances : instances,
					    appearance : new Cesium.PolylineColorAppearance()
					}));
					*/


	        		this.map.scene.primitives.add(this.features_collection[identifier]);

				}else{


					this.features_collection[identifier] = new Cesium.PointPrimitiveCollection();

				    _.each(results.data, function(row){
				    	var color = Cesium.Color.fromBytes(row.col_r, row.col_g, row.col_b, alpha*255);
						this.features_collection[identifier].add({
					        position : new Cesium.Cartesian3(row.pos_x, row.pos_y, row.rad),
					        //outlineWidth: 1,
					        //outlineColor: color,
					        //scaleByDistance: new Cesium.NearFarScalar(1.5e2, 10, 15.0e6, 0.5),
					        color : color,
					        pixelSize : 8
					    });

					}, this);

					this.map.scene.primitives.add(this.features_collection[identifier]);

				}


            },


            onLayerRangeChanged: function(layer, range, colorscale){
            	var self = this;

            	globals.products.each(function(product) {

            		if(product.get("download").id==layer){
            			if(product.get("views")[0].protocol == "WCS"){
            				var cur_coll = self.coverages_collections[product.get("views")[0].id];
            				if(cur_coll){
								for (var p=0; p<cur_coll._primitives.length; p++){

									var prim = cur_coll._primitives[p];
									var plot = self.p_plot;
									plot.setDomain(range);
									plot.renderDataset(prim.cov_id);
									prim.appearance.material._textures.image.copyFrom(plot.canvas);

								}
							}
            			}
            		}
            	});

            	if(layer == "Processing results"){
            		for (var p=0; p<self.process_result_collection._primitives.length; p++){

						var prim = self.process_result_collection._primitives[p];
						var plot = self.p_plot;
						plot.setDomain(range);
						plot.renderDataset(prim.cov_id);
						prim.appearance.material._textures.image.copyFrom(plot.canvas);

					}
            	}
            },

            OnLayerParametersChanged: function(layer){
            	var self = this;
            	globals.products.each(function(product) {

            		if(product.get("download").id==layer){

            			var hexcolor = product.get("color");
	                		hexcolor = hexcolor.substring(1, hexcolor.length);
            			var parameters = product.get("parameters");
            			var band;
            			var keys = _.keys(parameters);
						_.each(keys, function(key){
							if(parameters[key].selected)
								band = key;
						});
            			var style = parameters[band].colorscale;
            			var range = parameters[band].range;
            			var clamp_min = defaultFor(parameters[band].clamp_min, false);
            			var clamp_max = defaultFor(parameters[band].clamp_max, false);
            			var outlines = product.get("outlines");
            			var height = product.get("height");

            			var coeff_range = product.get("coefficients_range");

						if(product.get("views")[0].protocol == "CZML"){
							this.checkLayerFeatures(product, product.get("visible"));

	                	}else if(product.get("views")[0].protocol == "WCS"){

	                		var cur_coll = this.coverages_collections[product.get("views")[0].id];

	                		if(cur_coll){
								for (var p=0; p<cur_coll._primitives.length; p++){

									var prim = cur_coll._primitives[p];
									var plot = self.p_plot;
									plot.setDomain(range);
									plot.setColorScale(style);
									plot.setClamp(clamp_min, clamp_max);
									plot.renderDataset(prim.cov_id);
									prim.appearance.material._textures.image.copyFrom(plot.canvas);
									//prim.appearance.material._textures.image.copyFrom(plot.canvas);

								};
							}


	                	}else if(product.get("views")[0].protocol == "WMS"){

	                		if (band == "Fieldlines" ){
								if(product.get("visible")){
									var ces_layer = product.get("ces_layer");
									this.map.scene.imageryLayers.remove(ces_layer, false);

									// When changing height or coefficient range and fieldlienes is selected
									// model would be added multiple times, need to check if model already
									// marked as active and avoid adding it to list
									if (this.activeFL.indexOf(product.get('name'))==-1)
	                    				this.activeFL.push(product.get("download").id);

	                    		}else{
	                    			if (this.activeFL.indexOf(product.get('download').id)!=-1){
                						this.activeFL.splice(this.activeFL.indexOf(product.get('name')), 1);
                					}
	                    		}
	                    		this.checkFieldLines();
							}else{
								if (this.activeFL.indexOf(product.get('name'))!=-1){
            						this.activeFL.splice(this.activeFL.indexOf(product.get('name')), 1);
            					}
            					this.checkFieldLines();
								if(product.get("download").id==layer){
				                	var ces_layer = product.get("ces_layer");

				                	if(product.get("visible")){
				                		ces_layer.show = true;
				                	}

				                	ces_layer.imageryProvider.updateProperties("dim_bands", band);

				                	ces_layer.imageryProvider.updateProperties("dim_range", (range[0]+","+range[1]));

				                	ces_layer.imageryProvider.updateProperties("elevation", height);

				                	if(style)
				                		ces_layer.imageryProvider.updateProperties("styles", style);
				                	if(coeff_range)
					        			ces_layer.imageryProvider.updateProperties("dim_coeff", (coeff_range[0]+","+coeff_range[1]));

				                	if (ces_layer.show){
					            		var index = this.map.scene.imageryLayers.indexOf(ces_layer);
					            		this.map.scene.imageryLayers.remove(ces_layer, false);
					            		this.map.scene.imageryLayers.add(ces_layer, index);
					            	}
					            }
							}
				        }else if (product.get("views")[0].protocol == "WPS"){
							this.checkShc(product, product.get("visible"));
						}
				    }

				    if(layer == "Processing results"){
				    	
            			var parameters = this.result_model.get("parameters");
            			var band;
            			var keys = _.keys(parameters);
						_.each(keys, function(key){
							if(parameters[key].selected)
								band = key;
						});
						var style = parameters[band].colorscale;
						var range = parameters[band].range;
						var clamp_min = defaultFor(parameters[band].clamp_min, false);
						var clamp_max = defaultFor(parameters[band].clamp_max, false);

	            		for (var p=0; p<self.process_result_collection._primitives.length; p++){

							var prim = self.process_result_collection._primitives[p];
							var plot = self.p_plot;
							plot.setColorScale(style);
							plot.setClamp(clamp_min, clamp_max);
							plot.setDomain(range);
							plot.renderDataset(prim.cov_id);
							prim.appearance.material._textures.image.copyFrom(plot.canvas);

						}
	            	}
                    
	            }, this);
            },


			onExportGeoJSON: function() {
				var geojsonstring = this.geojson.write(this.vectorLayer.features, true);

				var blob = new Blob([geojsonstring], {
					type: "text/plain;charset=utf-8"
				});
				saveAs(blob, "selection.geojson");
			},

			onGetGeoJSON: function () {
                return this.geojson.write(this.vectorLayer.features, true);
            },

            onGetMapExtent: function(){
            	return this.getMapExtent();
            },

            getMapExtent: function(){
            	var ellipsoid = this.map.scene.globe.ellipsoid;
            	var c2 = new Cesium.Cartesian2(0, 0);
			    var leftTop = this.map.scene.camera.pickEllipsoid(c2, ellipsoid);
			    c2 = new Cesium.Cartesian2(this.map.scene.canvas.width, this.map.scene.canvas.height);
			    var rightDown = this.map.scene.camera.pickEllipsoid(c2, ellipsoid);

			    if (leftTop != null && rightDown != null) { //ignore jslint
			        leftTop = ellipsoid.cartesianToCartographic(leftTop);
			        rightDown = ellipsoid.cartesianToCartographic(rightDown);
			        return {
			        	left: Cesium.Math.toDegrees(leftTop.longitude),
			        	bottom: Cesium.Math.toDegrees(rightDown.latitude),
			        	right: Cesium.Math.toDegrees(rightDown.longitude),
			        	top: Cesium.Math.toDegrees(leftTop.latitude)
			        };
			    } else {
			        //The sky is visible in 3D
			        // TODO: Not sure what the best way to calculate the extent is when sky/space is visible.
			        //       This method is just an approximation, not actually correct
			        // Try to get center point
			        var center = new Cesium.Cartesian2(this.map.scene.canvas.width/2, this.map.scene.canvas.height/2);
			        center = this.map.scene.camera.pickEllipsoid(center, ellipsoid);
			        if (center != null){
			        	center = ellipsoid.cartesianToCartographic(center);
			        	return {
				        	left: Cesium.Math.toDegrees(center.longitude) - 90,
				        	bottom: Cesium.Math.toDegrees(center.latitude) - 45,
				        	right: Cesium.Math.toDegrees(center.longitude) + 90,
				        	top: Cesium.Math.toDegrees(center.latitude) + 45
				        };
			        }else{
			        	// If everything fails assume whole world is visible which is wrong
			        	return {left: -180, bottom: -90, right: 180, top: 90};
			        }
			    }
            },

            onSelectionActivated: function(arg) {
				this.selectionType = arg.selectionType;

				if(arg.id=='pointSelection'){
					if (arg.active) {
						if(this.bboxSelection){
							this.bboxSelection = false;
							Communicator.mediator.trigger("selection:changed", null);
							this.drawhelper.stopDrawing();
						}
						this.pickingActive = true;
					}
					else{
						this.pickingActive = false;
						this.map.entities.getById("needle").show = false;
						$("#pickingresults").empty();
	                	$("#pickingresults").hide();
					}

				}else if(arg.id=='bboxSelection'){

					if (arg.active) {

					var that = this;
					this.drawhelper.startDrawingRectangle({
	                    callback: function(extent) {
							var bbox = {
								n: Cesium.Math.toDegrees(extent.north),
								e: Cesium.Math.toDegrees(extent.east),
								s: Cesium.Math.toDegrees(extent.south),
								w: Cesium.Math.toDegrees(extent.west)
							}
							Communicator.mediator.trigger("selection:changed", bbox);
							//$('#bb_selection').html('Clear Selection');
	                    }
	                });
				} else {
					Communicator.mediator.trigger("selection:changed", null);
					this.drawhelper.stopDrawing();
					// It seems the drawhelper muted handlers reset to false and 
					// it creates issues in cesium picking for some reason so
					// we deactivate them again
					this.drawhelper._handlersMuted = true;
				}
				}
			},
           

			onSelectionChanged: function(bbox){

				// It seems the drawhelper muted handlers reset to false and 
				// it creates issues in cesium picking for some reason so
				// we deactivate them again
				this.drawhelper._handlersMuted = true;
				
				if(bbox){
					//this.map.scene.primitives.removeAll();
					/*var color = "#6699FF";

					var material = new Cesium.Material.fromType('Color');
					material.uniforms.color = new Cesium.Color.fromCssColorString(color);
					material.uniforms.color.alpha = 0.7;*/

					var e = new Cesium.Rectangle(
						Cesium.Math.toRadians(bbox.w),
						Cesium.Math.toRadians(bbox.s),
						Cesium.Math.toRadians(bbox.e),
						Cesium.Math.toRadians(bbox.n)
					);

			        this.bboxsel = [bbox.s, bbox.w, bbox.n, bbox.e ];

					var rectangle = Cesium.Rectangle.fromDegrees(bbox.w, bbox.s, bbox.e, bbox.n);
					this.extentPrimitive = this.map.entities.add({
						id: 'selectionrectangle',
						rectangle : {
							coordinates : rectangle,
							height: 20000,
							fill : false,
							outline : true,
							outlineColor : Cesium.Color.BLUE,
							outlineWidth: 3
						}
					});

				}else{
					this.bboxsel = null;
					if(this.extentPrimitive){
						this.map.entities.remove(this.extentPrimitive);
						this.process_result_collection.removeAll();
					}
					
				}


			},

			checkFieldLines: function(){
				console.log(this.activeFL);

				if(this.activeFL.length>0 && this.bboxsel){

	            	var url, model_id, color, band, style, range, logarithmic;

	            	globals.products.each(function(product) {
                		if(this.activeFL.indexOf(product.get('name'))!=-1){
                			var name = product.get('name');
                			url = product.get("views")[0].urls[0];
                			model_id = product.get("views")[0].id;
                			color = product.get("color");
	                		color = color.substring(1, color.length);
	            			parameters = product.get("parameters");
	            			band;
							_.each(_.keys(parameters), function(key){
								if(parameters[key].selected)
									band = key;
							});
	            			style = parameters[band].colorscale;
	            			range = parameters[band].range;
	            			logarithmic = parameters[band].logarithmic;

	            			if(this.FL_collection.hasOwnProperty( name )) {
		                		this.map.scene.primitives.remove(this.FL_collection[name]);
		                		delete this.FL_collection[name];
		                	}

		                	var self = this;

		                	$.post( url, Tmpl_get_field_lines({
								//"shc": product.get('shc'),
								"model_ids": model_id,
								"begin_time": getISODateTimeString(this.begin_time),
								"end_time": getISODateTimeString(this.end_time),
								"bbox": this.bboxsel[0] +","+ this.bboxsel[1] +","+ this.bboxsel[2] +","+ this.bboxsel[3],
								"style": style,
								"range_min": range[0],
								"range_max": range[1],
								"log_scale": logarithmic
							}))

							.done(function( data ) {
								Papa.parse(data, {
									header: true,
									dynamicTyping: true,
									//name: name,
									complete: function(results) {
										self.createPrimitives(results, name)
									}
								});
							});



                		}
                	}, this);

                	

	            }else{
	            	_.each(_.keys(this.FL_collection), function(key){
	            		this.map.scene.primitives.remove(this.FL_collection[key]);
                		delete this.FL_collection[key];
	            	}, this);
	            }

				
			},

			onFieldlinesChanged: function(){
				this.checkFieldLines();
			},


			createPrimitives: function(results, name){

				var parseddata = {};

				if(this.FL_collection.hasOwnProperty(name)){
					this.map.scene.primitives.remove(this.FL_collection[name]);
				}

				var instances = [];

				_.each(results.data, function(row){
					if(parseddata.hasOwnProperty(row.id)){
						parseddata[row.id].colors.push(Cesium.Color.fromBytes(row.color_r, row.color_g, row.color_b, 255));
						parseddata[row.id].positions.push(new Cesium.Cartesian3(row.pos_x, row.pos_y, row.pos_z));
					}else{
						parseddata[row.id] = {
							colors:[Cesium.Color.fromBytes(row.color_r, row.color_g, row.color_b, 255)],
							positions:[new Cesium.Cartesian3(row.pos_x, row.pos_y, row.pos_z)]
						};
					}
				});

        		_.each(_.keys(parseddata), function(key){

        			instances.push(
        				new Cesium.GeometryInstance({
					        geometry : new Cesium.PolylineGeometry({
					            positions : parseddata[key].positions,
					            width : 2.0,
					            vertexFormat : Cesium.PolylineColorAppearance.VERTEX_FORMAT,
					            colors : parseddata[key].colors,
					            colorsPerVertex : true
					        })
					    })
        			);

				}, this);

				this.FL_collection[name] = new Cesium.Primitive({
					geometryInstances: instances,
					appearance: new Cesium.PolylineColorAppearance(),
					debugShowBoundingVolume: true
				});
				

        		this.map.scene.primitives.add(this.FL_collection[name]);
				
			},

			onHighlightPoint: function(coords){
				this.billboards.removeAll();
			    var canvas = document.createElement('canvas');
			    canvas.width = 32;
			    canvas.height = 32;
			    var context2D = canvas.getContext('2d');
			    context2D.beginPath();
			    context2D.arc(16, 16, 12, 0, Cesium.Math.TWO_PI, true);
			    context2D.closePath();
			    context2D.strokeStyle = 'rgb(255, 255, 255)';
			    context2D.lineWidth = 3;
			    context2D.stroke();

			    context2D.beginPath();
			    context2D.arc(16, 16, 9, 0, Cesium.Math.TWO_PI, true);
			    context2D.closePath();
			    context2D.strokeStyle = 'rgb(0, 0, 0)';
			    context2D.lineWidth = 3;
			    context2D.stroke();

			    //var billboards = this.map.scene.primitives.add(new Cesium.BillboardCollection());
			    this.billboards.add({
			        imageId : 'custom canvas point',
			        image : canvas,
			        position : Cesium.Cartesian3.fromDegrees(coords[1], coords[0], parseInt(coords[2]-6384100)),
			        radius: coords[2],
			        //color : Cesium.Color.RED,
			        scale : 1
			    });
			    
			},

			onRemoveHighlights: function(){
				this.billboards.removeAll();
			},

			onTimeChange: function (time) {

				var string = getISODateTimeString(time.start) + "/"+ getISODateTimeString(time.end);

				this.begin_time = time.start;
				this.end_time = time.end;
                                        
	            globals.products.each(function(product) {
                    if(product.get("timeSlider")){
                    	product.set("time",string);
                    	var ces_layer = product.get("ces_layer");

                    	if(ces_layer){
	                    	ces_layer.imageryProvider.updateProperties("time", string);
	                    	if (ces_layer.show){
	                    		var index = this.map.scene.imageryLayers.indexOf(ces_layer);
	                    		this.map.scene.imageryLayers.remove(ces_layer, false);
	                    		this.map.scene.imageryLayers.add(ces_layer, index);
	                    	}
	                    }

	                    if(product.get("views")[0].protocol == "CZML"){
	                    	//this.checkLayerFeatures(product, product.get("visible"));
                		}else if (product.get("views")[0].protocol == "WCS"){
			        		this.checkCoverages(product, product.get("visible"));

                		}else if (product.get("views")[0].protocol == "WPS"){

                			if(product.get("visible")){

                				if(product.get('shc') != null){

                					var parameters = product.get("parameters");
		                			var band;
		                			var keys = _.keys(parameters);
									_.each(keys, function(key){
										if(parameters[key].selected)
											band = key;
									});
		                			var style = parameters[band].colorscale;
		                			var range = parameters[band].range;


                					var imageURI;
									var self = this;
									var imagelayer;
									//product.set("visible", true);

									var ces_layer = product.get("ces_layer");
									var index = this.map.scene.imageryLayers.indexOf(ces_layer);
									
									var url = product.get("views")[0].urls[0];

									$.post( url, Tmpl_eval_model({
										"model": "Custom_Model",
										"variable": band,
										"begin_time": getISODateTimeString(this.begin_time),
										"end_time": getISODateTimeString(this.end_time),
										"elevation": product.get("height"),
										"shc": product.get('shc'),
										"height": 512,
										"width": 1024,
										"style": style,
										"range_min": range[0],
										"range_max": range[1],
									}))

										.done(function( data ) {	
											self.map.scene.imageryLayers.remove(ces_layer);									
										    imageURI = "data:image/gif;base64,"+data;
										    var imagelayer = new Cesium.SingleTileImageryProvider({url: imageURI});
											ces_layer = self.map.scene.imageryLayers.addImageryProvider(imagelayer, index);
											product.set("ces_layer", ces_layer);
										});
                				}
							}
						}
                    }
	            }, this);


				this.checkFieldLines();
            },

            onSetExtent: function(bbox) {
            	//this.map.zoomToExtent(bbox);
            	/*this.map.scene.camera.flyToRectangle({
            		destination: Cesium.Rectangle.fromDegrees(bbox[0], bbox[1], bbox[2], bbox[3])
            	});*/

            },

            onChangeZoom: function (zoom) {
            	if(zoom<0){
					this.map.scene.camera.zoomOut(Math.abs(zoom));
            	}else{
            		this.map.scene.camera.zoomIn(Math.abs(zoom));
            	}
            },

			onClose: function(){
				/*this.stopListening();
				this.remove();
				this.unbind();*/
				this.isClosed = true;
			},

			isModelCompatible: function(model) {
				var protocol = model.get('view').protocol;
				if (protocol === 'WMS' || protocol === 'WMTS') {
					return true;
				}
				return false;
			},
			isEventListenedTo: function(eventName) {
			  return !!this._events[eventName];
			},

			onLoadImage: function(url, selection_bounds){

				/*proj4326 = new OpenLayers.Projection("EPSG:4326");
				bounds = selection_bounds;

				bounds.transform(proj4326, this.map.getProjectionObject());
				this.diff_overlay = new OpenLayers.Layer.Image('diff_overlay', url, bounds, new OpenLayers.Size(3400, 1600), {
				 'isBaseLayer': false,
				 'alwaysInRange': true
				});
				this.map.addLayer(this.diff_overlay);
				this.diffimage_index = this.map.getLayerIndex(this.diff_overlay);
				console.log("image "+this.diffimage_index);

				var minzindex = 9999;

				_.each(this.overlay_layers, function(layer){
					 var zindex = layer.getZIndex();
					 if (zindex < minzindex)
					 	minzindex = zindex;
				}.bind(this));

				this.diff_overlay.setZIndex(minzindex-1);*/
	
			},

			onSaveImage: function(){
				this.map.canvas.toBlob(function(blob) {
					saveAs(blob, "TAMP_Screenshot.jpg");
				}, "image/jpeg");
			},

			onClearImage: function(){
				if(this.diff_overlay){
					this.map.removeLayer(this.diff_overlay);
					this.diff_overlay = null;
				}
			},

			handleTick: function(clock) {
				// TODO: Cesium does not provide a method to know when the camera has stopped, 
				//       this approach is not ideal, when the movement mantains inertia difference 
				//       values are very low and there are comparison errors.
			    var camera = this.map.scene.camera;

			    if (!this.camera_is_moving){
			    	if (Math.abs(this.camera_last_position.x - camera.position.x) > 10000 &&
			    		Math.abs(this.camera_last_position.y - camera.position.y) > 10000 &&
			    		Math.abs(this.camera_last_position.z - camera.position.z) > 10000 ){

			    		this.camera_is_moving = true;
			    	}
			    }else{
			    	if (Math.abs(this.camera_last_position.x - camera.position.x) < 10000 &&
			    		Math.abs(this.camera_last_position.y - camera.position.y) < 10000 &&
			    		Math.abs(this.camera_last_position.z - camera.position.z) < 10000 ){

			    		this.camera_is_moving = false;
			    		Communicator.mediator.trigger("map:position:change", this.getMapExtent() );
			    	}else{
			    		this.camera_last_position.x = camera.position.x;
			    		this.camera_last_position.y = camera.position.y;
			    		this.camera_last_position.z = camera.position.z;
			    	}
			    }
			},

			toggleDebug: function(){
				this.map.scene.debugShowFramesPerSecond = !this.map.scene.debugShowFramesPerSecond;
			}

		});

		return CesiumView;
	});