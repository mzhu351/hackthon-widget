(function() {
	'use strict';

	var app = angular.module('popOver');

	function MsgViewController() {
		var model = this;
		model.msg = 'View Message Bot';
	}

	app.component('msgView', {
		templateUrl: 'app/components/pop-widget/msg-view/msg-view.component.html',
		controllerAs: 'model',
		controller: [MsgViewController],
		bindings: {}
	});

})();
