(function() {
	'use strict';

	var app = angular.module('dynaPop');

	function TopicDetailController() {
		var model = this;
		model.detail = 'Topic detail';
	}

	app.component('topicDetail', {
		templateUrl: 'app/components/pop-widget/topic-detail/topic-detail.component.html',
		controllerAs: 'model',
		controller: [TopicDetailController],
		bindings: {}
	});

})();
