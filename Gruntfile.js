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
          src: ['README.md'],
          dest: 'README.html'
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
  
};
