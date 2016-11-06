(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function fetchTopics($http) {
			return $http.get('./topics.json')
							.then(function(response) {
								return response.data;
							});
		}

		function PopWidgetController($http) {
			var model = this;

			model.isSearchFormDisplayed = false;

			model.title = 'Recommended Topics';
			model.query = 'Retirement';

			model.$onInit = function() {
				fetchTopics($http)
					.then(function(data) {
						console.log('onInit data', data);
						model.topics = data;
					});
			};

			model.openPop = function() {
				console.log('Pop is open!');
				model.isSearchFormDisplayed = !model.isSearchFormDisplayed;
			};
		}

		app.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: ['$http', PopWidgetController]
		});

})();
