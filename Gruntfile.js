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
  
  });
  grunt.loadNpmTasks('grunt-md2html');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default','Default Grunt Task Runner',function(){
    grunt.task.run(['connect','md2html','watch']);
  });
  
};
