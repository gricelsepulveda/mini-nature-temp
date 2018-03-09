module.exports = function(grunt) {
  grunt.initConfig({
    slim: {                    
      dist: {   
        options: {                   
          pretty: true
        }, 
        files: [{
          expand: true,
          cwd: 'src/views',
          src: ['{,*/}*.slim'],
          dest: 'dist/views',
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          //expand: true,
          noCache: true,
          compass: true,
          style: 'compressed',
          sourcemap: 'none',
          cwd: 'src/styles/',
          src: ['*.scss'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'dist/styles/*.css'
      }
    },
    jshint: {
      files: 'src/scripts/*.js',
      options: {
        reporterOutput: "",
        globals: {
          jQuery: true
        },
        ignores: 'src/scripts/jquery-3.3.1.js',
      }
    },
    uglify: {
      build: {
        files: [{
            expand: true,
            src: ['*.js'],
            cwd: 'src/scripts',
            dest: 'dist/scripts',
            rename: function (dest, src) {
              return dest + '/' + src.replace('.js', '.min.js');
            }
        }]
      }
    },
    'http-server': {
      'dev': {
        root: './dist/',
        port: 8282,
        host: 'localhost',
        cache: 1,
        showDir: true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true,
        openBrowser: true,
      }
    },
    watch: {
      options: {
        livereload: true,
        host: 'localhost'
      },
      sass: {
        files: ['src/styles/*.scss'],
        tasks: ['sass'],
      },
      slim: {
        files: ['src/views/*.slim'],
        tasks: ['slim'],
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['slim', 'sass', 'postcss', 'http-server', 'uglify','watch']);
};