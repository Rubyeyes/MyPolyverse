'use strict';

angular.module('MyApp')
	.controller('NavSecondCtrl', ['$scope', '$location', '$state', 'Auth', 'user', function($scope, $location, $state, Auth, user) {
		$scope.isLoggedIn = Auth.isLoggedIn;
		$scope.currentUser = Auth.currentUser;
		$scope.isSecondCollapsed = true;

		$scope.isAdmin = function() {
			$scope.user = user;
			return user.role === 'admin';
		}

		$scope.logOut = function() {
			Auth.logOut()
			$state.go('home');
		}

		$scope.secondCollaps = function() {
			$scope.isSecondCollapsed = !$scope.isSecondCollapsed;
		};

		$scope.isActive = function(route) {     
			return route === $location.path();
		};

		$scope.status = {
			isopen_about: false,
			isopen_articles: false,
		};

		$scope.toggled = function(open) {
			$log.log('Dropdown is now: ', open);
		};

		// $scope.toggleDropdownAbout = function($event) {
		// 	$event.preventDefault();
		// 	$event.stopPropagation();
		// 	$scope.status.isopen = !$scope.status.isopen;
		// };

	}])