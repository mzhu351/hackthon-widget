(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function fetchTopics($http) {
			return $http.get('./topics.json')
							.then(function(response) {
								return response.data;
							});
		}

		function TopicListController($http) {
			var model = this;

			model.title = 'topic list is here';

			model.$onInit = function() {
				console.log('Topic List Initiated!');
				fetchTopics($http)
					.then(function(data) {
						console.log('onInit data', data);
						model.topics = data;
					});
			};

		}

		app.component('topicList', {
			templateUrl: 'app/components/pop-widget/topic-list.component.html',
			controllerAs: 'model',
			controller: ['$http', TopicListController]
		});

})();
