'use strict';

/*
 * Creating Angular Module Definition for the Application
 * All required dependencies like routers, Controllers,
 * Directives, Services etc are Injected in here.
 * Module looks up the index files and downloads the required dependencies
*/

define('app',
  [
    'angular',
    'jQuery',
    'async',
    'bootstrap_tagsinput',
    'ui_bootstrap',
    'lodash',
    'respond',
    'tagsinput',
    'angularResource',
    'angularUIRouter',
    'controllers/index',
    'directives/index',
    'utility/index',
  ],
  function(angular) {
    var ang_mod = angular.module('vrm-spa',
    [
      'ngResource',
      'ui.router',
      'controllers',
      'directives',
      'utility',
      'ui.bootstrap',
    ]);
   
    var host;
    if (!window.location.origin) {
      host = window.location.protocol + "//" +
        window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    else {
      host = window.location.origin;
    }
        
    return ang_mod;
  }
);

