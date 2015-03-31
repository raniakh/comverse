module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  connect: {
    server: {
      options: {
        port:8080,
		    protocol:'http',
        base: '.',
		    hostname:'localhost',
        keepalive: true
		
      }
    }
  },
  // Project settings
  yeoman: {
    // Configurable paths
    app: 'app',
    dist: 'dist'
  },
     md2html: {
      one_file: {
        options: {},
        files: [{
          src: ['index.md'],
          dest: 'index.html'
        }]
      }
    },
    watch: {
  scripts: {
    files: ['*.md'],
    tasks: ['md2html'],
    options: {
      spawn: false,
    }
  }
},
validation: {
      options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
      },
      files: {
        src: ['<%= yeoman.app %>/*.html']
      }
    }
  
  });
  grunt.loadNpmTasks('grunt-md2html');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default','Default Grunt Task Runner',function(){
    grunt.task.run(['connect','md2html','watch']);
  });
  
};
