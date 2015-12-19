require.config({
    baseUrl: 'app/',
    waitSeconds: 0,
    paths : {
      angular: 'lib/angular/angular',
      angularResource: 'lib/angular-resource/angular-resource',
      angularUIRouter: 'lib/angular-ui-router/release/angular-ui-router',
      domReady: 'lib/requirejs-domready/domReady',
      jQuery: 'lib/jquery/dist/jquery',
      async: 'lib/requirejs-plugins/src/async',
      lodash: 'lib/lodash/dist/lodash',
      respond: 'lib/respond/dest/respond.src',
      tagsinput: 'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput',
      bootstrap_tagsinput: 'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular',
      ui_bootstrap: 'lib/angular-bootstrap/ui-bootstrap-tpls',
    },
    shim: {
      angular: {
        deps: ['jQuery'],
        exports: 'angular'
      },
      angularResource: {
        deps: ['angular']
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
      truncate: {
        deps: ['angular']
      }
    },
    priority: [
      'angular'
    ],
    deps: ['bootstrap']
});