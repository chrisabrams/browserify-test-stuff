(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/abrams/Projects/btest/app/index.js":[function(require,module,exports){
var $        = require('jquery')
var _        = require('underscore')
var Backbone = require('backbone')
Backbone.$   = $

$(document).ready(function() {

  var SampleView = Backbone.View.extend({
    className: 'sup',
    el: 'body',

    initialize: function() {
      console.log("fired!")
      throw new Error('fuck')
      console.log("nope :(")
    }
  });

  new SampleView()

});

},{"backbone":"5kFNoY","jquery":"HlZQrA","underscore":"ZKusGn"}]},{},["/Users/abrams/Projects/btest/app/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2J0ZXN0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2J0ZXN0L2FwcC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxudmFyIF8gICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpXG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpXG5CYWNrYm9uZS4kICAgPSAkXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciBTYW1wbGVWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZTogJ3N1cCcsXG4gICAgZWw6ICdib2R5JyxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJmaXJlZCFcIilcbiAgICAgIHRocm93IG5ldyBFcnJvcignZnVjaycpXG4gICAgICBjb25zb2xlLmxvZyhcIm5vcGUgOihcIilcbiAgICB9XG4gIH0pO1xuXG4gIG5ldyBTYW1wbGVWaWV3KClcblxufSk7XG4iXX0=
