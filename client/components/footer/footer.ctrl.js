'use strict';

angular.module('MyApp')
	.controller('FooterCtrl', ['$scope', 'Info', '$location',function($scope, Info, $location) {
		Info.getAll().then(function(res) {
			$scope.information = res;
		});

		$scope.$on('$stateChangeSuccess',function(){
	        var path = $location.path();
			if(path === '/learn' && window.innerWidth > 1279) {
				$scope.footerMargin = {'margin-left': '320px'};	
			} else {
				$scope.footerMargin = {'margin-left': '0px'};	
			};
	    });

	}])