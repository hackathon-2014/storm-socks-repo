require('angular');
require('angular-bootstrap');
require('angular-route');
var mainctrl = require('./main');

console.log("this:");
angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider) {

  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .otherwise({templateUrl: '/views/404.html'});
 

}).controller('MainCtrl', ['$scope', mainctrl.MainCtrl]);

