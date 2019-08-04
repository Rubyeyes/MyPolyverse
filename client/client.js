angular.module('MyApp', [
			'ui.router',
			'ngAnimate', 
			'ngSanitize',
			'ui.bootstrap',
			'ngAria',
			'ngMaterial',
			'ngMessages',
			'cfp.loadingBar'
		])
		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider',
				function($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider){
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home/home.html',
					data: {
						title: 'MyPolyverse'
					}
				})
				.state('login', {
					url: '/login',
					templateUrl: '/account/auth/login.html',
					controller: 'AuthCtrl',
					data: {
						title: '登陆_蚂蚁三弟'
					},
					onEnter: ['$state', 'Auth', function($state, Auth) {
						if(Auth.isLoggedIn()) {
							$state.go('home');
						}
					}]
				})
				.state('register', {
					url: '/register',
					templateUrl: '/account/auth/register.html',
					controller: 'AuthCtrl',
					data: {
						title: '注册_蚂蚁三弟'
					},
					onEnter: ['$state', 'Auth', function($state, Auth) {
						if(Auth.isLoggedIn()) {
							$state.go('home');
						}
					}]
				})
				.state('search', {
					url: '/search',
					templateUrl: '/views/search/search.html',
					controller: 'SearchCtrl',
					data: {
						title: '搜索'
					}	
				})
				.state('categories', {
					url: '/categories',
					templateUrl: '/views/categories/categories.html',
					controller: 'CategoriesCtrl',
					data: {
						title: '分类'
					}	
				})
				.state('3dfiles', {
					url: '/3dfiles',
					templateUrl: '/views/3dfiles/3dfiles.html',
					controller: '3dfilesCtrl',
					data: {
						title: '3D文件'
					}	
				})
				.state('3dprint', {
					url: '/3dprint',
					templateUrl: '/views/3dprint/3dprint.html',
					controller: '3dprintCtrl',
					data: {
						title: '3D打印'
					}	
				})
				.state('videomake', {
					url: '/videomake',
					templateUrl: '/views/videomake/videomake.html',
					controller: 'VideomakeCtrl',
					data: {
						title: '视频制作'
					}	
				})
				.state('shopping', {
					url: '/shopping',
					templateUrl: '/views/shopping/shopping.html',
					controller: 'ShoppingCtrl',
					data: {
						title: '团购'
					}	
				})
				.state('patent', {
					url: '/patent',
					templateUrl: '/views/patent/patent.html',
					controller: 'ShoppingCtrl',
					data: {
						title: '一键专利'
					}	
				})
				.state('admin_setting', {
					url: '/admin_setting',
					templateUrl: '/account/admin_setting/admin_setting.html',
					controller: 'AdminSettingCtrl',
				    onEnter: ['$state', 'Auth',function($state, Auth){
				    	Auth.getUserInfo().then(function(response) {
				    		if(!Auth.isLoggedIn()) {
								$state.go('home');
							}
				    	})
				    }]
				})
				

			$urlRouterProvider.otherwise('home');
		    //user html5 route mode
		    $locationProvider.html5Mode(true);
		    
		}])
		.run(['$state', '$rootScope', 'cfpLoadingBar', function($state, $rootScope, cfpLoadingBar) {
		    $rootScope.$on('$stateChangeStart', function () {
		    		$rootScope.$state = $state;
		    });
		    $rootScope.$on('$stateChangeStart', 
				function(event, toState, toParams, fromState, fromParams){ 
			    	cfpLoadingBar.start();
			})

			$rootScope.$on('$stateChangeSuccess', 
				function(event, toState, toParams, fromState, fromParams){
			    	cfpLoadingBar.complete();
			})
		}]);
		
		
		