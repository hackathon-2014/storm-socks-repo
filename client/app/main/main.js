'use strict';

angular.module('gepettoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/build', {
        templateUrl: 'app/build/build.html',
        controller: 'BuildCtrl'
      });
  });