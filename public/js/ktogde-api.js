(function(){
    'use strict';

    angular.module("ktogde.api", ['ngResource'])

    .factory("API", ['$resource', function($resource){
        return {
            place: {
                'all': $resource("/api/places", {}, {}),
                'one': $resource("/api/place/:id", {id: "@id"}, {})
            }
        }
    }])
})(this)