/**
 * Created by Shin on 29/10/2016.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['libs/**/*js']
        },
        watch: {
            files: ['libs/**/*js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};