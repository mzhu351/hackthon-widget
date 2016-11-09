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

			model.actions = ['searchView', 'detailView', 'msgView'];
			model.userAction = model.actions[0];

		}

		app.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: [PopWidgetController],
			bindings: {}
		});

})();
