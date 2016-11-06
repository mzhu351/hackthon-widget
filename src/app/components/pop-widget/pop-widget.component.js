(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function PopWidgetController() {
			var model = this;

			model.title = 'Pop Widget Component';

			model.$onInit = function() {
				console.log('POP widget Initiated!');
			};

			model.openPop = function() {
				console.log('Pop is open!');
			};
		}

		app.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: [PopWidgetController]
		});

})();
