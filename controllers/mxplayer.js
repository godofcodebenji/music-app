var app = angular.module('mxPlayer', ['ngRoute']);

app.controller('mxPlayer',function($scope, $route){
	$scope.title = 'Mx Music Player';
}).config(function($routeProvider){

	$routeProvider
	.when("/",{
		templateUrl: "views/fragments/default.html"
	}).when("/login", {
		templateUrl: "views/templates/login/login.html"
	});

});