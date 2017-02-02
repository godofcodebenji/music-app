var app = angular.module('mxPlayer', ['ngRoute']);
app.factory('appService', function(){
	var appIsOnline=navigator.onLine;
	var userData='';
	var userType='';
	var batteryPercentage='';
	var batteryCharging=false;
	var batteryLevelIsCritical=false;


	return {
		getOnlineStatus: function(){
			return appIsOnline;
		},

		getUserStatus: function(){
			return userIsActive;
		},

		setUserData: function(appServiceUser)
		{
			userData=appServiceUser;
		},

		getuserData: function()
		{
			return userData;
		}
	}

});
app.controller('mxPlayer',function($scope, $http, $location, $route, appService){
	$scope.title = 'Mx Music Player';

	if (appService.getOnlineStatus()===false)
	{
		$location.url('404');
	}

	$http({
		'method': 'GET',
		'url': 'http://phoxphp.web/',
		headers: {
			'Accept':'application/json'
		},
	}).then(function(response){
		// If the api url is found, pass service data.
		alert();
	}, function(response){
		if (response.status!==200)
		{
			$location.url('login');
		}
	});
}).config(function($routeProvider){

	$routeProvider
	.when("/",{
		templateUrl: "views/fragments/default.html"
	}).when("/login", {
		templateUrl: "views/templates/login/login.html"
	}).otherwise({
		templateUrl: "views/fragments/404.html"
	});

});