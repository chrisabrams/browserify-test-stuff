"use strict"

module.exports = (grunt) ->

  require("matchdep").filterDev("grunt-*").forEach grunt.loadNpmTasks

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    browserify:
      app:
        files:
          'app.js': [
            'app/index.js'
          ]
        options:
          browserifyOptions:
            fullPaths: true
          bundleOptions:
            debug: true
          external: [
            'jquery'
            'underscore'
            'backbone'
          ]
            
      vendor:
        files: 'vendor.js': 'app/vendor.js'
        options:
          browserifyOptions:
            fullPaths: true
          bundleOptions:
            debug: false
          alias: [
            './node_modules/jquery/dist/jquery.js:jquery'
            './node_modules/underscore/underscore.js:underscore'
            './node_modules/backbone/backbone.js:backbone'
          ]
          external: null

    cut:
      main:
        files:
          'app.js': 'app.js'

  grunt.registerTask 'default', ['browserify', 'cut']
