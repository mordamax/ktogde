(function(){
    'use strict';

    angular.module("wtf.wtf", ['wtf.services'])


    .config([ "$routeProvider",
        function($routeProvider){
            $routeProvider
                .when('/wtf', {
                    templateUrl: "/partials/wtf",
                    controller: "WtfPageCtrl"
                })
        }
    ])

    .controller("WtfPageCtrl", [ "$scope", "API",
        function($scope, API){
            API.terms.all.get({ published:true }, function(response){
                console.log("response", response.payload);
                $scope.terms = response.payload;
            })
        }
    ])

})(this)