'use strict';

angular.module('gepettoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/build', {
        templateUrl: 'app/build/build.html',
        controller: 'BuildCtrl'
      });
  });
