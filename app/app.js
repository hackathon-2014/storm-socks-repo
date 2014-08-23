require('angular');

angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(['$routeProvider', function($routeProvider) {
  console.log("yololo:");
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

