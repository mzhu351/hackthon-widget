(function() {

		'use strict';

		var app = angular.module('dynaPop');

		function TopicListController() {
			var ctrl = this;

			ctrl.title = 'topic list is here';

			ctrl.$onInit = function() {
				console.log('Topic List Initiated!');
			};

		}

		app.component('topicList', {
			templateUrl: 'app/components/pop-widget/topic-list.component.html',
			controllerAs: 'ctrl',
			controller: [TopicListController]
		});

})();
