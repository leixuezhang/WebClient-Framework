'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'


module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-connect-proxy');
    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };


    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.app %>/scripts/config.json',
                    '<%= yeoman.app %>/templates/{,*/}*.hbs',
                    '<%= yeoman.app %>/scripts/vendor/vmanip-core/*.js',
                    '<%= yeoman.app %>/scripts/vendor/rectangularboxviewer/*.js'
                ]
            }
        },
        docco: {
            docs: {
                src: ['readme.md','<%= yeoman.app %>/scripts/{,*/}*.js', '!<%= yeoman.app %>/scripts/vendor/{,*/}*.js'],
                options: {
                    layout: 'linear',
                    css: 'docco.css',
                    output: 'docs/'
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            proxies: [{
                context: '/vires00',
                host: 'vires2.eox.at',
                /*host: 'localhost',
                port: 8001,
                rewrite: {
                    '^/vires00': ''
                },*/
                https: false,
                changeOrigin: true,
                xforward: false
            }],            
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            proxySnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/fonts',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: yeomanConfig.app + '/scripts',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= yeoman.dist %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%= yeoman.app %>/styles/{,*/}*.css'
            //         ]
            //     }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        uglify : {
            dist : {
                files: [
                {
                  expand: true,     // Enable dynamic expansion.
                  cwd: '<%= yeoman.app %>/scripts',      // Src matches are relative to this path.
                  src: ['**/*.js'], // Actual pattern(s) to match.
                  dest: '<%= yeoman.dist %>/scripts/',   // Destination path prefix.
                  //ext: '.js',   // Dest filepaths will have this extension.
                  //ext modifies file names if there is a point in them
                },
              ]
            }
        },

        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    // If new bower components are installed they have to be added to this list
                    src: [
                        'bower_components/requirejs/require.js',
                        'bower_components/jquery/jquery.min.js',
                        'bower_components/jquery/jquery.min.map',
                        'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                        "bower_components/jquery-ui/themes/smoothness/jquery-ui.min.css",
                        'bower_components/jquery-ui/ui/minified/jquery-ui.slider.min.js',
                        'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js',
                        'bower_components/backbone-amd/backbone-min.js',
                        'bower_components/backbone-amd/backbone-min.map',
                        'bower_components/underscore-amd/underscore-min.js',
                        'bower_components/d3/d3.min.js',
                        'bower_components/nvd3/nv.d3.min.js',
                        'bower_components/d3.TimeSlider/d3.timeslider.min.js',
                        'bower_components/d3.TimeSlider/d3.timeslider.plugins.min.js',
                        'bower_components/libcoverage/libcoverage.min.js',
                        'bower_components/FileSaver.js/FileSaver.min.js',
                        'bower_components/canvas-toBlob.js/canvas-toBlob.js',
                        'bower_components/Blob.js/Blob.js',
                        'bower_components/backbone.marionette/lib/core/amd/backbone.marionette.min.js',
                        'bower_components/backbone.wreqr/lib/amd/backbone.wreqr.min.js',
                        'bower_components/backbone.babysitter/lib/amd/backbone.babysitter.min.js',
                        'bower_components/requirejs-text/text.js',
                        'bower_components/require-handlebars-plugin/Handlebars.js',
                        'bower_components/require-handlebars-plugin/hbs/i18nprecompile.js',
                        'bower_components/require-handlebars-plugin/hbs/json2.js',
                        'bower_components/require-handlebars-plugin/hbs.js',
                        'bower_components/backbone.marionette.handlebars/backbone.marionette.handlebars.min.js',
                        'bower_components/bootstrap/dist/*/*',
                        'bower_components/font-awesome/css/*',
                        'bower_components/lm.js/lm.js',
                        'bower_components/Keypress/keypress.js',
                        'bower_components/d3.Graphs/lib/scripts/av.min.js',
                        'bower_components/cesium/Build/Cesium/**',
                        'bower_components/papaparse/papaparse.min.js',
                        'bower_components/plotty/dist/plotty.min.js',
						'bower_components/geotiffjs/dist/geotiff.min.js',
                        'scripts/vendor/**',
                    ]
                },{
                    expand: true,
                    flatten: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>/fonts/',
                    src: [
                        'bower_components/*/fonts/*',
                    ]
                },{
                    expand: true,
                    flatten: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>/images/',
                    src: [
                        'bower_components/*/images/*',
                        'bower_components/*/img/*',
                    ]
                },{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'scripts/*.json'
                    ]
                },{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'templates/**'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }, {
                    expand: true,
                    flatten: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>/styles/images',
                    src: [
                        'bower_components/jquery-ui/themes/smoothness/images/*'
                    ]
                }]
            }
        },
        replace: {
          dist: {
            src: [
                '<%= yeoman.dist %>/bower_components/jquery/jquery.min.js',
                '<%= yeoman.dist %>/bower_components/backbone-amd/backbone-min.js',
                '<%= yeoman.dist %>/bower_components/require-handlebars-plugin/hbs.js',
                '<%= yeoman.dist %>/bower_components/cesium/Build/Cesium/Cesium.js'
            ],
            overwrite: true,
            replacements: [
                {
                  from: '//@',
                  to: '//#'
                },
                {
                  from: /r\(\"Shaders\/PointPrimitiveCollectionFS\"\,\[\]\,function\(\).*\}\)/g ,
                  to: 'r("Shaders/PointPrimitiveCollectionFS",[],function(){"use strict";return"#ifdef GL_EXT_frag_depth\\n#extension GL_EXT_frag_depth : enable\\n#endif\\nvarying vec4 v_color;\\nvarying vec4 v_outlineColor;\\nvarying float v_innerPercent;\\nvarying float v_pixelDistance;\\n#ifdef RENDER_FOR_PICK\\nvarying vec4 v_pickColor;\\n#endif\\nvoid main()\\n{\\nfloat distanceToCenter = length(gl_PointCoord - vec2(0.5));\\nfloat maxDistance = max(0.0, 0.5 - v_pixelDistance);\\nfloat wholeAlpha = 1.0 - smoothstep(maxDistance, 0.5, distanceToCenter);\\nfloat innerAlpha = 1.0 - smoothstep(maxDistance * v_innerPercent, 0.5 * v_innerPercent, distanceToCenter);\\nvec4 color = mix(v_outlineColor, v_color, innerAlpha);\\ncolor.a *= wholeAlpha;\\nif (color.a < 0.005)\\n{\\ndiscard;\\n}\\n#ifdef GL_EXT_frag_depth\\nfloat z = gl_FragCoord.z;\\ngl_FragDepthEXT = z + ((1.0 - z) * (1.0 - wholeAlpha));\\n#endif\\n#ifdef RENDER_FOR_PICK\\ngl_FragColor = v_pickColor;\\n#else\\ngl_FragColor = color;\\n#endif\\n}"})'
                }
            ],
            variables:{

            }

          }
        },
        concurrent: {
            server: [
                'compass',
                'coffee:dist'
            ],
            test: [
                'coffee'
            ],
            dist: [
                'coffee',
                'compass',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                //rjsConfig: '<%= yeoman.app %>/scripts/main.js'
                rjsConfig: '<%= yeoman.app %>/scripts/init.js'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'configureProxies',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'replace',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
