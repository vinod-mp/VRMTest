var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/',
  paths : {
    angular: 'lib/angular/angular',
    angularResource: 'lib/angular-resource/angular-resource',
    angularUIRouter: 'lib/angular-ui-router/release/angular-ui-router',
    domReady: 'lib/requirejs-domready/domReady',
    jQuery: 'lib/jquery/dist/jquery',
    async: 'lib/requirejs-plugins/src/async',
    select2: 'lib/select2/select2',
    jQueryuitouchpunch: 'lib/jquery-ui-touch-punch/jquery.ui.touch-punch',
    lodash: 'lib/lodash/dist/lodash',
    respond: 'lib/respond/dest/respond.src',
    typeahead: 'lib/typeahead.js/dist/typeahead.bundle',
    tagsinput: 'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput',
    bootstrap_tagsinput: 'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular',
    ui_bootstrap: 'lib/angular-bootstrap/ui-bootstrap-tpls',
    ui_select2: 'lib/angular-ui-select2/src/select2',
    jasmine: 'lib/jasmine/lib/jasmine-core', 
    angular_mocks: 'lib/angular-mocks/angular-mocks',
    httpconfig: 'httpconfig',
    truncate: 'lib/angularjs-truncate/src/truncate',
    'views': '../views'
 },
    
  shim: {
    angular: {
      deps: ['jQuery'],
      exports: 'angular'
    },
    moment: {
      exports: 'moment'
    },
    angularmomentjs: {
      deps: ['moment', 'angular'],
      exports: 'angularmomentjs'
    },
    angular_mocks : {
      deps:["angular"]
    },
    angularResource: {
      deps: ['angular']
    },
    select2: {
      deps: ['jQuery'],
      exports: 'select2'
    },
    ui_select2: {
      deps: ['jQuery', 'angular', 'select2']
    },
    toyouconfig : {
      deps:['angular']
    },
    httpconfig : {
      deps:['angular']
    },
    angularUIRouter: {
      deps: ['angular']
    },
    jQuery: {
      exports: '$'
    },
    jqueruitouchpunch:{
      deps: ['jQuery']
    },
    angulargooglemaps: {
      deps: ['gmaps', 'lodash']
    },
    bootstrap_tagsinput : {
      deps:['jQuery', 'angular'],
      exports: 'bootstrap_tagsinput'
    },
    tagsinput : {
      exports: 'tagsinput',
      deps: ['jQuery']
    },
    typeahead: {
      deps: ['jQuery']
    },
    ui_bootstrap: {
      deps: ['angular']
    },
    jasmine: {
      deps: ['angular']
    },
    truncate: {
      deps: ['angular']
    }
  },
  priority: [
    'angular'
  ],

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});