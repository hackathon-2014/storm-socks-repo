require('angular/angular');
require('angular-route/angular-route');


angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

