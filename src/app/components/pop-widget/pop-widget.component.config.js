(function() {
  'use strict';
  angular
    .module('popOver')
    .config(function ($stateProvider) {
      $stateProvider
        .state('popHome', {
          url: '/popHome',
          template: '<pop-widget></pop-widget>'
        });
    });
 })();
