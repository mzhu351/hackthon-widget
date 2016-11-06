(function() {
  'use strict';

  angular
    .module('dynaPop')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.date = new Date();
  }
})();
