/*!
 *  Gruntfile.js configuration
 */

'use strict';

module.exports = function ( grunt ) {

	/*
	 * Dynamically load the npm tasks
	 */
	require( 'matchdep' ).filterDev('grunt-*').forEach( grunt.loadNpmTasks );

	/*
	 * Grunt init
	 */
	grunt.initConfig({

		/*
		 * Grunt JSON for project
		 */
		pkg: grunt.file.readJSON( 'package.json' ),

		project: {
			name: 'nofi'
		},

		/*
		 * Credit banner
		 */
		tag: {
			banner: "/*!\n" +
					" *  <%= pkg.name %> v<%= pkg.version %>\n" +
					" *  <%= pkg.description %>\n" +
					" *  Project: <%= pkg.homepage %>\n" +
					" *  by <%= pkg.author.name %>: <%= pkg.author.url %>\n" +
					" *\n" +
					" *  Copyright <%= pkg.year %>." +
					" <%= pkg.licenses[0].type %> licensed.\n" +
					" */\n"
		},

		/*
		 * Concat
		 */
		concat: {
			dist: {
				src: ["src/<%= project.name %>.js"],
				dest: "dist/<%= project.name %>.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		},

		/*
		 * jsHint
		 */
		jshint: {
			files: ["src/<%= project.name %>.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		/*
		 * UglifyJS
		 */
		uglify: {
			files: {
				src: ["dist/<%= project.name %>.js"],
				dest: "dist/<%= project.name %>.min.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		}

	});

	/*
	 * Register tasks
	 */
	grunt.registerTask("default", [
		"jshint",
		"concat",
		"uglify"
	]);
	grunt.registerTask("travis", ["jshint"]);

};
