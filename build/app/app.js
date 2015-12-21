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
    'ui_bootstrap',
    'angularResource',
    'angularUIRouter',
    'controllers/index',
    'directives/index',
    'utility/index',
  ],
  function(angular) {
    var ang_mod = angular.module('vrm-spa',
    [
      'ui.bootstrap',
      'ngResource',
      'ui.router',
      'controllers',
      'directives',
      'utility'
    ]);
   
        
    return ang_mod;
  }
);

