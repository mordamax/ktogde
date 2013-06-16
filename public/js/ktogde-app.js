(function(){
    'use strict';
    var deps = [
        'ngResource'
    ,   'ktogde.controllers'
    ,   'ktogde.api'
    ,   'ktogde.map'
    ]
    window.ktogde = angular.module('ktogde', deps)
        .config(function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    controller: 'HomePageCtrl',
                    templateUrl: "/partials/home"
                })
                .otherwise('/')
        })
})(this)