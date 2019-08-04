angular.module('MyApp')
	.directive('navbarsecond', function() {
		return {
			templateUrl: '/components/navbar/navbarSecond.html',
			restrict: 'E',
			controller: 'NavCtrl',
			scope: {},
			link: function(scope, element) {

				scope.isSecondCollapsed = true;
				scope.secondCollaps = function() {
					scope.isSecondCollapsed = !scope.isSecondCollapsed;
				};
			}
		}
	});

