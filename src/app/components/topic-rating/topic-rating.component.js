(function(){
	'use strict';

	var app = angular.module('dynaPop');

	function buildEntries(value, max) {
		var entries = [];

		for(var i = 1; i <= max; i++) {
			var icon = i <= value ? 'fa-star' : 'fa-star-o';
			entries.push(icon);
		}

		return entries;
	}

	function TopicRatingController() {
		var model = this;

		// Define default status is 5 star available for rating
		if (!model.max) {
			model.max = 5;
		}

		model.$onInit = function() {
			console.log('in topic rating init max', model.max);
			model.entries = buildEntries(model.value, model.max);
		//	console.log('in top rating init', model.entries);
		};
	}

	app.component('topicRating', {
		templateUrl: 'app/components/topic-rating/topic-rating.component.html',
		bindings: {
			value: '<',
			max: '<'
		},
	  controllerAs: 'model',
		controller: [TopicRatingController]
	});

})();
