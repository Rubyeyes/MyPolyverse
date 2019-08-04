angular.module('MyApp')
		.directive("scrollsidebar", function ($window) {
		    return function(scope, element, attrs) {
		        angular.element($window).bind("scroll", function() {
		        	if(this.pageYOffset>130 && this.innerWidth > 756) {
		        		element.css({
		        			position: 'fixed',
		        			top: '10px',
		        		}) 
		        	} else {
		        		element.css({
		        			position: 'initial',
		        			top: '95px',
		        		})
		        	}
		            scope.$apply();
		        });
		    };
		});