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

//# sourceMappingURL=app.js.map

