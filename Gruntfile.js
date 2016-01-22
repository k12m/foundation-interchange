module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-uglify');	

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			target: {
				files: {
					'dist/foundation-interchange.min.css' : 'foundation-interchange/css/foundation-interchange.css'
				}
			}
		},
		
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
				sourceMap: true
			},
			dist: {
				src: [
						'foundation-interchange/js/foundation.js',
						'foundation-interchange/js/foundation.interchange.js'
					],
				dest: 'dist/foundation-interchange.js',
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
			},
			my_target: {
				files: {
					'dist/foundation-interchange.min.js' : 'dist/foundation-interchange.js'
				}
			}
		}
		
	});
	grunt.registerTask('default', ['cssmin','concat','uglify']);
}