/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"wrobo/test-wrobo-project/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});