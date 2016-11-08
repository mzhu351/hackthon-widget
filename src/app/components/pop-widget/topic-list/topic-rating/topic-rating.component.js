(function(){
	'use strict';

	var app = angular.module('dynaPop');

	function updateStars(ratingValue, max) {
		var stars = [];

		for(var i = 1; i <= max; i++) {
			var icon = i <= ratingValue ? 'fa-star' : 'fa-star-o';
			stars.push(icon);
		}

		return stars;
	}

	function TopicRatingController($watch) {
		var model = this;

		// Define default status is 5 star available for rating
		if (!model.max) {
			model.max = 5;
		}
		model.toggle = function(index) {
			model.ratingValue = index +1;
			model.stars = updateStars(model.ratingValue, model.max);
		};

		model.$onInit = function() {
			model.stars = updateStars(model.ratingValue, model.max);
		//	console.log('in top rating init', model.entries);
		};


	}

	app.component('topicRating', {
		templateUrl: 'app/components/pop-widget/topic-list/topic-rating/topic-rating.component.html',
		bindings: {
			ratingValue: '=ngModel', //pass rating value
			max: '=?' //optional (default is 5)
		},
	  controllerAs: 'model',
		controller: [TopicRatingController]
	});

})();
