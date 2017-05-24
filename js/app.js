angular.module('app', ['ngRoute', 'controller'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/search.html',
		controller: 'Header_Ctrl'
	})
	.when('/search', {
		templateUrl: 'templates/search.html',
		controller: 'Header_Ctrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})