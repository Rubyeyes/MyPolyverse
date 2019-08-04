angular.module('MyApp')
	.directive('draggable', function () {
	    return function(scope, element) {
	        // this gives us the native JS object
	        var el = element[0];

	        el.draggable = true;

	        el.addEventListener(
	            'dragstart',
	            function(e) {
	                console.log('dragstart called');
	                e.dataTransfer.effectAllowed = 'move';
	                e.dataTransfer.setData('Text', 'test test test');
	                return false;
	            },
	            false
	        );

	        el.addEventListener(
	            'dragend',
	            function(e) {
	                console.log('dragend called');
	                e.preventDefault();
	                return false;
	            },
	            false
	        );
	    }
	});