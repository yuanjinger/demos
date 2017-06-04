module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat:{
      web:{
        files:{
          'dist/main.js':['hello.js','script.js']
        }
      }
    },
    uglify:{
      web:{
        files:{
          'dist/main.min.js':['dist/main.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat','uglify']);
};
