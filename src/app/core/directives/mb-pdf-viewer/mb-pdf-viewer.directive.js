'use strict';

function linkFn(scope, elem, attrs) {
	scope.$watch(attrs.mbSrc, newVal => {
		elem.html('PDF VIEWER:' + newVal);
	});
}

function mbPdfViewerDirective() {
	'ngInject';

	return {
		restrict: 'E',
		link: linkFn,
	};

}


export default function(app) {
	app.directive('mbPdfViewer', mbPdfViewerDirective);
}