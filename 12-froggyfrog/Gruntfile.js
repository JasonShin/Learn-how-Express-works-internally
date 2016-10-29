/**
 * Created by Shin on 29/10/2016.
 */

module.exports = function() {
    grunt.initConfig({
        jshint: {
            files: ['libs/**/*js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};