module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      compileCore: {
        options: {
        strictMath: true,
        sourceMap: true,
        outputSourceFiles: true,
        sourceMapURL: "<%= pkg.name %>.css.map",
        sourceMapFilename: "<%= pkg.assetsDirectory %>/<%= pkg.name %>.css.map"
        },
        files: {
          "<%= pkg.assetsDirectory %>/<%= pkg.name %>.css": "<%= pkg.devLessDirectory %>/<%= pkg.name %>.less"
        }
      }
    },
    csscomb: {
      options: {
        config: "<%= pkg.devLessDirectory %>/.csscomb.json"
      },
      build: {
        files: {
          "<%= pkg.assetsDirectory %>/<%= pkg.name %>.css": "<%= pkg.assetsDirectory %>/<%= pkg.name %>.css"
        }
      }
    },
    cssmin: {
      combine : {
        files: {
          "<%= pkg.assetsDirectory %>/comb.css" : ["<%= pkg.devCssDirectory %>/*.css"],
          "<%= pkg.assetsDirectory %>/vrmoutput.min.css" : ["<%= pkg.assetsDirectory %>/comb.css", "<%= pkg.appDirectory %>/lib/bootstrap/dist/css/bootstrap.css", "<%= pkg.assetsDirectory %>/vrm.css", "<%= pkg.appDirectory %>/lib/angular-carousel/dist/angular-carousel.css"]
        }
      }
    },
    concat: {
      js: {
        src: [
          "build/js/vrm.js"
        ],
        dest: "build/js/vrm.js"
      },
      css: {
        src: [
          "<%= pkg.devCssDirectory %>/style.css", "<%= pkg.appDirectory %>/lib/bootstrap/dist/css/bootstrap.css"
        ],
        dest: "<%= pkg.assetsDirectory %>/vrmoutput.min.css"
      }
    },
    uglify: {
      main: {
        options: {
          sourceMap : true,
          sourceMapIncludeSources: true,
          sourceMapIn : 'build/js/vrm.js.map'
        },
        files: {
          "build/js/vrm.js": "<%= concat.js.dest %>"
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: "<%= pkg.devImageDirectory %>/", dest: "<%= pkg.assetsDirectory %>/", flatten: false, src: "**" },
          { expand: true, src: "websrc/views/*", dest: "build/views/", flatten: true },
          { expand: true, src: "websrc/index.html", dest: "build/", flatten: true },
          { expand: true, cwd: "<%= pkg.devFontDirectory %>/",dest: "<%= pkg.assetsDirectory %>", flatten:false, src:"**"},
          { expand: true, src: "web.xml", dest: "build/WEB-INF/", flatten: true },
          { expand: true, cwd: "<%= pkg.appDirectory %>/lib/bootstrap/dist/fonts/", src: "**/*", dest: "build/assets/glyphicons/"},
          { expand: true, src: "websrc/health_check", dest: "build/", flatten: true },
          { expand: true, src: "build/js/vrm.map", dest: "build/map/", flatten: true },
          { expand: true, src: "build/js/vrm.js.map", dest: "build/map/", flatten: true },
          { expand: true, src: "akamai/.htaccess", dest: "build/map/", flatten: true },
          { expand: true, src: "websrc/style/font-css/font-assets.css", dest: "build/assets/", flatten: true },
          { expand: true, src: "akamai/akamai-sureroute-test-object.htm", dest: "build/_akamai", flatten: true },
          { expand: true, src: "websrc/sitemap.xml", dest: "build/", flatten: true },
          { expand: true, src: "snapshots/*", dest: "build/snapshots/", flatten: true }
        ]
      },
      robot : {
        files: [
          { expand: true, src: "websrc/robots.txt", dest: "build/", flatten: true },
        ]
      },
      dev: {
        files: [
          { expand: true, cwd: "<%= pkg.appDirectory %>/", src: "**/*", dest: "build/app/"},
          { expand: true, cwd: "<%= pkg.appDirectory %>/lib/bootstrap/dist/fonts/", src: "**/*", dest: "build/fonts"}
        ]
      }
    },
    requirejs: {
      compile : {
        options : {
          baseUrl : "<%= pkg.appDirectory %>",
          name : "config",
          mainConfigFile : "<%= pkg.appDirectory %>/config.js",
          out : "build/js/vrm.js",
          optimize : "none",
          inlineText : true,
          findNestedDependencies : true,
          "generateSourceMaps": true,
          paths : {
              requireLib : "lib/requirejs/require",
              vrmconfig:"empty:"
          },
          include : [
              "requireLib"
          ]
        }
      }
    },
    karma : {
      unit: {
        configFile: 'websrc/karma.conf.js',
        
      }
    },
    "regex-replace": {
      prod : {
        src: ["build/index.html"],
        actions: [
          {
            search: "<!--start PROD imports-->",
            replace: ""
          },
          {
            search: "<!--end PROD imports-->",
            replace: ""
          },
          {
            search: "<!--start DEV imports-->(.*?(\n))+.*?<!--end DEV imports-->",
            replace: ""
          }
        ]
      },
      map : {
        src: ["build/js/vrm.js"],
        actions: [
          {
            search: "sourceMappingURL=vrm.map",
            replace: "sourceMappingURL= ../map/vrm.map"
          }
        ]
      },
      mapsource : {
        src: ["build/map/vrm.map"],
        actions : [
          {
            search : "vrm.js",
            replace : "../js/vrm.js"
          }
        ]
      },
      dev: {
        src: ["build/index.html"],
        actions: [
          {
            search: "<!--start DEV imports-->",
            replace: ""
          },
          {
            search: "<!--end DEV imports-->",
            replace: ""
          },
          {
            search: "<!--start PROD imports-->(.*?(\n))+.*?<!--end PROD imports-->",
            replace: ""
          }
        ]
      }
    },
    htmlmin: {
      build: {
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          'build/index.html': 'build/index.html',     
        }
      }
    },
    ngconstant: {
      options: {
        name: "vrmconfig",
        wrap: "\"use strict\";\n\n{%= __ngModule %}",
        space: "  "
      },
      production: {
        options: {
          dest: "<%= pkg.appDirectory %>/vrmconfig.js"
        },
        constants: {
          environment: "production",
          serviceurl: "http://vrm.dev-be.walmart.com/vrm-app/services/rest/vrm/"
        }
      },
      stage: {
        options: {
            dest: "<%= pkg.appDirectory %>/vrmconfig.js"
        },
        constants: {
            environment: "stage",
            serviceurl: "http://qeserver.mockserver.qa.walmart.com:8080/wiremock/"
        }
      },
      qa: {
        options: {
            dest: "<%= pkg.appDirectory %>/vrmconfig.js"
        },
        constants: {
            environment: "qa",
            serviceurl: "http://qeserver.mockserver.qa.walmart.com:8080/wiremock/"
        }
      },
      development: {
        options: {
            dest: "<%= pkg.appDirectory %>/vrmconfig.js"
        },
        constants: {
            environment: "development",
            serviceurl: "http://vrm.dev-be.walmart.com/vrm-app/services/rest/vrm/"
        }
      }
    },

    clean: {
      build: ["websrc/.tmp"],
      build_css : ["websrc/build_output/"],
      release: ["build"],
      map:["build/js/vrm.js.map", "build/js/vrm.map"]
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("build-less", ["less","csscomb","cssmin"])
  grunt.registerTask("build-prod",["clean:release", "requirejs:compile", "concat:js","build-less", "uglify", "copy:main", "clean:map", "copy:robot", "regex-replace:prod", "regex-replace:map",
    "regex-replace:mapsource", "htmlmin:build", "clean:build"]);
  grunt.registerTask("build",["clean:release","clean:build_css", "concat:js", "build-less", "copy:main", "copy:dev", "copy:robot", "regex-replace:dev", "htmlmin:build", "clean:build"]);
  grunt.registerTask("cleanup", ["clean:release"]);
  grunt.registerTask("watch:compass", ["watch"]);

};
