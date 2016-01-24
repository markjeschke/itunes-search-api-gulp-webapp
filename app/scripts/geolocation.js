// Detect whether your machine supports a specific feature.
// Check Modernizr's list at: http://modernizr.github.io/Modernizr/test
// Geolocation

'use strict';
var Modernizr;
function success(position) {
	console.log('Latitude: ' + position.coords.longitude);
	console.log('Longitude: ' + position.coords.latitude);
}
function fail(msg) {
	msg = 'Can\'t access your location.';
	console.log(msg.code);
}
if (Modernizr.geolocation) {
	console.log('geolocation is supported');
	navigator.geolocation.getCurrentPosition(success, fail);
	console.log('Getting position...');
} else {
	console.log('geolocation is not supported');
}
