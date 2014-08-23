console.log("sheeit");
BABYLON = require('babylonjs');
sceneViewer = require('./sceneViewer.js');

require('angular');
require('angular-bootstrap');
require('angular-route');

var mainctrl = require('./main');


angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider) {

  $('document').ready(function(){
    var scene = new sceneViewer("renderCanvas")
    scene.run();
    debugger;
    console.log("addin a block here boss");
    scene.addBlock();
  });


  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .otherwise({templateUrl: '/views/404.html'});
  

}).controller('MainCtrl', ['$scope', mainctrl.MainCtrl]);


