require('angular');
require('angular-bootstrap');
require('angular-route');
console.log("this:");
var app = angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider) {

  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .otherwise({templateUrl: '/views/404.html'});
 

});

