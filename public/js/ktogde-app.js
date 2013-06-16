(function(){
    'use strict';
    var deps = [
        'ngResource'
    ,   'ktogde.controllers'
    ]
    window.ktogde = angular.module('ktogde', deps)
        .config(function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    controller: 'HomePageCtrl',
                    templateUrl: "/partials/home"
                })
                .when('/about', {
                    controller: "AboutPageCtrl",
                    templateUrl: "/partials/about"
                })
                .otherwise('/')
        })
})(this)