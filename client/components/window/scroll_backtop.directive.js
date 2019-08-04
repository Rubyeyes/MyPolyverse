angular.module('MyApp')
		.directive("scrollbacktop", function ($window) {
		    return {
		    	restrict: 'A',
		    	link: function(scope, element, attr) {
		    		element.on('click', function(event) {
				        // Prevent default dragging of selected content
				        event.preventDefault();
				        $window.scrollTo(0,0);
				      });
		    	}
		    }
		});