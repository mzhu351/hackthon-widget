(function() {
	'use strict';

	var app = angular.module('popOver');

	function fetchTopics($http) {
		return $http.get('./topics.json')
						.then(function(response) {
							return response.data;
						});
	}

	function TopicListController($http, $window) {
		var model = this;

		model.searchSubmitted = false;

		model.topics = [];

		model.title = 'Popular Topics';

		model.$onInit = function() {
			fetchTopics($http)
				.then(function(data) {
					console.log('onInit data', data);
					model.topics = data;
				});
		};

		model.onKeyPress = function(event)
		{
		    if (event.charCode == 13) //if enter then hit the search button
		        model.search();
						model.searchSubmitted = true;

		}

		model.openNewTab = function(url) {
			$window.open(url, '_blank');
		};

	}


	app.component('topicList', {
		templateUrl: 'app/components/pop-widget/topic-list/topic-list.component.html',
		controllerAs: 'model',
		controller: ['$http', '$window', TopicListController],
		bindings: {}
	});

})();
