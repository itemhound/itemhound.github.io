module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      my_target: {
        files : [{
          expand: true,
          cwd: 'public/',
          src: '**/*.js',
          dest: 'public/'
        }]
      },
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    // imagemin: {
    //   png: {
    //     options: {
    //       optimizationLevel: 7,
    //       progressive: true,
    //       pngquant: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'public/images/',
    //       src: ['**/*.{png,gif}'],
    //       dest: 'public/images/'
    //     }]
    //   }
    // },
    // img: {
    //   task4: {
    //     src: 'public/images'
    //   }
    // },
    // imgcompress: {
    //   options: {
    //     optimizationLevel: 3,
    //     progressive: true,
    //     recurse: true
    //   },
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'public/images',
    //       src: '**/*',
    //       dest: 'public/images'
    //     }]
    //   }
    // },
    cssmin: {
      minify : {
        expand: true,
        cwd: 'public/goorahna/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'public/goorahna/css/'
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'public/home/css/',
        src: ['**/*'],
        dest: 'public/home/css/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-img');
  // grunt.loadNpmTasks('grunt-imgcompress');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', /*'imagemin','img','imgcompress',*/ 'compress', 'cssmin']);

};