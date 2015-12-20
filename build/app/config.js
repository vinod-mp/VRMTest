require.config({
    baseUrl: 'app/',
    waitSeconds: 0,
    paths : {
      angular: 'lib/angular/angular',
      angularResource: 'lib/angular-resource/angular-resource',
      angularUIRouter: 'lib/angular-ui-router/release/angular-ui-router',
      domReady: 'lib/requirejs-domready/domReady',
      jQuery: 'lib/jquery/dist/jquery',
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
      angularUIRouter: {
        deps: ['angular']
      },
      jQuery: {
        exports: '$'
      },
      ui_bootstrap: {
        deps: ['angular']
      }
    },
    priority: [
      'angular'
    ],
    deps: ['bootstrap']
});