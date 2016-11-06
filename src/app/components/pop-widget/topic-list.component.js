(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function TopicListController() {
			var model = this;

			model.title = 'topic list is here';

			model.$onInit = function() {
				console.log('Topic List Initiated!');
			};

		}

		app.component('topicList', {
			templateUrl: 'app/components/pop-widget/topic-list.component.html',
			controllerAs: 'model',
			controller: [TopicListController]
		});

		app.filter('topicSearch', function() {
			return function (items) {
				var filtered = [];

			}
		});

})();
