'use strict';

angular.module('MyApp')
	.controller('NavCtrl', ['$scope', '$location', '$state', 'Auth',
					function($scope, $location, $state, Auth) {
		$scope.isLoggedIn = Auth.isLoggedIn;
		$scope.currentUser = Auth.currentUser;
		$scope.isCollapsed = true;
		$scope.isSecondCollapsed = true;

		$scope.isAdmin = function() {
			return Auth.currentRole() === 'admin';
		}

		$scope.collaps = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		$scope.isActive = function(route) {     
			return route === $location.path();
		};

		$scope.logOut = function() {
			Auth.logOut()
			$state.go('home');
		}

		$scope.secondCollaps = function() {
			$scope.isSecondCollapsed = !$scope.isSecondCollapsed;
		};

		$scope.secondClose = function() {
			$scope.isSecondCollapsed = true;
		};

		$scope.status = {
			isopen_about: false,
			isopen_articles: false,
		};

	}])