(function(){
    'use strict';
    var deps = [
            'ngResource'
        ,   'wtf.wtf'
        ,   'wtf.incubator'
        ,   'wtf.services'
    ]
    angular.module('wtf', deps)

        .config([ "$routeProvider", "$locationProvider",
            function($routeProvider, $locationProvider){
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: "/partials/about",
                        controller: "AboutPageCtrl"
                    })
            }
        ])

        .controller("AboutPageCtrl", ["$scope",
            function($scope){
                console.log("About Page")
            }
        ])
})(this)