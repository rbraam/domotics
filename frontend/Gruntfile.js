module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: true
            },
            build: {
                src: 'src/js/**/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            css: {
                files:  ['<%= jshint.files %>'],
                tasks: ['sass:dev']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }
        },
        jshint: {
            // define the files to lint
            files: [
                'gruntfile.js',
                'src/js/*.js',
                'src/js/voiceListeners/*.js',
                'src/js/speakers/*.js',
                'tests/**/*.js'
            ],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        jasmine: {
            domotics: {
                src: ['src/js/voiceListeners/*.js',
                    'src/js/speakers/*.js',
                    'src/app.js'],
                options: {
                    specs: 'tests/*.js'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: ''
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['jshint','jasmine','uglify','connect','watch']);
    grunt.registerTask('build', ['jshint','jasmine:domotics:build','uglify']);

};