(function() {

		'use strict';

		var app = angular.module('popOver');

		function PopWidgetController() {
			var model = this;

			model.isSearchFormDisplayed = false;

			model.$onInit = function() {
			};

			model.openPop = function() {
				model.isSearchFormDisplayed = !model.isSearchFormDisplayed;
			};


		}

		app.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: [PopWidgetController],
			bindings: {}
		});

})();
