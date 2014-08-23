console.log("sheeit");
BABYLON = require('babylonjs');
var sceneViewer = require('./sceneViewer.js');

require('angular');
require('angular-bootstrap');
require('angular-route');
var mainctrl = require('./main');

  $('document').ready(function(){
    var scene = new sceneViewer("renderCanvas")
    document.scene = scene;
    scene.run();
    scene.addBlock();
    console.log("addin a block here boss");
  });

angular.module('Gepetto', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider) {



  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .otherwise({templateUrl: '/views/404.html'});
  
}).controller('MainCtrl', ['$scope', mainctrl.MainCtrl]);
