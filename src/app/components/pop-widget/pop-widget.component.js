(function() {

		'use strict';

		var module = angular.module('dynaPop');

		function PopWidgetController() {
			var model = this;

			model.title = 'Pop Widget Component';

			model.$onInit = function() {
				console,log('POP widget Initiated!');
			};
		}

		module.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: [PopWidgetController]
		});

})();
