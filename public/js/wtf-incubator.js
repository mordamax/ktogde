(function(){
    'use strict';

    angular.module("wtf.incubator", ['wtf.services'])

    .config([ "$routeProvider",
        function($routeProvider){
            $routeProvider
                .when('/incubator', {
                    templateUrl: "/partials/incubator",
                    controller: "IncubatorPageCtrl"
                })

                .when("/incubator/new", {
                    templateUrl: "/partials/incubator-new",
                    controller: "NewTermPageCtrl"
                })
        }
    ])

    .controller("IncubatorPageCtrl", [ "$scope", "API",
        function($scope, API){
            API.terms.all.get({ published: false }, function(response){
                console.log("response", response.payload);
                $scope.terms = response.payload;
            })
        }
    ])

    .controller('NewTermPageCtrl', [ '$scope',
        function($scope){

        }
    ])


})(this)