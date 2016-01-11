(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	'use strict';

	var one = require('./module_one.js'),
		two = require('./module_two.js');

	one.log();
	two.log();
})();

},{"./module_one.js":2,"./module_two.js":3}],2:[function(require,module,exports){
(function() {
	'use strict';

	module.exports = {
		log: function() {
			console.log('module one working!');
		}
	};
})();
},{}],3:[function(require,module,exports){
(function() {
	'use strict';

	module.exports = {
		log: function() {
			console.log('module two working!');
		}
	};
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9tb2R1bGVfb25lLmpzIiwianMvbW9kdWxlX3R3by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIG9uZSA9IHJlcXVpcmUoJy4vbW9kdWxlX29uZS5qcycpLFxuXHRcdHR3byA9IHJlcXVpcmUoJy4vbW9kdWxlX3R3by5qcycpO1xuXG5cdG9uZS5sb2coKTtcblx0dHdvLmxvZygpO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHRcdGxvZzogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbW9kdWxlIG9uZSB3b3JraW5nIScpO1xuXHRcdH1cblx0fTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdFx0bG9nOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdtb2R1bGUgdHdvIHdvcmtpbmchJyk7XG5cdFx0fVxuXHR9O1xufSkoKTsiXX0=
