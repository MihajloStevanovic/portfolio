module.exports = function(grunt) {

  grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: [{
        expand: true,
        cwd: 'scss',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      files: ['**/*.scss'],
      tasks: ['sass']
    },
    scripts: {
      files: ['**/*.js']
    },
    html: {
      files: ['**/*.html']
    }
  },
  browserSync: {
    dev: {
      bsFiles: {
        src : [
          '**/*.css',
          '**/*.html',
          '**/*.js'
        ]
      },
      options: {
        watchTask: true,
        server: './'
      }
    }
  },
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');

grunt.registerTask('default', ['sass','browserSync','watch']);

};