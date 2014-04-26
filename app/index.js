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
