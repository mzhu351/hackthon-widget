(function() {
	'use strict';

	var app = angular.module('popOver');

	function WidgetFooterController() {
		var model = this;
		model.buttonLabel = 'Send Message';
	}

	app.component('widgetFooter', {
		templateUrl: 'app/components/pop-widget/widget-footer/widget-footer.component.html',
		controllerAs: 'model',
		controller: [WidgetFooterController],
		bindings: {}
	});

})();
