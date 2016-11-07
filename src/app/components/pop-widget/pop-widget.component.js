(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function fetchTopics($http) {
			return $http.get('./topics.json')
							.then(function(response) {
								return response.data;
							});
		}

		function PopWidgetController($http, $window) {
			var model = this;

			model.topics = [];

			model.isSearchFormDisplayed = false;

			model.title = 'Popular Topics';

			model.$onInit = function() {
				fetchTopics($http)
					.then(function(data) {
						console.log('onInit data', data);
						model.topics = data;
					});
			};

			model.openPop = function() {
				model.isSearchFormDisplayed = !model.isSearchFormDisplayed;
			};

			model.openNewTab = function(url) {
				$window.open(url, '_blank');
			};


		}


		app.component('popWidget', {
			templateUrl: 'app/components/pop-widget/pop-widget.component.html',
			controllerAs: 'model',
			controller: ['$http', '$window', PopWidgetController],
			bindings: {}
		});

})();
