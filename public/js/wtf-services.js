(function(){
    'use strict';

    angular.module("wtf.services", ['ngResource'])

    .factory("API", ['$resource', function($resource){
        return {
            terms: {
                'all': $resource("/api/terms", {}, {}),
                'one': $resource("/api/term/:id", {id: "@id"}, {})
            }
        }
    }])
})(this)